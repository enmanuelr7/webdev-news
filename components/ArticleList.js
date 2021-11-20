import styles from "../styles/Article.module.css";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article key={article.id} article={article}>
          {article.title}
        </Article>
      ))}
    </div>
  );
};

export default ArticleList;
