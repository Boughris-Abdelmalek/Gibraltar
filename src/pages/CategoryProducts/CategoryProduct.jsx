import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
};

export default CategoryProduct;
