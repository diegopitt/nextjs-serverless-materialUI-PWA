import fetch from "isomorphic-unfetch";
import nextCookie from 'next-cookies'
import Router from 'next/router'
import { withAuthSync } from '../utils/auth'
import { sendBirdWrapper } from "../sendbird/sendBirdWrapper";
import Layout from '../layout/Layout'

const Index = ({ posts, user }) => (
  <>
    <Layout {...user}>
      <p>Hello, Diego</p>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Layout>
  </>
);

Index.getInitialProps = async ctx => {
  const { userId } = nextCookie(ctx)
  //console.log();
  const redirectOnError = () => typeof window !== 'undefined' ? Router.push('/login') : ctx.res.writeHead(302, { Location: '/login' }).end()
  try {
    const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const fetchUser = await fetch(`https://api-40776739-b936-4974-a5a4-3dc627403f48.sendbird.com/v3/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json, charset=utf8',
        'Api-Token': '76726f33b606863e3f260aa93924a6af49fb9692'
      }
    })
    const posts = await fetchPosts.json();
    const user = await fetchUser.json();
    return await { posts, user };
  } catch (error) {
    return redirectOnError()
  }
}

export default withAuthSync(Index);
