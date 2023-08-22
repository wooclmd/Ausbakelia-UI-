import React from "react";
import { coffee } from "@/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  return (
    <div className="p-2 flex flex-wrap">
      {coffee.map((item) => (
        <Link
          className="w-full h-[60vh] mt-4 sm:w-1/2 lg:w-1/3"
          key={item.id}
          href={`/product/${item.id}`}
        >
          {/* Image container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                fill
                alt="drinks"
                className="object-contain"
              />
            </div>
          )}

          {/* Text container */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1 text-gray-500">
              <h1 className="font-bold">{item.title}</h1>
              <h2>${item.price}</h2>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-white px-2 py-1 w-1/5 text-sm bg-[#849c71] hover:text-[#849c71] hover:bg-white">
                Select
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
