import React from "react";
import { coffee } from "@/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  return (
    <div className="p-2 flex flex-wrap">
      {coffee.map((item) => (
        <Link
          className="w-full h-[60vh] sm:w-1/2 lg:w-1/3"
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
          <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
