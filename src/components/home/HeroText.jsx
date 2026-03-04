import React from "react";

const HeroText = ({ smallVideoRef, setSmallReady }) => {
  return (
    <div
      className="
        text-white
        text-center
        uppercase
        font-[font2]
        tracking-wide
        text-[clamp(3rem,10vw,7.5rem)]
        leading-[clamp(3rem,9vw,9rem)]
       lg:pt-[clamp(0.5rem,2vw,3.5rem)]
       pt-[9rem]
        relative
      "
    >
      <div>The spark for</div>

      <div className="flex justify-center items-center gap-4">
        <span>all</span>

        <div className="max-h-[19vh] w-[17vw]  overflow-hidden rounded-full">
          <video
            className="h-full  w-full object-cover"
            ref={smallVideoRef}
            loop
            muted
            playsInline
            onCanPlayThrough={() => setSmallReady(true)}
            src="/src/assets/69496b2d.mp4"
          />
        </div>

        <span>things</span>
      </div>

      <div className="relative inline-block mt-4 ">
        <svg
          viewBox="0 0 432 80"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[110%]
            h-full
            pointer-events-none          "
        >
          <ellipse
            cx="216"
            cy="40"
            rx="214"
            ry="36"
            fill="none"
            stroke="#FACC15"
            strokeWidth="1.5"
            strokeDasharray="600 280"
            className="circle-animate  bg-green-500"
          />
        </svg>

        <span className="relative z-10">creative</span>
      </div>
    </div>
  );
};

export default HeroText;
