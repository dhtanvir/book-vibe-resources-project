import React from "react";
import banner_img from "../../assets/banner_img.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto  ">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-baseline">
          <img src={banner_img}  />
          <div className="space-y-8">
            <h1 className="text-5xl font-bold">
              Books to freshen <br /> up your bookshelf
            </h1>

            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
