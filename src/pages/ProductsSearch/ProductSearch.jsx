import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase-config";
import { onValue, ref } from "firebase/database";
import Header from "../../components/header/Header";
import Product from "../../components/productCard/Product";
import styles from "../CategoryProducts/category.module.css";
import { CircularProgress } from "@mui/material";

const ProductSearch = () => {
  const { products } = useParams();
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(products);

  useEffect(() => {
    const query = ref(db, "products");
    onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const filteredData = Object.entries(data).filter((val) => {
          return val[1]["Product Name"]
            .toLowerCase()
            .includes(products.toLowerCase());
        });

        setDataset(filteredData);
        setLoading(false);
      }
    });
  }, [products]);

  dataset.map((val, key) => {
    console.log(val[1]);
  });

  return (
    <>
      <Header />
      {loading ? (
        <div className={styles.loaderContainer}>
          <CircularProgress />
        </div>
      ) : dataset.length ? (
        <div className={styles.productsContainer}>
          {dataset.map((val, key) => {
            if (val[1]["About Product"]) {
              return (
                <Product
                  class={styles.productCard}
                  img={val[1].Image}
                  name={val[1]["Product Name"]}
                  price={val[1]["Selling Price"]}
                  description={val[1]["About Product"].slice(0, 100) + "..."}
                  productId={val[1]["Uniq Id"]}
                  key={val[1]["Uniq Id"]}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      ) : (
        <p className={styles.notFound}>No products found for '{products}'</p>
      )}
    </>
  );
};

export default ProductSearch;
