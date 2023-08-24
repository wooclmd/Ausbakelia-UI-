import React from "react";

const Hours = () => {
  return (
    <div>
      {/* Hours container */}
      <div className="p-4 md:p-8 text-sm text-gray-500 flex flex-col md:flex-row items-center gap-3 justify-center">
        <div className="flex flex-col gap-3">
          <span>THUR-SUN 09:00-14:30</span>
          <span>PH: 0289110358</span>
          <span>ausbakelia@gmail.com</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8601955129575!2d121.54063887322079!3d24.970870777857368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680129d28a52e5%3A0x4423954418afa8aa!2sAusbakelia!5e0!3m2!1sen!2snz!4v1692853360915!5m2!1sen!2snz"
          width="300"
          height="225"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Hours;
