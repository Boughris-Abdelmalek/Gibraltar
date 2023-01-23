import styles from "./category.module.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <Link className={styles.CategoryCard} to={`/category/${props.titleCategory}`}>
      <div>{props.titleCategory}</div>
      <div className={styles.imgCategoryContainer}>
        <img src={props.imgCategory} alt="Category"></img>
      </div>
      <p>See more</p>
    </Link>
  );
};

export default CategoryCard;
