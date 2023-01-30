import React from "react";
import useShop from "../../context/ShopContext";
import useProductData from "../../hooks/useProductData";
import ProductInfo from "../../components/productInfos/ProductInfo";
import styles from "./cart.module.css";
import Header from "../../components/header/Header";

const Cart = () => {
  const { products, total } = useShop();
  const cartProducts = [];

  products.map((e) => {
    cartProducts.push(useProductData(e.id));
  });

  console.log(cartProducts);

  Object.keys(cartProducts).map((product, index) => {
    console.log(product);
  });

  return (
    <>
      <Header />
      <ul className={styles.productContainer}>
        {Object.entries(cartProducts).map((product, index) => {
          return <ProductInfo product={product[1]} styles={styles} isCart={true} />;
        })}
      </ul>
    </>
  );
};

export default Cart;
