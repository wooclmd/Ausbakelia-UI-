import React from "react";

const Notification = () => {
  return (
    <div
      className="h-12 flex justify-center items-center text-center text-white px-4 text-sm md:text-base fixed w-full top-0 z-20"
      style={{ backgroundColor: "var(--bg-color1)" }}
    >
      Earn 1 point per $1 spent. Redeem points for discounts upon reaching a
      threshold.
    </div>
  );
};

export default Notification;
