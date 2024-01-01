import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const GroupOrdering = () => {
  const [groupOrder, setGroupOrder] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit group order data to server
    console.log(groupOrder);
  };

  return (
    <div className="bg-gradient-to-br from-orange-400 to-green-400 min-h-screen">
      <Head>
        <title>Group Ordering | My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="groupName"
            >
              Group Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="groupName"
              type="text"
              name="groupName"
              placeholder="Enter group name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="groupSize"
            >
              Group Size
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="groupSize"
              type="number"
              name="groupSize"
              placeholder="Enter group size"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href={'/group-order/food-items'}>
            <button
              className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:py-2 hover:text-green-700 hover:px-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Group Order
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupOrdering;
