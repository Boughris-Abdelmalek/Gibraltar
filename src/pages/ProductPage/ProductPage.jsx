import React from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import Basket from "../../components/basket/Basket";
import useProductData from "../../hooks/useProductData";

const ProductPage = () => {
  const { product } = useParams();
  const dataset = useProductData(product);

  console.log(dataset);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div>
          <img src={dataset.Image} alt={dataset["Product Name"]} />
        </div>
        <div className={styles.productInfos}>
          <div>
            <h3>{dataset["Product Name"]}</h3>
            <h5>{dataset["About Product"]}</h5>
          </div>
          <div className={styles.separator}></div>
          <div>
            <h3>{dataset[" Selling Price "]}€</h3>
            <h5>{dataset["Category"]}</h5>
            <div className={styles.productsRef}>
              <a href={dataset["Product Url"]}>Product Url</a>
              <a href={dataset["Variants"]}>Product variants</a>
            </div>
          </div>
        </div>
        <Basket
          price={dataset[" Selling Price "]}
          name={dataset["Product Name"]}
          image={dataset.Image}
        />
      </div>
    </>
  );
};

export default ProductPage;
