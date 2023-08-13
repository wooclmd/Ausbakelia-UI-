import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-3">
      <div className="h-12 flex items-center justify-between gap-2">
        <Link href={"/"} className="text-2xl font-bold ">
          Ausbakelia
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
