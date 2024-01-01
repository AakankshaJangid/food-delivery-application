import HelpSidebar from "../../components/help/sidebar";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Legal = () => {
  const FaqsData = {
    1: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
    2: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
    3: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
    4: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
    5: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
    6: {
      question: "What information comes under description?",
      answer:
        "Any exercise restrictions or other information to convey to employees.",
    },
  };
  const [drop, setDrop] = useState(false);
  const [currId, setCurrId] = useState(0);
  const handleDropDown = (id) => {
    setDrop(true);
    setCurrId((currentValue) => (currentValue !== id ? id : -1));
  };
  return (
    <div className="bg-green-300">
      <Navbar />
      <div className="mx-auto container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 py-10">
            <h1 className="text-4xl text-orange-600 font-mono font-bold">
              Help and Support!
            </h1>
            <p className="text-lg text-black font-sans font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-white">
            <div className="flex ">
              <div className="w-1/3">
                <HelpSidebar />
              </div>
              <div className="p-10 w-3/5 flex flex-col gap-10">
                <h1 className="text-4xl text-green-700 font-mono font-bold">
                  Legal
                </h1>
                <div className="flex flex-col gap-5">
                {Object.values(FaqsData).map((data, index) => (
                  <>
                    {drop && currId === index ? (
                      <div onClick={() => handleDropDown(index)} className="w-full flex flex-col gap-2">
                        <div className="flex">
                          <h1 className="text-xl text-gray-600 font-sans font-medium cursor-pointer">
                            {data.question}
                          </h1>
                        </div>
                        <h2 className="text-base text-gray-500 font-sans font-normal">
                          {data.answer}
                        </h2>
                        <div className="w-full h-[2px] bg-gray-300"></div>
                      </div>
                    ) : (
                      <div onClick={() => handleDropDown(index)}>
                        <div className="flex flex-col gap-2">
                          <h1
                            key={index}
                            className="text-xl text-gray-600 font-sans font-medium cursor-pointer"
                          >
                            {data.question}
                          </h1>
                          <div className="w-full h-[2px] bg-gray-300"></div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;
