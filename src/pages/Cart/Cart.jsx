import React from "react";
import useShop from "../../context/ShopContext";
import Product from "../../components/productCard/Product";

const Cart = () => {
  const { products, total } = useShop();
  return (
    <>
      <div>Cart</div>
      <ul>
        {products.map((product, index) => {
          return (
            <Product
              {...product}
              key={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
