import { useState } from "react";
import { Button, Select, MenuItem } from "@mui/material";
import useShop from "../../context/ShopContext";

const ProductInfo = ({ product, styles, isCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart } = useShop();

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    //I should destructure the product to use it later Tu va comprendre zebi
    const currentProduct = { name: product["Product Name"], price: product[" Selling Price "], image: product.Image, id: product["Uniq Id"] };

    console.log(currentProduct);

    removeFromCart(currentProduct);
  };

  console.log(product);

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
          <h3>{product[" Selling Price "]}€</h3>
          <h5>{product["Category"]}</h5>
          {!isCart && (
            <div className={styles.productsRef}>
              <a href={product["Product Url"]}>Product Url</a>
              <a href={product["Variants"]}>Product variants</a>
            </div>
          )}
          {isCart && (
            <>
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
              <Button variant="outlined" color="error" onClick={handleClick}>
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductInfo;
