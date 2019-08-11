import fetch from "isomorphic-unfetch";
import nextCookie from 'next-cookies'
import Chat from '../Chat'
import Router from 'next/router'
import { withAuthSync } from '../utils/auth'

import Layout from '../layout/Layout'
const Index = props => {
  console.log(props);
  return (
    <Layout user={props.user}>
      <Chat channels={props.channels.channels} />
    </Layout>
  )
};

Index.getInitialProps = async ctx => {
  const { userId } = nextCookie(ctx)
  const redirectOnError = () => typeof window !== 'undefined' ? Router.push('/login') : ctx.res.writeHead(302, { Location: '/login' }).end()
  try {
    const fetchUser = await fetch(`https://api-40776739-b936-4974-a5a4-3dc627403f48.sendbird.com/v3/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json, charset=utf8',
        'Api-Token': '76726f33b606863e3f260aa93924a6af49fb9692'
      }
    })
    const fetchChannels = await fetch(`https://api-40776739-b936-4974-a5a4-3dc627403f48.sendbird.com/v3/open_channels`, {
      headers: {
        'Content-Type': 'application/json, charset=utf8',
        'Api-Token': '76726f33b606863e3f260aa93924a6af49fb9692'
      }
    })
    // const fetchChannels = await fetch('http://localhost:3000/api/sendbird')
    const channels = await fetchChannels.json()
    // console.log(channelList);
    const user = await fetchUser.json();
    return await { user, channels };
  } catch (error) {
    return redirectOnError()
  }
}

export default withAuthSync(Index)