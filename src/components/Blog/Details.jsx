import ArticleDetailHeader from "./ArticleDetailHeader";
import ArticlePaginate from "./ArticlePaginate";
import ArticleDetailBody from "./ArticleDetailBody";

const Details = ({ article }) => {
  return (
    <section id="article-detail">
      <div className="article-detail-back section-p1">
        <ArticleDetailHeader article={article} />
      </div>
      <ArticleDetailBody article={article} />
      <ArticlePaginate />
    </section>
  );
};

export default Details;
