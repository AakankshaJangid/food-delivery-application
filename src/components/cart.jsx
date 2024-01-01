import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get("/api/cart");
        setCartItems(response.data.cartItems);

        // Calculate total amount
        const amount = response.data.cartItems.reduce(
          (total, item) => total + parseFloat(item.price),
          0
        );
        setTotalAmount(amount);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCartItems();
  }, []);

  console.log(cartItems, totalAmount)

  return (
    <div className="bg-green-300 flex justify-center gap-48 text-black">
      <div className="">
        <div className="bg-white p-8 font-sans font-semibold text-xl ml-5 mt-5 w-full mr-64 hover:bg-orange-100">
          <h1 className="flex mb-4 mr-2">
            Logged In
            <Image src="/greentick.png" height={20} width={30} />
          </h1>
          <p>Gitisha Jain | 9109211167</p>
        </div>
        <div className="p-5 bg-white ml-5 mt-5 w-full mr-64  hover:bg-orange-100">
          <h1 className="font-sans font-semibold text-xl">
            Select a delievery address
          </h1>
          <p>Add new address</p>
          <p>Indore,Madhya Pradesh,India</p>
        </div>
        <div className="p-5  bg-white ml-5 mt-5 w-full mr-64 mb-5 hover:bg-orange-100">
          <h1 className="font-sans font-semibold text-xl">Payment Method</h1>
        </div>
      </div>{" "}
      <div className="bg-white mt-5 ml-5 mr-32 mb-8 p-5 hover:bg-orange-200">
        <h1 className="font-sans m-5 font-bold text-xl">Food Items</h1>
        {cartItems.map((item) => (
          <h1 className="flex gap-3 m-5 ml-10 font-sans font-medium">
            {item.name}
            <Image src={item.img} height={60} width={100}></Image>
            <p className="ml-28">&#8377; {item.price}</p>
          </h1>
        ))}
        <h1 className="font-sans font-semibold text-xl ml-60">
          Total &#8377; {totalAmount}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
