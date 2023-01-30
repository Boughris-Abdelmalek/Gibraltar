import React from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import Basket from "../../components/basket/Basket";
import useProductData from "../../hooks/useProductData";
import ProductInfo from "../../components/productInfos/ProductInfo";

const ProductPage = () => {
  const { product } = useParams();
  const dataset = useProductData(product);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductInfo product={dataset} styles={styles} />
        <Basket
          price={dataset[" Selling Price "]}
          name={dataset["Product Name"]}
          image={dataset.Image}
          id={dataset["Uniq Id"]}
        />
      </div>
    </>
  );
};

export default ProductPage;
