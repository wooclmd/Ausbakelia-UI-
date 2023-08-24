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
    <div className="mt-1">
      {openMenu ? (
        <div className="mt-1">
          <div className="p-10 bg-white fixed right-0 top-0 left-0 h-[100%] z-10">
            <div
              className="cursor-pointer text-3xl font-bold text-right"
              style={{ color: "var(--darker-green)" }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              x
            </div>
            <div className="flex flex-col justify-center items-center gap-6 mt-12">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="text-4xl font-bold"
                  style={{
                    color: "var(--darker-green)",
                  }}
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <Link href={link.url}>{link.title}</Link>
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
                <CartIcon setOpenMenu={setOpenMenu} openMenu={openMenu} />
              </div>
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
