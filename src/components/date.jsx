import React from "react";
import Image from "next/image";

const Date = () => {
  return (
    <div className="flex flex-row justify-center space-x-24 py-20 bg-white text-orange-500">
      <div className=" flex flex-col items-center">
        <Image
          src="/clock.png"
          alt="Pizza tha yaha"
          width={50}
          height={50}
          className=""
        />
        <p className="font-bold text-center text-xl">
          Mon - Sat(10 AM-8 PM)
        </p>
        <p className="text-center">Available Hours</p>
      </div>
      <div className=" flex flex-col items-center">
        <Image
          src="/loca.png"
          alt="Pizza tha yaha"
          width={40}
          height={40}
          className="rounded-full "
        />
        <p className="font-bold text-center text-xl">
          Indore,Ujjain,Dewas
        </p>
        <p className="text-center">Our Location</p>
      </div>
      <div className=" flex flex-col items-center">
        <Image
          src="/call.png"
          alt="Pizza tha yaha"
          width={65}
          height={65}
          className="rounded-full"
        />
        <p className="font-bold text-center text-xl">0731-242458</p>
        <p className="text-center">Call Us</p>
      </div>
    </div>
  );
};

export default Date;
