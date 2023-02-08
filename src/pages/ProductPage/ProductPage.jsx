import React from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import Basket from "../../components/basket/Basket";
import useProductData from "../../hooks/useProductData";
import { CircularProgress } from "@mui/material";

//gotta make the Product infos split in two or change the db

const ProductInfo = ({ product, styles }) => {
  const { removeFromCart } = useShop();

    console.log(currentProduct);

    removeFromCart(currentProduct);
  return (
    <li>
      <div>
        <img src={product.Image} alt={product["Product Name"]} />
      </div>
      <div className={styles.productInfos}>
        <div>
          <h3>{product["Product Name"]}</h3>
          <h5>{product["About Product"]}</h5>
        </div>
        {!isCart && <div className={styles.separator}></div>}
        <div>
          <div className={styles.productsRef}>
            <a href={product["Product Url"]}>Product Url</a>
            <a href={product["Variants"]}>Product variants</a>
          </div>
        </div>
      </div>
    </li>
  );
};

const ProductPage = () => {
  const { product } = useParams();
  const { product: productData, loading } = useProductData(product);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {loading ? (
          <CircularProgress style={{ padding: "75px" }} />
        ) : (
          <>
            <ProductInfo product={productData} styles={styles} />
            <Basket
              price={productData[" Selling Price "]}
              name={productData["Product Name"]}
              image={productData.Image}
              id={productData["Uniq Id"]}
              about={productData["About Product"]}
              category={productData["Category"]}
              url={productData["Product Url"]}
              variant={productData["Variants"]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;
