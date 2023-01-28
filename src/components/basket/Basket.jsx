import { useState, useEffect } from "react";
import styles from "./basket.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import useShop from "../../context/ShopContext";

const Basket = ({ name, price, image }) => {
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { products, addToCart, removeFromCart, updateQuantity } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleChange = (event) => {
    const product = { name, price, image, quantity };
    setQuantity(event.target.value);
    updateQuantity(product, event.target.value);
  };

  const handleClick = () => {
    const product = { name, price, image, quantity };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const today = new Date();
  const deliveryDate = new Date(
    today.setDate(today.getDate() + 7)
  ).toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${
            import.meta.env.VITE_IPGEOLOCATION_API_KEY
          }`
        );
        const data = await response.json();
        setCountry(data.country_name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.basketContainer}>
      <h1>{price}€</h1>
      <h5>Delivery {deliveryDate}</h5>
      <p>Deliver to {country}</p>
      <h3>In Stock</h3>
      <FormControl sx={{ m: 1, height: "max-content" }} size="small">
        <InputLabel id="demo-select-small">Qty:</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={quantity}
          label="Qty"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <Stack spacing={2} direction="column" marginTop={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F7CA00",
              cursor: "pointer",
              borderRadius: "20px",
              boxShadow: "0",
              "&:hover": {
                backgroundColor: "#F7CA00",
              },
            }}
            onClick={handleClick}
          >
            {isInCart ? "Remove" : "Add to Cart"}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FA8900",
              cursor: "pointer",
              borderRadius: "20px",
              boxShadow: "0",
              "&:hover": {
                backgroundColor: "#FA8900",
              },
            }}
          >
            Buy Now
          </Button>
        </Stack>
      </FormControl>
    </div>
  );
};

export default Basket;
