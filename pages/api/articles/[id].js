import { articles } from "../../../data";

// localhost:3000/api/articles
export default function handler(req, res) {
  const article = articles.find((article) => article.id === req.query.id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
}
