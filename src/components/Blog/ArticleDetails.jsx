import { useParams } from "react-router-dom";
import "../../assets/styles/Blog/ArticleDetails.css";
import FullWithLaout from "../../layout/FullWithLaout";
import Details from "./Details";
import articulos from "../../assets/api/api.json";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const [articleDetails, setarticleDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const article = articulos.find((item) => item.id == id);
    setarticleDetails(article);
  }, [id]);

  return (
    <FullWithLaout previsible={false}>
      <Details article={articleDetails} />
    </FullWithLaout>
  );
};

export default ArticleDetails;
