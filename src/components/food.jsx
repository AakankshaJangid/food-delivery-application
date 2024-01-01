import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
const Food = () => {
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

  const handleAddToCart = async (itemName, itemPrice, itemImage) => {
    // Send the POST request to add the item to the cart
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ name: itemName, price: itemPrice, img: itemImage }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData);
  };
  

  console.log(data);
  return (
    <div className="bg-orange-200 py-5 text-black flex flex-col justify-center px-32">
      <div className="flex flex-col items-center text-center py-14">
        <h1 className="text-green-500 font-serif font-bold text-2xl pb-2">
          Foods
        </h1>
        <h1 className="font-bold text-5xl py-2 text-orange-500">
          Explore our best foods
        </h1>
        <p className="text-center text-black text-xl px-44">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          illum ratione rem cum, corporis deserunt, error labore ipsam, neque
          exercitationem ex odio fugit nam consequatur odit ea ullam asperiores
          quis!
        </p>
      </div>
      {/* foods card cmp */}
      <div className="grid grid-cols-3 gap-14">
        {/* card cmp1 */}
        {data?.foodItems?.map((item) => (
          <div className="shadow-lg flex flex-col justify-between bg-white rounded-xl">
            <Image
              src={item.img}
              width={300}
              height={400}
              className="rounded-t-xl w-full"
            />
            <div className="flex flex-col items-center justify-center gap-2 py-2">
              <div className="flex gap-10 py-1">
                <h1 className="text-3xl font-semibold font-sans text-orange-500">
                  {item.name}
                </h1>
                <span className="text-4xl font-semibold text-green-600">
                  &#8377;{item.price}
                </span>
              </div>
              <p className="text-center text-black text-lg px-5">{item.desc}</p>
              <span className="bg-orange-400 rounded-full px-3 py-2 text-white">
                {" "}
                {item.rating} *
              </span>
              <button className="bg-green-500 px-16 py-2 border text-white border-green-600 rounded-lg hover:bg-green-600"
                onClick={() => handleAddToCart(item.name, item.price, item.img)}
              >
                <div className="flex items-center">
                  Add to Cart{" "}
                  <Image
                    src="/shoppingcart.png"
                    height={20}
                    width={20}
                    className="ml-2"
                  />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* end  2*/}
    </div>
  );
};
export default Food;
