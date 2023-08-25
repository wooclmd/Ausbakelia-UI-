/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Offer = () => {
  return (
    <div
      className="my-8 h[calc(100vh-4rem)] flex flex-col md:flex-row"
      style={{ backgroundColor: "#B8C6AD" }}
    >
      {/* Image container */}
      <div className="flex-1 p-2 flex items-center justify-center md:gap-4">
        <Image
          src={"/offer.jpg"}
          alt="Offer1"
          width={120}
          height={100}
          className="md:w-40"
        />
        <Image
          src={"/offer2.jpg"}
          alt="Offer2"
          width={120}
          height={100}
          className="md:w-40"
        />
        <Image
          src={"/offer3.jpg"}
          alt="Offer3"
          width={120}
          height={100}
          className="md:w-40"
        />
      </div>
      {/* Text container */}
      <div className="p-6 flex-1 text-white flex flex-col gap-5 items-center justify-center">
        <h1 className="text-2xl font-bold">Moon Festival Coffee Mix Box</h1>
        <p style={{ textAlign: "justify" }}>
          Ausbakelia's coffee undergoes a journey from bean selection, roasting,
          to grinding – all meticulously curated by our in-house baristas,
          giving it a unique coffee essence.
        </p>
        <Link
          href={"/menu"}
          className="px-4 py-2 bg-white font-bold"
          style={{ color: "#B8C6AD" }}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Offer;
