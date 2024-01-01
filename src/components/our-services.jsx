import React from "react";
import Image from "next/image";
const OurServices = () => {
  return (
    <div className="relative  pt-1 bg-orange-50 overflow-hidden">
      <div className="mx-auto container py-10">
        <div className="flex flex-col gap-5 mb-5">
          <h1 className="text-4xl text-green-600 font-mono font-bold z-10 pl-2 text-center">Our services</h1>
          <p className="text-xl text-black font-sans font-normal text-center px-32">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            amet deleniti aperiam libero ut id rerum! A, debitis assumenda optio
            velit maxime quasi, ipsa nesciunt nobis, ea esse dolores labore?
          </p>
        </div>
        <div className="flex gap-10 p-10">
          <div className="flex flex-col items-center gap-6 bg-green-400 p-5 rounded-xl">
              <Image src={"/pickMeal.jpg"} alt="pizza" width={200} height={200}  className="rounded-full"/>
            <h1 className="text-2xl text-orange-500 font-mono font-bold">Pick Meals</h1>
            <p className="text-center text-lg text-black font-sans font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed provident quia unde neque quae, asperiores molestias magni iusto.</p>
          </div>
          <div className="flex flex-col items-center gap-6 bg-green-400 p-5 rounded-xl">
              <Image src={"/payment.jpg"} alt="pizza" width={200} height={200}  className="rounded-full"/>
            <h1 className="text-2xl text-orange-500 font-mono font-bold">Pick Meals</h1>
            <p className="text-center text-lg text-black font-sans font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed provident quia unde neque quae, asperiores molestias magni iusto.</p>
          </div>
          <div className="flex flex-col items-center gap-6 bg-green-400 p-5 rounded-xl">
              <Image src={"/delivery.jpg"} alt="pizza" width={200} height={200}  className="rounded-full"/>
            <h1 className="text-2xl text-orange-500 font-mono font-bold">Pick Meals</h1>
            <p className="text-center text-lg text-black font-sans font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed provident quia unde neque quae, asperiores molestias magni iusto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
