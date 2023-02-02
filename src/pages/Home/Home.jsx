import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import Header from "../../components/header/Header";
import CategoryCard from "../../components/categoryCard/CategoryCard";

import { categories, carouselImg } from "../../utils/data";

import styles from "./home.module.css";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay]);

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Swiper
          slidesPerView={1}
          navigation
          loop
          className={styles.ImgContainer}
        >
          {carouselImg.map((img, idx) => {
            return (
              <SwiperSlide>
                <img
                  src={img}
                  alt="Image"
                  className={styles.imgCarousel}
                  key={idx}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.productCardContainer}>
          {categories.map((e, idx) => {
            return (
              <CategoryCard
                titleCategory={e.titleCategory}
                imgCategory={e.imgCategory}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
