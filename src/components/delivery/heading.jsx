import React from "react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className=" py-4 px-44">
      <ul className="flex gap-8 justify-between text-5xl font-bold py-4 border border-green-600 rounded-full px-10">
        <li className="text-orange-700">
          <Link href="/food/delivery">Delievery</Link>
        </li>
        <li className="text-green-700">
          <Link href="/food/dineout">Dineout</Link>
        </li>
        <li className="text-orange-700">
          <Link href="/food/nightlife">Nightlife</Link>
        </li>
      </ul>
    </div>
  );
};
export default Heading;
