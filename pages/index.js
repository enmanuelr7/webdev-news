import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { baseUrl } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News - Home</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// Static Site Generation
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };

// use API Routes
export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
