import Link from "next/link";
import { baseUrl } from "../../../config";
import Meta from "../../../components/Meta";
// import { useRouter } from "next/router";

const article = ({ article }) => {
  // const {
  //   query: { id },
  // } = useRouter();
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// Server Side Rendering
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// Static Site Genetarion
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// Static Site Genetarion
// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const articles = await res.json();
//   const paths = articles.map((article) => ({
//     params: { id: article.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// Use API Routes
export const getStaticProps = async (context) => {
  const res = await fetch(`${baseUrl}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

// Use API Routes
export const getStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
