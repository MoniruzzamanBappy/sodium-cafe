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
        {foods.map((food, index) => (
          <Food key={index} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
