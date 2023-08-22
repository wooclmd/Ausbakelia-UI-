import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/app/components/Price";

const SingleProductPage = () => {
  return (
    <div className="p-2 md:p-6 flex flex-col gap-2 h-screen md:h-[60vh] md:flex-row md:gap-4">
      {/* Image container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:flex-1 md:h-full">
          <Image
            src={singleProduct.img}
            alt="Product"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Text container */}
      <div className="text-gray-500 flex flex-col gap-2 md:flex-1 md:justify-center md:gap-4">
        <h1 className="font-bold text-lg text-[var(--darker-green)] md:text-2xl">
          {singleProduct.title}
        </h1>
        <p className="text-justify">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          option1={singleProduct.option1}
          option2={singleProduct.option2}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
