import React from "react";
import assets from "../assets/assets";
import Title from "../components/Title";   

const Services = () => {

  const servicesData = [
    {
      title: "advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, enage...",
      icon: assets.ads_icon
    },
    {
      title: "advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, enage...",
      icon: assets.marketing_icon
    },
    {
      title: "advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, enage...",
      icon: assets.content_icon
    },
    {
      title: "advertising",
      description: "we turn bold ideas into powerful digital solutions that connect, enage...",
      icon: assets.social_icon
    }
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
    </div>
  );
};

export default Services;
