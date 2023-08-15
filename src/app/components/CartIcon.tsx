import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  return (
    <div className="">
      <Link href={"/cart"}>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaShoppingCart style={{ color: "var(--darker-green)" }} />
          <span style={{ color: "var(--darker-green)" }}>Cart (3)</span>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
