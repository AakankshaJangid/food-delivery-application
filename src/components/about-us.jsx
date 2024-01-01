import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div
      className=" p-10 box-border w-full min-h-screen overflow-hidden  bg-cover flex flex-row-reverse"
      style={{ backgroundImage: "url('Untitled design.jpg')", height: "400px" }}
    >
      <div className=" w-2/5 float-left  opacity-100 ">
        <h1 className="text-5xl tracking-wide font-bold mt-6 text-orange-400">
          About{" "}
        </h1>
        <h1 className="text-green-500 float-leftfont-serif font-bold text-7xl ">
          FoodVillage...
        </h1>
        <p className="text-xl font-sans text-white mt-6 leading-relaxed font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus
          obcaecati doloremque harum quos quia explicabo, non aspernatur
          inventore illum. Delectus repellendus perferendis non accusantium nam
          similique dolore nostrum, voluptatibus beatae facere eius voluptas
          praesentium placeat exercitationem sunt vero. Obcaecati consequatur
          sequi tenetur aperiam iure, incidunt non vel, inventore vero voluptas,
          architecto ab quas.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
