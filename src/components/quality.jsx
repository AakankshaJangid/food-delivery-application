import React from "react";
import Image from "next/image";

const Quality = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-orange-100">
      <Image
        src="/pizzasemi.png"
        alt="Pizza tha yaha"
        width={500}
        height={500}
        className=""
      />

      <div className="w-1/2 flex flex-col  py-4 px-8">
        <p className="text-green-500 font-serif font-bold text-2xl pb-2">
          Quality
        </p>
        <p className="font-bold text-5xl py-2 text-orange-500">
          Exploring the rich flavors and diverse of India...
        </p>
        <p className="pt-2 text-justify text-black text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          deleniti, natus corporis saepe ipsam eius illo fugit adipisci
          doloribus delectus odit sit dolore unde sequi placeat aspernatur
          facere optio aliquid doloremque voluptatem cupiditate laudantium.
          Numquam cupiditate est totam alias ullam fuga temporibus cum laborum
          eos, doloremque fugiat iusto qui, harum illo officiis aliquid
          exercitationem. Doloribus, aliquid?
        </p>
        <div className=" py-4 px-2">
          <button className="bg-orange-500 text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-orange-600">
            Discover more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;
