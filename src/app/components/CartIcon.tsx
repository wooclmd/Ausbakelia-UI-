"use client";

import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  setOpenMenu: (open: boolean) => void;
  openMenu: boolean;
};

const CartIcon = ({ setOpenMenu, openMenu }: Props) => {
  return (
    <div
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
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
