import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import PageContent from "../components/PageContent";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
  document.body.style.overflow = 'hidden';

    // =====================
    // LENIS SMOOTH SCROLL
    // =====================
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    const totalHeight =
      containerRef.current.scrollHeight / 3;

    // Start from middle
    lenis.scrollTo(totalHeight, { immediate: true });

    // =====================
    // INFINITE LOOP
    // =====================
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {

        const scroll = lenis.scroll;

        if (scroll >= totalHeight * 2) {
          lenis.scrollTo(scroll - totalHeight, {
            immediate: true
          });
        }

        if (scroll <= 0) {
          lenis.scrollTo(scroll + totalHeight, {
            immediate: true
          });
        }
      }
    });

    ScrollTrigger.refresh();

   return () => {
    document.body.style.overflow = '';  // cleanup
    lenis.destroy();
    ScrollTrigger.killAll();
  };

  }, []);

  return (
   <div ref={containerRef} className="bg-black [&::-webkit-scrollbar]:hidden">
      <div className="panel"><PageContent /></div>
      <div className="panel"><PageContent /></div>
      <div className="panel"><PageContent /></div>
    </div>
  );
};

export default Contact;