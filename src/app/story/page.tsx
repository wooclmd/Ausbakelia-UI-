import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <div className="p-2 h-[calc(100vh-1rem)] flex flex-col gap-2 md:flex-row md:p-4 lg:h-[calc(100vh-12rem)]">
      {/* Image container */}
      <div className="relative w-full md:w-1/2 h-[50%] md:h-auto md:flex-1">
        <Image
          src={"/story.jpg"}
          layout="fill"
          alt="Story"
          className="object-cover"
        />
      </div>

      {/* Text container */}
      <div
        className=" md:flex-1 md:p-6  lg:p-10"
        style={{ backgroundColor: "rgba(236, 240, 233, 0.5)" }}
      >
        <span
          className="font-bold text-xl mr-1 "
          style={{ color: "var(--darker-green)" }}
        >
          Ausbakelia
        </span>
        is a coffeehouse that's built around the concept of home, striving to
        achieve a balance between life and work.
        <br />
        <br /> <span className="font-bold">Aus</span> represents Australia,
        echoing 'Us', signifying the experiences we shared while traveling
        abroad. <br />
        <br />
        <span className="font-bold">Bake</span> symbolizes the father roasting
        coffee and the son indulging in baking. <br />
        <br />
        <span className="font-bold">Lia</span> is a graceful name that embodies
        relaxation and the delivery of positive news.
      </div>
    </div>
  );
};

export default Story;
