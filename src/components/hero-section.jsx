import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between bg-green-500">
      <div className="flex flex-col gap-4 w-1/2 px-32 py-14">
        <div className="text-5xl font-sans font-bold">
          <p>We are ready to </p>
          <p>deliver your favourite</p>
          <p> food items!</p>
        </div>
        <div className="flex flex-col text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quam laborum sunt fuga assumenda dignissimos quod
            impedit quae Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div className="mt-10 inline">
            <button className="bg-orange-400 px-16 py-4 border text-black rounded-full my-5 width-100 hover:bg-orange-500">
              <div className="flex text-white font-bold text-2xl">
                Quick Order
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2 relative">
        <Image src="/thali.png" height={400} width={500} className=""/>
      </div>
    </div>
  );
};

export default Hero;
