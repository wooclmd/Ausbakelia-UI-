import React from "react";
import { menu } from "@/data";
import Link from "next/link";
export const metadata = {
  title: "Ausbakelia | Menu",
  description: "Menu page",
};

const MenuPage = () => {
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
