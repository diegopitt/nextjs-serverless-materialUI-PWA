import fetch from "isomorphic-unfetch";
import nextCookie from 'next-cookies'
import { withAuthSync } from '../utils/auth'
import Layout from '../layout/Layout'

const Index = ({ posts }) => (
  <>
    <Layout>
      <p>Hello, world.</p>
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
  const url = `${process.env.API_URL}/api/profile.js`

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end()

  try {
    const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await fetchPosts.json();
    return await { posts };

  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(Index);
