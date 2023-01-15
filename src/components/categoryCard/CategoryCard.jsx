import styles from "./category.module.css";

const CategoryCard = (props) => {
  return (
    <div className={styles.CategoryCard}>
      <div>{props.titleCategory}</div>
      <div className={styles.imgCategoryContainer}>
        <img src={props.imgCategory} alt="Category"></img>
      </div>
      <p>See more</p>
    </div>
  );
};

export default CategoryCard;
