import { useNavigate } from "react-router-dom";

import useShop from "../../context/ShopContext";
import ProductInfo from "../../components/productInfos/ProductInfo";
import styles from "./cart.module.css";
import Header from "../../components/header/Header";

import { Button } from "@mui/material";

const Cart = () => {
  const { products, total } = useShop();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  } 

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <ul className={styles.productContainer}>
          {Object.entries(products).map((product, index) => {
            return (
              <ProductInfo
                product={product[1]}
                styles={styles}
                isCart={true}
                key={index}
              />
            );
          })}
        </ul>
        {total === 0 ? (
          <div className={styles.totalContainer}>
          <h3>Cart Subtotal: {total}€</h3>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F7CA00",
              borderRadius: "5px",
              width: "14rem",
              fontSize: ".7rem",
              color: "black",
              "&:hover": {
                backgroundColor: "#F7CB09",
              },
            }}
            type="submit"
          >
            Proceed to checkout
          </Button>
        </div>
        ) : (
          <div className={styles.alternative}>
            <Button
            variant="contained"
            sx={{
              backgroundColor: "#F7CA00",
              borderRadius: "5px",
              width: "14rem",
              fontSize: "1rem",
              color: "black",
              "&:hover": {
                backgroundColor: "#F7CB09",
              },
            }}
            type="submit"
            onClick={handleClick}
          >
            Shop now !
          </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
