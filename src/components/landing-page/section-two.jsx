import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="relative bg-orange-100">
      <div className="mx-auto container">
        <div className="flex flex-row-reverse justify-between">
          <div className="p-40">
            <h1 className="text-4xl text-orange-700 font-mono font-bold z-10 text-center">
              Restaurants in your pocket!
            </h1>
            <p className="text-center text-lg text-black font-sans font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed provident quia unde neque quae, asperiores molestias magni iusto.</p>          </div>
          <Image
            src={"/order-now.jpg"}
            alt="pizza"
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
