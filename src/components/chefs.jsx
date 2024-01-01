import React from "react";
import Image from "next/image";

const Chefs = () => {
  return (
    <div className="flex flex-col items-center py-40 bg-green-50 text-black">
      <div className="text-green-500 font-serif font-bold text-2xl pb-2">Chefs</div>
      <div className="font-bold text-5xl py-2 text-orange-500">
        {" "}
        Our Special Chefs
      </div>
      <div className="text-center text-black text-xl px-44">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          nesciunt facere fuga incidunt deleniti sed saepe provident similique
          rerum omnis?
        </p>
      </div>

      <div className="flex flex-row justify-around my-20 border-b-8 border-orange-400">
        <div class="  flex flex-col items-center shadow-lg bg-orange-100">
          <Image
            src="/chef1.jpg"
            alt="Pizza tha yaha"
            width={300}
            height={500}
            className="hover:border-green-300 hover:border-6 rounded-r-lg "
          />

          {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-emerald-700">
              John David
            </div>
          </div>
          <div class="px-10 pt-1 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              15+ years Experience
            </span>
          </div>
        </div>

        <div class=" flex flex-col items-center shadow-lg ">
          <Image
            src="/chef3.jpg"
            alt="Pizza tha yaha"
            width={300}
            height={500}
            className="hover:border-green-300 hover:border-6  rounded-t-lg"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-emerald-700">
              Chef Rose Emma
            </div>
          </div>
          <div class="px-10 pt-1 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              15+ years Experience
            </span>
          </div>
        </div>

        <div class="flex flex-col items-center shadow-lg bg-orange-100">
          <Image
            src="/chef2.jpg"
            alt="Pizza tha yaha"
            width={300}
            height={500}
            className="hover:border-green-300 hover:border-6 rounded-t-lg"
          />

          {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-emerald-700">
              Chef Ranveer Brar
            </div>
          </div>
          <div class="px-10 pt-1 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              15+ years Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
