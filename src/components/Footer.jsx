import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="main-div flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between p-3 gap-4">
        {/* LEFT SOCIAL BUTTONS */}
        <div className="left flex gap-2 md:gap-3 self-start">
          {["FB", "IG", "IN", "BE"].map((item, i) => (
            <div
              key={i}
              className="button border-2 border-white rounded-[40px] font-[font1]
        flex items-center justify-center cursor-pointer
        hover:text-[#c4ff3ae5] hover:border-[#c4ff3ae5]
        h-12 w-20 md:h-16 md:w-24 lg:h-20 lg:w-32
        text-xl md:text-3xl lg:text-7xl font-medium tracking-wider"
            >
              <a
                href="https://www.linkedin.com/company/k72"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* RIGHT CONTACT BUTTON */}
        <div className="right-Contact w-full lg:w-auto flex justify-center lg:justify-end">
          <div
            className="button border-2 border-white  rounded-[60px] ld:rounded-[40px] font-[font1] mt-30 lg:mt-0
      flex items-center gap-3  cursor-pointer
      hover:text-[#c4ff3ae5] hover:border-[#c4ff3ae5]
      h-18 md:h-18 lg:h-20
      px-20 md:px-20 lg:px-14
      text-6xl md:text-4xl lg:text-7xl
      font-medium tracking-wider"
          >
            <a href="/contact">Contact</a>
            <span className="text-xl md:text-3xl lg:text-6xl font-bold">♡</span>
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default Footer;
