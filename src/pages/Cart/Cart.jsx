import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import getStripe from "../../utils/getStripe";

import useShop from "../../context/ShopContext";
import ProductInfo from "../../components/productInfos/ProductInfo";
import styles from "./cart.module.css";
import Header from "../../components/header/Header";

import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const { products, total } = useShop();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const lineItems = Object.entries(products).map(([id, product]) => ({
      price: product.price_id,
      quantity: product.quantity,
    }));

    setLoading(true);

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "subscription",
      successUrl: `http://localhost:5173/`,
      cancelUrl: `http://localhost:5173/`,
      customerEmail: "customer@email.com",
    });

    console.warn(error.message);
  };

  return (
    <>
      <Header />
      {user ? (
        <>
          {loading && (
            <div className={styles.loaderContainer}>
              <CircularProgress />
            </div>
          )}
          {!loading && (
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
              {total !== 0 ? (
                <div className={styles.totalContainer}>
                  <h3>Cart Subtotal: {parseFloat(total).toFixed(2)}€</h3>
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
                    onClick={handleCheckout}
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
          )}
        </>
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
                    onClick={() => navigate("/login")}
                  >
                    Login to proceed
                  </Button>
                </div>
      )}
    </>
  );
};

export default Cart;
