import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Ausbakelia || Cart",
  description: "Cart page",
};

const page = () => {
  return (
    <div className="p-2 md:p-12 h-[calc(100vh-9rem)] md:h-[65vh] flex flex-col md:flex-row">
      {/* Items container */}
      <div className="flex flex-col gap-3 h-1/2 p-4 overflow-y-scroll md:h-full md:w-2/3">
        {/* Single item container */}
        <div className="flex items-center justify-between text-[var(--darker-green)]">
          <Image src={"/fw.jpg"} alt="Item" width={100} height={100} />
          <div>
            <h1 className="font-bold text-xl">Flat White</h1>
            <span>Hot</span>
            <span className="m-2">/</span>
            <span>Medium</span>
          </div>
          <h2 className="font-bold">$120</h2>
          <button className="text-xl">x</button>
        </div>

        <div className="flex items-center justify-between text-[var(--darker-green)]">
          <Image src={"/fw.jpg"} alt="Item" width={100} height={100} />
          <div>
            <h1 className="font-bold text-xl">Flat White</h1>
            <span>Hot</span>
            <span className="m-2">/</span>
            <span>Medium</span>
          </div>
          <h2 className="font-bold">$120</h2>
          <button className="text-xl">x</button>
        </div>

        <div className="flex items-center justify-between text-[var(--darker-green)]">
          <Image src={"/fw.jpg"} alt="Item" width={100} height={100} />
          <div>
            <h1 className="font-bold text-xl">Flat White</h1>
            <span>Hot</span>
            <span className="m-2">/</span>
            <span>Medium</span>
          </div>
          <h2 className="font-bold">$120</h2>
          <button className="text-xl">x</button>
        </div>
      </div>

      {/* Payment container */}
      <div
        className="p-4 h-1/2 text-gray-500 flex flex-col gap-4 justify-center md:h-full md:w-1/3"
        style={{ backgroundColor: "rgba(236, 240, 233, 0.3)" }}
      >
        <div className="flex justify-between">
          <span>Total (3 items)</span>
          <span>$81.70</span>
        </div>
        <hr />
        <button className="p-1 text-white bg-[var(--darker-green)] w-[40%] self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default page;
