import React, { useState, useEffect } from "react";
import Image from "next/image";

const featuredProducts = [
  "/aalo.jpg",
  "/panipuri.jpg",
  "/rasgulla.jpg",
  "/samosa.jpg",
];
let count = 0;

const Carousal = () => {
  //     useEffect(()=>{
  //      startsSlider();
  //     },[]);

  //    const startsSlider=()=>{
  //     setInterval(handleOnNextClick(),3000);
  //    };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };
  return (
    <div className="w-full select-none relative">
      {/* food slider */}
      <div className="aspect-w-16 aspect-h-9 flex justify-center ">
        <Image
          src={featuredProducts[currentIndex]}
          height={400}
          width={700}
          className="rounded-lg"
        />
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center ">
        <button
          onClick={handleOnPrevClick}
          className="bg-orange-400 text-white rounded-full p-5 ml-52"
        >
          {/* <Image src="/arrowprev.png" height={40} width={40} /> */}
          
        </button>
        <button
          onClick={handleOnNextClick}
          className="bg-orange-400 text-white rounded-full p-5 mr-52"
        >
          {/* <Image src="/arrownext.png" height={40} width={40} /> */}
          
        </button>
      </div>

      {/* brands slider */}
    </div>
  );
};

export default Carousal;
