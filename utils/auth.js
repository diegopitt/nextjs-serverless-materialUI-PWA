import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { firebase } from './firebase'

export const login = async (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    cookie.set('userId', user.uid, { expires: 1 })
    return user;
  }).catch((error) => {
    console.log(error.message);
  });
}
export const logout = () => {
  firebase.auth().signOut().then(() => {
    cookie.remove('userId')
    return;
  }).catch(function (error) {
    console.log(error);
  });
}

const getDisplayName = Component => Component.displayName || Component.name || 'Component'

export const withAuthSync = WrappedComponent => class extends Component {
  static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`
  static async getInitialProps(ctx) {
    const userId = auth(ctx)
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx))
    return { ...componentProps, userId }
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
        Router.push('/')
      } else {
        Router.push('/login')
      }
    });
  }

  render() {
    return <WrappedComponent {...this.props} />
  }
}

export const auth = ctx => {
  const { userId } = nextCookie(ctx)
  /* If we are on server and userId is not available, means user is not logged in. */
  if (ctx.req && !userId) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }
  if (!userId) {
    Router.push('/login')
  }
  return userId
}
