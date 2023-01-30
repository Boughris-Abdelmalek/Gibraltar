const ProductInfo = ({ product, styles, isCart }) => {
  return (
    <div>
      <div>
        <img src={product.Image} alt={product["Product Name"]} />
      </div>
      <div className={styles.productInfos}>
        <div>
          <h3>{product["Product Name"]}</h3>
          <h5>{product["About Product"]}</h5>
        </div>
        <div className={styles.separator}></div>
        <div>
          <h3>{product[" Selling Price "]}€</h3>
          <h5>{product["Category"]}</h5>
          <div className={styles.productsRef}>
            <a href={product["Product Url"]}>Product Url</a>
            <a href={product["Variants"]}>Product variants</a>
          </div>
        </div>
        {isCart && <div>
          <button>Delete</button>
          </div>}
      </div>
    </div>
  );
};

export default ProductInfo;
