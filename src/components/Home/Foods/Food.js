import React from "react";

const Food = ({ food }) => {
  const { name, type, img, description, price, availability } = food;
  return (
    <div className="card w-96 shadow-xl image-full">
      <figure>
        <img src={img} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Type: {type}</p>
        <p>Price: ${price}</p>
        {availability ? (
          <p className="text-orange-500">Available</p>
        ) : (
          <p className="text-red-500">Not Available</p>
        )}
        <div className="card-actions justify-end">
          <button
            disabled={!availability}
            className="btn glass text-white bg-yellow-700 border-0"
          >
            Order !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
