import React from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { db } from "../../utils/firebase-config";
import { useEffect, useState } from "react";
import styles from "./productPage.module.css";

const ProductPage = () => {
    const { product } = useParams();
    const [dataset, setDataset] = useState([]);
    useEffect(() => {
        const query = ref(db, "marketing_sample_for_amazon_com");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            const filteredData = Object.values(data).filter((key, val) => {
              if(key["Uniq Id"] === product) {
                return key;
              }
            });
    
            setDataset(filteredData[0]);
          }
        });
      }, [product]);

  console.log(dataset);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div>
            <img src={dataset.Image} alt={dataset["Product Name"]} />
        </div>
        <div className={styles.productInfos}>
            <div>
                <h3>{dataset["Product Name"]}</h3>
                <h5>{dataset["About Product"]}</h5>
            </div>
            <div className={styles.separator}></div>
            <div>
                <h3>{dataset[" Selling Price "]}$</h3>
                <h5>{dataset["Category"]}</h5>
                <div className={styles.productsRef}>
                    <a href={dataset["Product Url"]}>Product Url</a>
                    <a href={dataset["Variants"]}>Product variants</a>
                </div>
            </div>
        </div>
        <div className={styles.basketContainer}>
            <h1>Add to basket</h1>
            <h3>Buy now</h3>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
