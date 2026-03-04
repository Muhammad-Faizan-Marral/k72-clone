import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useState } from "react";

const AgencyMarque = () => {
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);

  const micheleRef = useRef(null);
  const directorRef = useRef(null);

  const joelRef = useRef(null);
  const martinRef = useRef(null);

  const teamImageRef = useRef(null);


  const [currentIndex, setCurrentIndex] = useState(null);
  const [nextIndex] = useState(null);

  const currentImageRef = useRef(null);
  const nextImageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const showImage = (index) => {
    gsap.killTweensOf(currentImageRef.current);

    setCurrentIndex(index);

    gsap.set(currentImageRef.current, {
      xPercent: -20,
      opacity: 0,
    });

    gsap.to(currentImageRef.current, {
      xPercent: 0,
      opacity: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const hideImage = () => {
    gsap.killTweensOf(currentImageRef.current);
    gsap.to(currentImageRef.current, {
      opacity: 0,
      duration: 0,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: firstPageRef.current,
      start: "top top",
      end: "bottom top",
   

      onEnter: () => {
        gsap.to(firstPageRef.current, {
          backgroundColor: "#000",
          duration: 0.6,
          ease: "power2.out",
        });
      },

      onLeaveBack: () => {
        gsap.to(firstPageRef.current, {
          backgroundColor: "#fff",
          duration: 0.6,
        });
      },
    });

    gsap.to(micheleRef.current, {
      xPercent: -180,
      repeat: -1,
      duration: 15,
      ease: "none",
    });

    gsap.to(directorRef.current, {
      xPercent: 300,
      repeat: -1,
      duration: 9,
      ease: "none",
    });

    gsap.to(joelRef.current, {
      xPercent: -180,
      repeat: -1,
      duration: 15,
      ease: "none",
    });

    gsap.to(martinRef.current, {
      xPercent: 300,
      repeat: -1,
      duration: 9,
      ease: "none",
    });

    /* ================= FIRST PAGE TEXT VISIBILITY ================= */
    ScrollTrigger.create({
      trigger: firstPageRef.current,
      // markers:true,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to([micheleRef.current, directorRef.current], { opacity: 1 }),
      onEnterBack: () =>
        gsap.to([micheleRef.current, directorRef.current], { opacity: 1 }),
      onLeave: () =>
        gsap.to([micheleRef.current, directorRef.current], { opacity: 0 }),
    });

    /* ================= SECOND PAGE TEXT VISIBILITY ================= */
    ScrollTrigger.create({
      trigger: secondPageRef.current,
      start: "top 70%",
      end: "bottom center",
      onEnter: () =>
        gsap.to([joelRef.current, martinRef.current], { opacity: 1 }),
      onEnterBack: () =>
        gsap.to([joelRef.current, martinRef.current], { opacity: 1 }),
      onLeave: () =>
        gsap.to([joelRef.current, martinRef.current], { opacity: 0 }),
    });

    /* ================= THIRD PAGE (HIDE SECOND PAGE TEXT) ================= */
    ScrollTrigger.create({
      trigger: thirdPageRef.current,
      // markers: true,
      start: "bottom 80%",
      end: "bottom bottom",
      onEnter: () =>
        gsap.to([joelRef.current, martinRef.current], { opacity: 0 }),
      onEnterBack: () =>
        gsap.to([joelRef.current, martinRef.current], { opacity: 1 }),
    });

    /* ================= PAGE 1 PIN ================= */
    ScrollTrigger.create({
      trigger: firstPageRef.current,
      start: "top top",
      endTrigger: thirdPageRef.current, // ✅ Page 3 ko end trigger banao
      end: "top top", // ✅ Jab page 3 top par aaye tab unpin
      pin: true,
      pinSpacing: false,
    });

    /* ================= PAGE 2 PIN ================= */
    ScrollTrigger.create({
      trigger: secondPageRef.current,
      start: "top top",
      endTrigger: thirdPageRef.current,
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: thirdPageRef.current,
      start: "top+=300 top+=400",
      end: "bottom-=280 bottom-=220",
      pin: teamImageRef.current,
      pinSpacing: false,
    });
  }, []);

  const team = [
    { role: "Business Lead", name: "Carl Godbout" },
    { role: "Copywriter", name: "Camille Brière" },
    { role: "Account Manager", name: "Stéphanie Brunelle" },
    { role: "EVP & Managing Director", name: "Pierre-Luc Paiement" },
    { role: "Art Director", name: "Mélanie Laviolette" },
    { role: "Director of Strategy", name: "Michèle Riendeau" },
    { role: "Account Director", name: "Meggie Lavoie" },
    { role: "Art Director", name: "Alex Sauvageau" },
    { role: "Account Manager", name: "Philippe Perreault" },
    { role: "Strategist", name: "Béatrice Roussin" },
    { role: "Account Manager", name: "Lou Gravel-Jean" },
    { role: "Planificateur stratégique principal", name: "Olivier Roeyaerts" },
    { role: "Account Manager", name: "Véronique Demers" },
    {
      role: "Operations and Business Development",
      name: "Maëlle Jacot-Descombes",
    },
    { role: "Art Director", name: "Julien Poisson" },
    { role: "Senior Director", name: "Isabelle Beauchemin" },
    { role: "Associate Creative Director", name: "Joël Letarte" },
    { role: "Creative Director", name: "Chantal Gobeil" },
    { role: "Associate Creative Director", name: "Sébastien Roy" },
  ];
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  return (
    <div className=" mt-10 bg-black">
      {/* FIRST-PAGE */}
      <div
        ref={firstPageRef}
        className="first_marque relative h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          ref={micheleRef}
          className="first absolute  -right-[20rem]  md:-right-[62rem] w-full font-[font1] z-10 top-60 md:top-32 lg:top-24"
        >
          <h1 className="whitespace-nowrap text-[10vw] md:text-[9vw] font-[font1] px-10 text-[#D3FD50] pr-[12rem]">
            MICHÈLE
          </h1>
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div
            className="
        w-[80%] sm:w-[60%] md:w-[40%] lg:w-[28rem]
        max-h-[80vh] sm:max-h-[90vh] md:max-h-[100vh]
        overflow-hidden
        rounded-2xl
      "
          >
            <img
              src="https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891"
              alt="center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          ref={directorRef}
          className="last absolute z-30 bottom-52  -left-[30rem] md:-left-[55rem] md:bottom-32 lg:bottom-24 font-[font-1] flex items-end gap-14"
        >
          <h1 className="text-[10vw] md:text-[9vw] text-[#D3FD50]">RIENDEAU</h1>
          <h2 className="text-[4vw] md:text-[4vw] text-[#ffffff]">
            Director of Strategy
          </h2>
        </div>
      </div>
      {/* SECOND-PAGE */}
      <div
        ref={secondPageRef}
        className="first_marque relative h-screen w-full overflow-hidden"
      >
        <div
          ref={joelRef}
          className="first absolute -right-[20rem]  md:-right-[60rem] w-full font-[font1] z-10 top-60 md:top-40 lg:top-24  "
        >
          <h1 className="whitespace-nowrap text-[10vw] md:text-[9vw] font-[font1] px-10 text-[#D3FD50] pr-[12rem]">
            JOEL
          </h1>
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[28rem] max-h-[80vh] sm:max-h-[90vh] md:max-h-[100vh] overflow-hidden rounded-2xl">
            <img
              src="https://k72.ca/images/teamMembers/joel_640X960_3.jpg?w=640&h=960&s=7fcd2cb26f9ffb7cb96fda9c5e707496"
              alt="center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          ref={martinRef}
          className="last absolute z-30 bottom-52  -left-[30rem] md:-left-[55rem] md:bottom-32 lg:bottom-24 font-[font-1] flex items-end gap-14"
        >
          <h1 className="text-[10vw] md:text-[9vw] text-[#D3FD50]">MARTIN</h1>
          <h2 className="text-[4vw] md:text-[4vw] text-[#ffffff]">
            Creative Director
          </h2>
        </div>
      </div>

      {/* THIRD-PAGE */}
      <div
        ref={thirdPageRef}
        className="h-full w-full relative text-white bg-black z-50 md:top-0  pt-32 md:pt-0  "
      >
        {/* Card-Image */}
        <div className="flex justify-center w-[20rem] relative z-40 top-10 lg:left-70 md:left-50 left-10 ">
          <div
            ref={teamImageRef}
            className="h-40 w-32 md:h-120 md:w-88 rounded-2xl overflow-hidden relative"
          >
            {/* CURRENT IMAGE */}
            <div
              ref={currentImageRef}
              className="absolute inset-0 z-10 opacity-0"
            >
              <img
                src={currentIndex !== null ? imageArray[currentIndex] : ""}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* NEXT IMAGE */}
            {nextIndex !== null && (
              <div ref={nextImageRef} className="absolute inset-0 z-20">
                <img
                  src={imageArray[nextIndex]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <div onMouseLeave={hideImage}>
          {/* List-Of-Team */}
          {team.map(({ role, name }, i) => (
            <div
              key={i}
              onMouseEnter={() => showImage(i)}
              className="border-t-2 border-white  overflow-hidden flex justify-between px-6 h-20 cursor-pointer relative -top-60 group"
            >
              <div className="group-hover:bg-[#cffd44] z-0 absolute w-full left-0 h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <h1 className="flex items-center text-[10px] md:text-[15px] md:translate-y-3 z-20  md:font-medium group-hover:text-black transition-transform duration-500 ease-in-out">
                {role}
              </h1>
              <h2 className="text-[15px] md:text-4xl font-medium flex items-center z-20 group-hover:text-black transition-transform duration-500 ease-in-out">
                {name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyMarque;
