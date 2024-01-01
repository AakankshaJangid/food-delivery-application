import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Places = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchFoodItems() {
      try {
        const response = await axios.get("/api/foodItems");
        setdata(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFoodItems();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col justify-center px-44 py-40">
      {/* start */}
      <h1 className="text-5xl font-semibold font-sans flex justify-center mb-14 text-orange-700">
        Famous Places to Dig In!
      </h1>
      {/* foods card cmp */}
      <div className="grid grid-cols-3 gap-4 ">
        {/* card cmp1 */}
        {data?.restaurants?.map((item) => (
          <div className="overflow-hidden shadow-lg bg-white rounded-t-xl">
            <Link href="/food/food-items">
              <Image
                src={item.image}
                width={300}
                height={400}
                className="rounded-t-xl w-full"
              />
            </Link>
            <div className="flex justify-around mt-3">
              <span className="bg-orange-400 pl-4 pr-4 mr-16">50% off</span>
              <span className="bg-green-600 rounded-lg pl-4 pr-4">
                {" "}
                {item.rating} *
              </span>
            </div>

            <div className="flex flex-col p-4">
              <h1 className="text-2xl font-sans text-orange-600">
                {item.name}
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                at eligendi excepturi labore quod eveniet autem nihil architecto
                velit cum nobis ea a itaque enim quo quia molestias accusantium
                voluptates!
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* end 4 */}
    </div>
  );
};

export default Places;
