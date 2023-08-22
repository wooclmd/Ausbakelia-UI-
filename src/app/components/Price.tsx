"use client";

import React, { useEffect, useState } from "react";

type ProductOption = {
  title: string;
  additionalPrice: number;
};

type Props = {
  price: number;
  id: number;
  option1?: ProductOption[];
  option2?: ProductOption[];
};

const Price = ({ price, option1, option2, id }: Props) => {
  //Calculate price
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(0);
  useEffect(() => {
    let totalPrice = price;
    if (option1 && option1[selected1]) {
      totalPrice += option1[selected1].additionalPrice;
    }
    if (option2 && option2[selected2]) {
      totalPrice += option2[selected2].additionalPrice;
    }
    setTotal(totalPrice * quantity);
  }, [quantity, selected1, selected2, option1, option2, price]);

  return (
    <div className="flex flex-col gap-3 justify-around md:gap-5">
      <p className="font-bold md:text-xl">$ {total}</p>
      {/* Option container */}
      {option1 && (
        <div className="flex items-center gap-3">
          {option1.map((option, index) => (
            <button
              key={id}
              className="p-1 ring-1 ring-[var(--darker-green)] rounded-md min-w-[6rem]"
              style={{
                backgroundColor:
                  selected1 === index ? "var(--darker-green)" : "white",
                color: selected1 === index ? "white" : "var(--darker-green)",
              }}
              onClick={() => setSelected1(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}
      {option2 && (
        <div className="flex items-center gap-3">
          {option2.map((option, index) => (
            <button
              className="p-1 ring-1 ring-[var(--darker-green)] rounded-md min-w-[6rem]"
              key={id}
              style={{
                backgroundColor:
                  selected2 === index ? "var(--darker-green)" : "white",
                color: selected2 === index ? "white" : "var(--darker-green)",
              }}
              onClick={() => setSelected2(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}
      {/* Cart container */}
      <div className="flex gap-2 items-center">
        {/* Quantity */}
        <div className="p-1 flex justify-between items-center w-full ring-1 ring-[var(--darker-green)]">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>
              {">"}
            </button>
          </div>
        </div>
        <div>
          <button className="p-1 w-40 md:w-60 ring-1 ring-[var(--darker-green)] bg-[var(--darker-green)] text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
