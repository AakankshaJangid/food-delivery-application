import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
  return (
    <div className="relative bg-green-200">
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <div className="flex justify-between pt-1">
              <h1 className="text-4xl text-orange-700 font-mono font-bold z-10">
                Food <span className="text-green-700">village</span>
              </h1>
              <div className="flex justify-center gap-6 py-2 items-center">
                <Link href={"/login"}>
                  <button className="text-2xl text-green-700 font-mono font-bold">
                    Login
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button className="text-2xl bg-orange-500 text-white font-mono font-bold px-4 py-1">
                    Signup
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 py-24">
              <div className="flex flex-col gap-1">
                <span class="type-ques text-xl font-mono font-medium text-orange-500"></span>
                <h1 className="text-lg text-black font-sans font-normal">
                  Order food from your favourite restaurants near you.
                </h1>
              </div>
              <div className="">
                <div className="bg-white shadow-xl  bg-opacity-80 flex justify-between">
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="bg-transparent outline-none text-black text-xl font-mono font-medium leading-[28px] pl-5"
                  />
                  <Link href={"/home"}>
                    <button className="bg-orange-500 text-white text-xl font-mono font-medium leading-[28px] py-2 px-4">
                      Find Food
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/fast-food.jpg"}
            alt="pizza"
            width={600}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
