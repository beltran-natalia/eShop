import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import { Link } from "react-router-dom";

const Carousel = ({ featuredProducts }) => {
  // Settings from https://react-slick.neostack.com
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // one slide per featured product
  return (
    <Slider {...settings}>
      {featuredProducts.map((product) => (
        <div key={product.id}>
          <div
            className={styles.slide}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
