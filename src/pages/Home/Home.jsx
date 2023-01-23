import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { useState, useEffect } from "react";

import { db } from "../../utils/firebase-config";
import { onValue, ref } from "firebase/database";

import Header from "../../components/header/Header";
import CategoryCard from "../../components/categoryCard/CategoryCard";

import img1 from "../../assets/images/HomePageCarousel/img1.jpg";
import img2 from "../../assets/images/HomePageCarousel/img2.jpg";
import img3 from "../../assets/images/HomePageCarousel/img3.jpg";
import img4 from "../../assets/images/HomePageCarousel/img4.jpg";
import img5 from "../../assets/images/HomePageCarousel/img5.jpg";

import styles from "./home.module.css";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay]);

const Home = () => {
  const [dataset, setDataset] = useState([]);

  const categories = [
    'Sports & Outdoors ',
    'Toys & Games ',
    'Clothing, Shoes & Jewelry ',
    'Home & Kitchen ',
    'Baby Products ',
    'Pet Supplies ',
    'Arts, Crafts & Sewing ',
    'Electronics ',
    'Video Games ',
    'Patio, Lawn & Garden ',
    'Tools & Home Improvement ',
    'Office Products ',
    'Grocery & Gourmet Food ',
    'Remote & App Controlled Vehicle Parts ',
    'Health & Household ',
    'Industrial & Scientific ',
    'Beauty & Personal Care ',
    'Hobbies ',
    'Remote & App Controlled Vehicles & Parts ',
    'Automotive ',
    'Musical Instruments ',
    'Movies & TV ',
    'Cell Phones & Accessories '
  ]
  
  
  useEffect(() => {
    const query = ref(db, "marketing_sample_for_amazon_com");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((set) => {
          setDataset((sets) => [...sets, set]);
        });
      }
    });
  }, []);
  
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
          <SwiperSlide>
            <img src={img1} alt="Image 1" className={styles.imgCarousel} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Image 2" className={styles.imgCarousel} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Image 3" className={styles.imgCarousel} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Image 4" className={styles.imgCarousel} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Image 5" className={styles.imgCarousel} />
          </SwiperSlide>
        </Swiper>
        <div className={styles.productCardContainer}>
          <CategoryCard
            titleCategory="Cell Phones & Accessories"
            imgCategory="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CategoryCard
            titleCategory="Video Games"
            imgCategory="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CategoryCard
            titleCategory="Baby Products"
            imgCategory="https://images.unsplash.com/photo-1622290291165-d341f1938b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
          />
          <CategoryCard
            titleCategory="Toys & Games"
            imgCategory="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CategoryCard
            titleCategory="Beauty & Personal Care"
            imgCategory="https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CategoryCard
            titleCategory="Electronics"
            imgCategory="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
          />
          <CategoryCard
            titleCategory="Home & Kitchen"
            imgCategory="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          />
          <CategoryCard
            titleCategory="Clothing, Shoes & Jewelry"
            imgCategory="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <CategoryCard
            titleCategory="Movies & TV"
            imgCategory="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
