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
    const currentProduct = {
      name: product["Product Name"] || product.name,
      price: product["Selling Price"] || product.price,
      image: product.Image || product.image,
      id: product["Uniq Id"] || product.id,
    };

    console.log(currentProduct);

    removeFromCart(currentProduct);
  };

  return (
    <li>
      <div>
        <img
          src={product.Image || product.image}
          alt={product["Product Name"]}
        />
      </div>
      <div className={styles.productInfos}>
        <div>
          <h3>{product["Product Name"] || product.name}</h3>
          <h5>{product["About Product"] || product.about}</h5>
        </div>
        {!isCart && <div className={styles.separator}></div>}
        <div>
          <h3>{product["Selling Price"] || product.price}€</h3>
          <h5>{product["Category"] || product.category}</h5>
          {!isCart && (
            <div className={styles.productsRef}>
              <a href={product["Product Url"] || product.url}>Product Url</a>
              <a href={product["Variants"] || product.variants}>
                Product variants
              </a>
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
