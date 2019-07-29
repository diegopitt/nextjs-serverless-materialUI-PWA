import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import firebase from 'firebase/app'
import 'firebase/auth'

export const login = async ({ token }) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/profile')
}

export const logout = () => {
  cookie.remove('token')
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

const getDisplayName = Component => Component.displayName || Component.name || 'Component'

export const withAuthSync = WrappedComponent => class extends Component {
  static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`
  static async getInitialProps(ctx) {
    const token = auth(ctx)
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))
    return { ...componentProps, token }
  }

  constructor(props) {
    super(props)
    this.syncLogout = this.syncLogout.bind(this)
  }

  componentDidMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
    window.addEventListener('storage', this.syncLogout)
  }

  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
    window.removeEventListener('storage', this.syncLogout)
    window.localStorage.removeItem('logout')
  }

  syncLogout(event) {
    if (event.key === 'logout') {
      Router.push('/login')
    }
  }

  authListener() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log('saving user');
        // localStorage.setItem('user', user);
        // localStorage.setItem('isAuthenticated', true);
        // localStorage.setItem('userID', user.uid);
        // this.setState({
        //   isAuthenticated: true,
        //   userID: user.uid,
        //   user: user
        // })
      } else {
        //console.log('user removed');
        // localStorage.removeItem('user');
        // localStorage.removeItem('isAuthenticated');
        // localStorage.removeItem('userID');
        // this.setState({
        //   isAuthenticated: false,
        //   userID: null,
        //   accountType: null,
        //   user: {}
        // });
      }
    });
  }

  render() {
    return <WrappedComponent {...this.props} />
  }
}

export const auth = ctx => {
  const { token } = nextCookie(ctx)
  /* If we are on server and token is not available, means user is not logged in. */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/login')
  }

  return token
}
