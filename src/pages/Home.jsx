"use client";
import React, { useEffect, useRef, useState } from "react";
import Landing from "../components/home/Landing";
import HeroText from "../components/home/HeroText";
import HeroPara from "../components/home/HeroPara";
import HeroButtons from "../components/home/HeroButtons";

const Home = () => {
  const bgVideoRef = useRef(null);
  const smallVideoRef = useRef(null);

  const [bgReady, setBgReady] = useState(false);
  const [smallReady, setSmallReady] = useState(false);

  useEffect(() => {
    if (bgReady && smallReady) {
      bgVideoRef.current.currentTime = 0;
      smallVideoRef.current.currentTime = 0;

      Promise.all([bgVideoRef.current.play(), smallVideoRef.current.play()]);
    }
  }, [bgReady, smallReady]);
  return (
    <div className="w-screen h-full ">
      <div className="fixed z-10 w-full ">
        <Landing bgVideoRef={bgVideoRef} bgReady={setBgReady} />
      </div>

      <div className="absolute top-0 z-20 w-full">
        <HeroText smallVideoRef={smallVideoRef} setSmallReady={setSmallReady} />
      </div>

      <div className="absolute  w-full z-20  top-100  ">
        <HeroButtons />
      </div>
    </div>
  );
};

export default Home;
