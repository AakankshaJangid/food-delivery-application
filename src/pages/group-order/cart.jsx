import Image from "next/image";
import { useState } from "react";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Pizza", price: 10, username: "you" },
    { id: 2, name: "Burger", price: 5, username: "aakanksha_01" },
    { id: 3, name: "Fries", price: 3, username: "anshi_01" },
  ]);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col items-center py-20 bg-gradient-to-br from-green-400 to-orange-400">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="flex gap-20">
        <div className="text-black">
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
          <div className="bg-white p-8 font-sans font-semibold text-xl ml-5 mt-5 w-full mr-64 hover:bg-orange-100">
            <h1 className="flex mb-4 mr-2">
              Added by :
              <Image src="/greentick.png" height={20} width={30} />
            </h1>
            <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-2 border-b border-gray-200"
            >
              <span className="text-lg font-medium">{item.name}</span>
              <span className="text-lg font-medium">
              &#8377;{item.price.toFixed(2)}
              </span>
              <span className="text-lg font-medium">
                Added by: {item.username}
              </span>
            </div>
          ))}
          </div>
          </div>
          <div className="p-5  bg-white ml-5 mt-5 w-full mr-64 mb-5 hover:bg-orange-100">
            <h1 className="font-sans font-semibold text-xl">Payment Method</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 text-black flex flex-col justify-between">
          <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-2 border-b border-gray-200"
            >
              <span className="text-lg font-medium">{item.name}</span>
              <span className="text-lg font-medium">
              &#8377;{item.price.toFixed(2)}
              </span>
              <span className="text-lg font-medium">
                Added by: {item.username}
              </span>
            </div>
          ))}
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">
            &#8377;{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
