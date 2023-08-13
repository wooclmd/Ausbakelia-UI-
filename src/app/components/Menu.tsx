"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const links = [
    { id: 1, title: "Home Page", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Opening Hours", url: "/" },
    { id: 4, title: "Contact Us", url: "/" },
  ];

  return (
    <div onClick={handleMenu}>
      {openMenu ? (
        <div
          className="cursor-pointer text-2xl font-bold"
          style={{ color: "#B8C6AD" }}
        >
          X
        </div>
      ) : (
        <div className="cursor-pointer">
          <FaBars style={{ color: "#B8C6AD", fontSize: "20px" }} />
        </div>
      )}

      {openMenu &&
        links.map((link) => (
          <div className="bg-red-500">
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Menu;
