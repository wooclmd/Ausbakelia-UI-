import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  // Temporary data
  const user = false;

  return (
    <div
      className="p-3 border-b"
      style={{ borderBottomColor: "var(--bg-color1)" }}
    >
      <div
        className="h-12 flex items-center justify-between gap-2"
        style={{ color: "var(--darker-green)" }}
      >
        <div className="flex gap-3 items-end">
          <Link href={"/"} className="flex  text-3xl font-bold">
            Ausbakelia
          </Link>
          <Link href={"/story"} className="text-gray-500">
            OUR STORY
          </Link>
        </div>

        {/* Right links */}
        <div className="">
          <div className="md:hidden">
            <Menu />
          </div>
          <div className="hidden md:flex items-center gap-5 text-xl">
            <Link href={"/menu"}>MENU</Link>

            {!user ? (
              <Link href={"/login"}>LOGIN</Link>
            ) : (
              <Link href={"/orders"}>ORDERS</Link>
            )}
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
