import React from 'react';
import logoblack from "../assets/logob1.png"

const AboutUs = () => {
  return (
    <div className="tw-bg-white tw-dark:tw-bg-gray-900 tw-p-10 tw-rounded-xl tw-shadow-2xl tw-mx-auto tw-max-w-6xl tw-mt-16 tw-mb-16">
      <h1 className="tw-text-5xl tw-font-extrabold tw-mb-8 tw-text-center tw-text-gray-800 tw-dark:tw-text-gray-200">About Us</h1>
      <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
        Welcome to <span className="tw-font-bold tw-text-orange-500">FoodieHub</span>! We are passionate about bringing you the best culinary experiences from around the world. Whether you're craving Indian classics like Chole Bhature and Dosa, or delicious Italian pizzas, we have something to satisfy every palate.
      </p>
      <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
        Our platform connects you with top-rated restaurants that offer a variety of cuisines. From hearty South Indian meals at Curry Leaf to delectable desserts at Gianis, we ensure that your food journey is diverse and delightful.
      </p>
      <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
        We are committed to providing an easy and enjoyable way for you to discover and order your favorite dishes. Our user-friendly interface and curated recommendations help you make the best dining choices effortlessly.
      </p>
      <p className="tw-text-lg tw-text-gray-700 tw-dark:tw-text-gray-300 tw-mb-6 tw-leading-relaxed">
        Thank you for choosing <span className="tw-font-bold tw-text-orange-500">FoodieHub</span>. We hope you have a delicious experience with us!
      </p>
      <div className="tw-flex tw-justify-center tw-mt-10">
        <img src={logoblack} alt="FoodieHub Logo" className="tw-w-40 tw-h-40 tw-object-contain"/>
      </div>   
    </div>
  );
};

export default AboutUs;
