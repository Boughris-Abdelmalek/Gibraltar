import React from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { product } = useParams();

  console.log(product);

  return (
    <>
      <Header />
    </>
  );
};

export default ProductPage;
