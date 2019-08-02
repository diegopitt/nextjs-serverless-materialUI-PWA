import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { firebase } from './firebase'
import SendBird from 'sendbird';
const SendBirdApp = new SendBird({ appId: '40776739-B936-4974-A5A4-3DC627403F48' })

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log(user.user.uid);
    SendBirdApp.connect(user.user.uid, (sbUser, error) => {
      console.log(sbUser);
      cookie.set('userId', user.user.uid, { expires: 1 })
      Router.push('/')
    });

    return user;
  }).catch((error) => {
    console.log(error.message);
  });
}
export const logout = () => {
  return firebase.auth().signOut().then(() => {
    SendBirdApp.disconnect(function () {
      console.log('disconneted');
      cookie.remove('userId')
      Router.push('/login')
      return;
    });
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
    return { ...componentProps, userId, SendBirdApp }
  }

  constructor(props) {
    super(props)
    this.syncLogout = this.syncLogout.bind(this)
  }

  componentDidMount() {
    window.addEventListener('storage', this.syncLogout)
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.syncLogout)
    window.localStorage.removeItem('logout')
  }

  syncLogout(event) {
    if (event.key === 'logout') {
      Router.push('/login')
    }
  }

  render() {
    return <WrappedComponent {...this.props} />
  }
}

export const auth = ctx => {
  const { userId } = nextCookie(ctx)
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
