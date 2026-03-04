import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const PageContent = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const marqueeTrack = marqueeRef.current;
    const marqueeContent = marqueeTrack.querySelector(".marquee-content");

    const textWidth = marqueeContent.offsetWidth / 4;

    gsap.to(marqueeTrack, {
      x: -textWidth,
      duration: 10,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % textWidth),
      },
    });

    let lastScroll = 0;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        const rotation = currentScroll > lastScroll ? 3 : -3;
        gsap.to(containerRef.current, {
          rotation: rotation,
          duration: 0.5,
          ease: "power2.out",
        });

        lastScroll = currentScroll;
      },
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      height: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      height: "100%",
      duration: 0.6,
      ease: "power3.inOut",
    });
  };
  return (
    <div>
      <div className="bg-black text-white overflow-hidden">
        <div className="flex justify-center mb-10 lg:mb-0">
          <div
            className="
            uppercase
            font-[font2]
            tracking-tighter
            text-[clamp(3rem,10vw,7.5rem)]
            leading-[clamp(2.8rem,9vw,7rem)]
            text-center
          "
          >
            <div>To talk</div>
            <div>about</div>
            <div>your</div>
            <div>project</div>
          </div>
        </div>

        <div
          className="
          flex flex-col lg:flex-row
          items-center lg:items-start
          justify-start lg:justify-between
          gap-8
          px-4 sm:px-6 lg:px-20
          pb-12
        "
        >
          <h2 className="text-center lg:text-left">
            Onscreen or in an office.
            <br />
            <span>Here. There.</span>
            <br />
            <span>Anywhere.</span>
          </h2>

          <h2 className="text-center lg:text-right">
            525 Av. Viger O – Suite 400
            <br />
            Montréal, QC H2Z 1G6 →
          </h2>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden bg-white text-white relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex  whitespace-nowrap text-[clamp(3rem,12vw,7rem)] font-bold cursor-pointer relative z-10"
          >
            <div className="marquee-content flex text-black">
              <div className="px-4">HELLO@K72.CA</div>
              <div className="px-4">HELLO@K72.CA</div>
              <div className="px-4">HELLO@K72.CA</div>
              <div className="px-4">HELLO@K72.CA</div>
            </div>
          </div>

          <div
            ref={bgRef}
            className="absolute top-0 left-0 w-full h-full bg-[#D3FD50] z-0"
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-10 gap-4">
          <div className="uppercase font-[font1] tracking-tight">
            Follow us{" "}
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
