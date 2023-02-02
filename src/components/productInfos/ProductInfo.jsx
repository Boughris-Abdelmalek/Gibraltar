import { useState } from "react";
import { Button, Select, MenuItem } from "@mui/material";

const ProductInfo = ({ product, styles, isCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

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
          {!isCart && <div className={styles.productsRef}>
            <a href={product["Product Url"]}>Product Url</a>
            <a href={product["Variants"]}>Product variants</a>
          </div>}
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
              <Button variant="outlined" color="error">
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
