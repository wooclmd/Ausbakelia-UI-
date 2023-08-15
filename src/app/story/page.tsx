import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-2 h-[50vh] flex flex-col gap-2 md:flex-row lg:flex-row lg:p-8">
      {/* Image container */}
      <div className="w-full h-1/2">
        <Image src={"/story.jpg"} alt="Story" fill className="object-cover" />
      </div>

      {/* Text container */}
      <div
        className="h-1/2"
        style={{
          backgroundColor: "rgba(236, 240, 233, 0.5)",
        }}
      >
        <span
          className="font-bold text-xl"
          style={{ color: "var(--darker-green)" }}
        >
          Ausbakelia
        </span>{" "}
        is a coffeehouse that's built around the concept of home, striving to
        achieve a balance between life and work.
        <br />
        <br /> 'Aus' represents Australia, echoing 'Us', signifying the
        experiences we shared while traveling abroad. <br />
        <br />
        'Bake' symbolizes the father roasting coffee and the son indulging in
        baking. <br />
        <br />
        'Lia' is a graceful name that embodies relaxation and the delivery of
        positive news.
      </div>
    </div>
  );
};

export default About;
