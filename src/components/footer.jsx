import React from "react";
import Image from "next/image";
const Footer = () => {
  const data = [
    {
      heading: "Support",
      items: ["FAQs", "Shipping & Returns", "Our Partners", "Help"],
    },
    {
      heading: "Info",
      items: ["Dates", "Parties", "Birthdays", "Menu"],
    },
    {
      heading: "Contact",
      items: [
        "Chinar Dream CT, H-104, Bhopal, M.P.",
        "foodvillage@gmail.com",
        "+880 171123 456 789",
      ],
    },
  ];
  return (
    <div className="relative bg-green-500  pt-1">
      <div className="flex justify-between px-40 pt-20 pb-10  bg-white w-full mx-auto container rounded-br-full rounded-tl-full">
        <div className=" relative">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-orange-700 font-mono font-bold z-10">
              Food <span className="text-green-700">village</span>
            </h1>
            <div className="flex flex-col gap-5 text-xl text-black font-mono font-bold z-10">
              <h1 className="pl-1">Follow Us</h1>
              <div className="flex gap-4 z-10 ">
                  <Image
                    src={"/facebook-box-fill.svg"}
                    alt="incentiv"
                    width={50}
                    height={50}
                    // layout="fill"
                  />
                  <Image
                    src={"/youtube-fill.svg"}
                    alt="incentiv"
                    width={50}
                    height={50}
                    // layout="fill"
                  />
                   <Image
                    src={"/google.svg"}
                    alt="incentiv"
                    width={50}
                    height={50}
                    // layout="fill"
                  />
                  <Image
                    src={"/twitter-fill.svg"}
                    alt="incentiv"
                    width={50}
                    height={50}
                    // layout="fill"
                  />
                  
              </div>
            </div>
          </div>
          {/* <div className="absolute w-96 h-96 z-0 top-0 bottom-0">
            <Image src={"/vegetables.jpg"} alt="incentiv" width={200} height={200} />
          </div> */}
        </div>
        <div className="flex justify-between w-1/2 gap-8">
          {data.map((data) => (
            <div className="flex flex-col gap-5 p-2">
              <h1 className="text-2xl text-black font-mono font-bold z-10 pl-2">
                {data.heading}
              </h1>
              <ul className="flex flex-col gap-3 p-2">
                {data.items.map((item) => (
                  <li className="text-base text-black font-sans font-normal">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-xs text-white font-sans font-normal text-center py-2">2023 All rights reserved by FoodVillage</h1>
    </div>
  );
};

export default Footer;
