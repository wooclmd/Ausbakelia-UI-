import React from "react";
import Link from "next/link";
import { MenuType } from "@/types/types";

export const metadata = {
  title: "Ausbakelia | Menu",
  description: "Menu page",
};

const getCat = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getCat();
  return (
    <div className="p-2 md:p-4 lg:p-8 h-[calc(100vh-6rem)] flex flex-col gap-2 md:flex-row md:h-[63vh]">
      {menu.map((category) => (
        <Link
          href={"/menu/" + category.slug}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-full"
          style={{
            backgroundImage: `url(${category.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(80%)",
          }}
        >
          <div className="">
            <h1 className="font-bold text-white text-2xl md:text-4xl md:text-start">
              {category.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
