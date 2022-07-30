import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Food from "./Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="grid justify-items-center bg-yellow-50 mx-auto py-12 text-center ">
      <h2 className="text-5xl mb-8 font-bold text-yellow-700">Foods</h2>
      <div className="grid mx-auto gap-16 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {foods.slice(0,9).map((food, index) => (
          <Food key={index} food={food} />
        ))}
      </div>
      <button className="btn w-60  text-white bg-yellow-700 border-0 my-4">See All Foods</button>
    </div>
  );
};

export default Foods;
