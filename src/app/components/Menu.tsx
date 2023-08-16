"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  //create temporary user
  const [user, setUser] = useState(false);

  const links = [{ id: 2, title: "MENU", url: "/menu" }];

  return (
    <div>
      {openMenu ? (
        <div>
          <div
            className="cursor-pointer text-3xl font-bold"
            style={{ color: "var(--darker-green)" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            X
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6 absolute right-0 top-24 left-0 h-full z-10">
            {links.map((link) => (
              <div
                className="text-4xl font-bold"
                style={{
                  color: "var(--darker-green)",
                }}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <Link key={link.id} href={link.url}>
                  {link.title}
                </Link>
              </div>
            ))}
            <div
              className="text-4xl font-bold"
              style={{ color: "var(--darker-green)" }}
            >
              {user ? (
                <Link href={"/orders"} onClick={() => setOpenMenu(!openMenu)}>
                  ORDERS
                </Link>
              ) : (
                <Link href={"/login"} onClick={() => setOpenMenu(!openMenu)}>
                  LOGIN
                </Link>
              )}
            </div>
            <div className="text-4xl font-bold">
              <CartIcon />
            </div>
          </div>
        </div>
      ) : (
        <div className="cursor-pointer">
          <FaBars
            style={{ color: "var(--darker-green)", fontSize: "24px" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
