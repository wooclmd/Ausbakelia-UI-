"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Embrace the warmth of our expertly roasted brews",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title:
      "Authentic flavors from the lands of New Zealand and Australia come alive on your palate",
    image: "/slider2.jpg",
  },
  {
    id: 3,
    title:
      "Every dish is a masterpiece, meticulously crafted solely for your ultimate enjoyment.",
    image: "/slider3.jpg",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Handle changing slides
  useEffect(() => {
    //set interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-2 lg:flex-row mt-32">
      {/* Text part */}
      <div
        className="h-1/2 flex flex-col gap-5 items-center justify-center font-bold text-center  md:text-xl lg:text-2xl lg:flex-1 lg:h-full lg:p-4"
        style={{
          color: "var(--darker-green)",
          backgroundColor: "rgba(236, 240, 233, 0.3)",
        }}
      >
        <h1>{data[currentSlide].title}</h1>
        <Link
          href={"/menu"}
          className="text-white px-4 py-2 text-sm lg:text-base"
          style={{ backgroundColor: "var(--darker-green)" }}
        >
          Order Now
        </Link>
      </div>

      {/* Images part */}
      <div className="w-full h-1/2 relative lg:flex-1 lg:h-full">
        <Image
          src={data[currentSlide].image}
          alt="Slider1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
