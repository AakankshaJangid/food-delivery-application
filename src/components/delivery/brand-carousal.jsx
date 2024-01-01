import React from "react";
import Image from "next/image";

const Brandcarousal = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold font-sans m-5 flex justify-center mt-20 text-orange-700">
        Top brands for you
      </h1>
      <div className="flex gap-2 justify-center">
        <Image src="/brand1.jpg" height={200} width={200} />
        <Image src="/brand2.jpg" height={200} width={200} />
        <Image src="/brand1.jpg" height={200} width={200} />
        <Image src="/brand2.jpg" height={200} width={200} />
        <Image src="/brand1.jpg" height={200} width={200} />
        <Image src="/brand2.jpg" height={200} width={200} />
      </div>
    </div>
  );
};
export default Brandcarousal;
