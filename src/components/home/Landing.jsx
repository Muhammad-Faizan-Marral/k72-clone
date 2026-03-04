import React from "react";

const Landing = ({bgVideoRef,bgReady}) => {
  return (
    <div className="h-screen w-full ">
      <video
        className="h-full w-full object-cover"
        ref={bgVideoRef}
        playsInline
        onCanPlayThrough={()=>bgReady(true)}
        loop
        muted
        src="/src/assets/69496b2d.mp4"
      ></video>
    </div>
  );
};

export default Landing;
