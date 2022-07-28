import React from "react";

const Food = ({ food }) => {
  const { name, type, img, description, price, availability } = food;
  return (
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Food" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Type: {type}</p>
        <p>Price: ${price}</p>
        {availability ? (
          <p className="text-orange-500">Available</p>
        ) : (
          <p className="text-red-500">Not Available</p>
        )}
        <div class="card-actions justify-end">
          <button
            disabled={!availability}
            class="btn glass bg-yellow-700 border-0"
          >
            Order !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
