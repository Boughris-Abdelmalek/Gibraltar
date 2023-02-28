import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import Header from "../../components/header/Header";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import Footer from "../../components/footer/Footer";

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
              <SwiperSlide key={idx}>
                <img src={img} alt="Image" className={styles.imgCarousel} />
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
