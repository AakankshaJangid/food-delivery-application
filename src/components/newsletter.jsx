import React from "react";
import Image from "next/image";
const Newsletter = () => {
  return (
    <div className="relative  pt-1 bg-orange-50 overflow-hidden">
      <div className="absolute w-96 h-full -left-48">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          layout="fill"
        />
      </div>
      <div className="absolute w-[600px] h-full -right-72">
        <Image
          src={"/basket.png"}
          alt="pizza"
          layout="fill"
        />
      </div>
      <div className="mx-auto container flex flex-col gap-10 py-20 px-60">
        <h1 className="text-4xl text-black font-sans font-bold text-center px-32">
          Subscribe to our newsletter to get <span className="text-orange-500">updates</span>!
        </h1>
        <div className="rounded-full p-2">
          <div className="bg-white shadow-xl  bg-opacity-80 rounded-full p-2 flex justify-between">
            <input
              type="text"
              placeholder="Enter your email here"
              className="bg-transparent outline-none text-black text-2xl font-sans font-medium leading-[28px] pl-5"
            />
            <button className="bg-orange-500 text-white text-2xl font-helvetica font-medium leading-[28px] rounded-full py-3 px-10">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
