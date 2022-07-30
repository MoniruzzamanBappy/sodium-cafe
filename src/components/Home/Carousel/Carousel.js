import React from "react";

const Carousel = () => {
  return (
    <div className="carousel  w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          alt="restaurant"
          src="https://i.ibb.co/Prrf6pW/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-Custom.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          alt="restaurant"
          src="https://i.ibb.co/L6ZY6SD/plate-with-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-spinach-keto.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          alt="restaurant"
          src="https://i.ibb.co/VBMQCBB/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-pl.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
