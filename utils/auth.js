import { Component } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { firebase } from './firebase'

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
