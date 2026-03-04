import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useRef } from "react";

const AgencyHeroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollSmoother);
  const imagesContainer = useRef(null);
  const imagesRef = useRef(null);

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

  useGSAP(function () {
    gsap.to(imagesContainer.current, {
      scrollTrigger: {
        trigger: imagesContainer.current,
        start: "top 28%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (item) => {
          let imageIndex;
          if (item.progress < 1) {
            imageIndex = Math.floor(item.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imagesRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="py-1 ">
        <div
          ref={imagesContainer}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw]  lg:left-[30vw] left-[30vw] lg:top-52"
        >
          <img
            ref={imagesRef}
            className="h-full object-cover w-full"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="relative font-[font2]">
        <div className="lg:mt-[55vh] mt-[30vh]">
          <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
            SEVEN7Y
            <br />
            TWO
          </h1>
        </div>
        <div className="lg:pl-[40%] lg:mt-20 mt-32 md:mt-4 p-3">
          <p className="lg:text-4xl text-xl leading-tight font-bold indent-69 ">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyHeroSection;
