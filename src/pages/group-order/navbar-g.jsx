import Link from "next/link";
import React from "react";

const NavbarG = () => {
  return (
    <div className="py-4">
      <div className="flex px-4 py-4 bg-orange-300 shadow items-center justify-between border rounded-full mx-20 ">
        <h1 className="text-orange-700 font-bold  font-sans text-3xl cursor-pointer pl-8">
          Food<span className="text-green-600 pl-3">Village</span>
        </h1>
        <ul className="flex  text-white font-semibold">
          <li className="mx-4 px-4">
            <a href="/home" className="text-xl hover:text-green-800">
              Home
            </a>
          </li>
          <li className="mx-4 px-4">
            <a href="/about-us" className="text-xl hover:text-green-800">
              About Us
            </a>
          </li>
          <li className="mx-4 px-4">
            <a href="/food" className="text-xl hover:text-green-800">
              Food
            </a>
          </li>
          <li className="mx-4 px-4">
            <a href="/help" className="text-xl hover:text-green-800">
              Help
            </a>
          </li>
          <li className="mx-4 px-4">
            <a href="/group-order/cart" className="text-xl hover:text-green-800">
              My Cart
            </a>
          </li>
          <li className="mx-4 px-4">
            <a href="/group-order" className="text-xl hover:text-green-800">
              G-Order
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
        <Link href={"/login"}>
          <button className="bg-orange-500 text-white px-8 py-3  rounded-full">
            Log in
          </button>
        </Link>
        <Link href={'/sign-up'}>
        <button className="bg-white text-orange-500 px-8 py-3  rounded-full">
          Sign up
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarG;
