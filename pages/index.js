import fetch from "isomorphic-unfetch";
import Layout from '../layout/Layout';
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

Index.getInitialProps = async function() {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await fetchPosts.json();

  return {
    posts
  };
};

export default Index;
