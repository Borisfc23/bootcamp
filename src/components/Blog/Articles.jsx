import "../../assets/styles/Blog/Articles.css";
import articulos from "../../assets/api/api.json";
import { useEffect, useState } from "react";
import Article from "./Article";
const Articles = () => {
  const [articlesContent, setarticlesUnit] = useState([]);
  useEffect(() => {
    const articles = articulos.filter((item) => item.type == "article");
    setarticlesUnit(articles);
  }, []);

  return (
    <section id="articles">
      <div className="articles-content section-p1">
        <h2>Latest Articles</h2>
        <div className="article-content">
          {articlesContent.map((item) => (
            <Article item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
