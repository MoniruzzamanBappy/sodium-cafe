import React from "react";
import Carousel from "./Carousel/Carousel";
import GetStarted from './GetStarted';
import Foods from './Foods/Foods';
import Menus from "./Menus/Menus";

const Home = () => {
  return (
    <div>
      <Carousel />
      <GetStarted />
      <Foods/>
      <Menus/>
    </div>
  );
};

export default Home;
