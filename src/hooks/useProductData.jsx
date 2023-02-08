import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase-config";

const useProductData = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = ref(db, "marketing_sample_for_amazon_com");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        const filteredData = Object.values(data).filter((key, val) => {
          if (key["Uniq Id"] === productId) {
            return key;
          }
        });
        setProduct(filteredData[0]);
        setLoading(false);
      }
    });
  }, [productId]);

  return { product, loading };
};

export default useProductData;
