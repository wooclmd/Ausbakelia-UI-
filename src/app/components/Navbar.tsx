"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // Temporary data
  const user = false;

  return (
    <div
      className="p-3 border-b bg-white"
      style={{ borderBottomColor: "var(--bg-color1)" }}
    >
      <div
        className="h-12 flex items-center justify-between gap-3"
        style={{ color: "var(--darker-green)" }}
      >
        <div className="flex gap-3 items-end">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="Logo" width={140} height={140} />
          </Link>
          <Link href={"/story"} className="text-gray-500 text-sm">
            OUR STORY
          </Link>
        </div>

        {/* Right links */}
        <div className="">
          <div className="md:hidden">
            <Menu />
          </div>
          <div className="hidden md:flex items-center gap-5 text-lg">
            <Link href={"/menu"}>MENU</Link>

            {!user ? (
              <Link href={"/login"}>LOGIN</Link>
            ) : (
              <Link href={"/orders"}>ORDERS</Link>
            )}
            <CartIcon setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
