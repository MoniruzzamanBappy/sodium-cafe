import React from "react";

const GetStarted = () => {
  return (
    <>
      <h1 class="text-5xl  bg-base-200 text-center block lg:hidden font-bold">
        Sodium Cafe
      </h1>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/LdN7f6Q/sodium.jpg"
            alt="food"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl hidden lg:block font-bold">
              Sodium Cafe and Restaurants
            </h1>
            <p class="py-6 text-justify">
              Take advantage of our restaurant environment and foods when you
              stay at the Sodium Cafe. Eat a hearty breakfast at the menu or
              come to lunch and dinner for an international foods and live
              cooking stations. Sublime offers a sophisticated atmosphere and
              local Bangladeshi produce used in fine cuisine. If you want a more
              casual setting, enjoy Asian-inspired cuisine in Spice & Rice.
              Looking for a light meal? Chit Chat offers sandwiches, salads, and
              quiches. In the evenings, you can enjoy drinks and live
              entertainment with friends at the Blaze Entertainment Lounge.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
