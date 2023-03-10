import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase-config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import Product from "../../components/productCard/Product";

import styles from "./category.module.css";
import { CircularProgress } from "@mui/material";

const CategoryProduct = () => {
  let { productsCategory } = useParams();
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tricky pagination by slicing the response array
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const query = ref(db, "category");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const filteredData = data[`${productsCategory}`];

        setDataset(filteredData);
        console.log(productsCategory);
        setLoading(false);
      }
    });
  }, [productsCategory]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className={styles.loaderContainer}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={styles.productsContainer}>
            {dataset.slice(startIndex, endIndex).map((e) => {
              if (e["About Product"]) {
                return (
                  <Product
                    class={styles.productCard}
                    img={e.Image}
                    name={e["Product Name"]}
                    price={e["Selling Price"]}
                    description={e["About Product"].slice(0, 100) + "..."}
                    productId={e["Uniq Id"]}
                    key={e["Uniq Id"]}
                  />
                );
              }
            })}
          </div>
          <ReactPaginate
            previousLabel={"< previous"}
            nextLabel={"next >"}
            breakLabel={". . ."}
            pageCount={dataset.length}
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            renderOnZeroPageCount={null}
            containerClassName={styles.paginationContainer}
            pageClassName={styles.paginationPage}
            activeClassName={styles.activePage}
            previousClassName={styles.pageLink}
            nextClassName={styles.pageLink}
          />
        </>
      )}
    </>
  );
};

export default CategoryProduct;
