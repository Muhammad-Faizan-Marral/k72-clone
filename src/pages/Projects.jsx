import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import ProjectCard from "../components/projects/ProjectCard";
import { useRef } from "react";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const hoverBarRef = useRef(null);

  const projects = [
    {
      h1: "geanquato",
      h2: "Everyone Pharmacy",
      h1year: "2025",
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      h1_2: "widescape",
      h2_2: "WideScape",
      year_2: "2022",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      h1: "lumina tech",
      h2: "Oka Creative Agency",
      h1year: "2024",
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      h1_2: "visionary",
      h2_2: "Opto Vision",
      year_2: "2023",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      h1: "nexus flow",
      h2: "La Majeure Son",
      h1year: "2021",
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      h1_2: "shelton corp",
      h2_2: "Shelton Estate",
      year_2: "2020",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];
  const showHoverBar = () => {


    gsap.fromTo(
      hoverBarRef.current,
      { y: "-100%" },
      { y: "0%", duration: 0.5, ease: "power3.out", opacity: 1 },
    );
  };

  useGSAP(
    () => {
    

      gsap.from(".cards", {
        height: 100,
        stagger: 0.2,
        scrollTrigger: {
        
          trigger: ".container",
          start: "top 90%",
          end: "top -150%",
          scrub: true,
        },
      });

   
    },
    
  );

  return (
    <div ref={containerRef} className="">
      {/* Hover-Top-Section */}


      {/* mainHeading */}
      <div className="mt-[29vh] lg:p-4 p-2">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projects
        </h2>
      </div>

      {/* cards logic */}
      <div className="container lg:p-4 p-2">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="cards w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col gap-4 lg:p-4 p-2 "
          >
            <ProjectCard
              image1={p.image1}
              image2={p.image2}
              onEnterFirst={() =>
                showHoverBar({ h1: p.h1, h2: p.h2, year: p.h1year })
              }
              onEnterSecond={() =>
                showHoverBar({
                  h1: p.h1_2,
                  h2: p.h2_2,
                  year: p.year_2,
                })
              }

            />
          </div>
        ))}
      </div>

      <div className="bg-black text-white">
        <Footer />
        <div className="c-footer_foot w-full relative top-0  bg-black  overflow-y-hidden mt-12  md:mt-28 lg:mt-72 ">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-white">
           

            <div className="c-footer_clock flex items-center gap-3 text-sm md:text-base">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <use href="/assets/images/sprite.svg#globe" />
              </svg>

              <span className="tracking-wider">
                MONTREAL_<span className="ml-1 font-mono">05:02:04</span>
              </span>
            </div>

            {/* LEGALS */}
            <ul className="c-footer_legals flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base justify-center lg:justify-center">
              <li>
                <a
                  href="en/privacy-policy"
                  className="hover:text-[#c4ff3ae5] transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="en/privacy-notice"
                  className="hover:text-[#c4ff3ae5] transition"
                >
                  Privacy Notice
                </a>
              </li>
              <li>
                <a
                  href="https://secure.ethicspoint.com/domain/media/en/gui/47632/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c4ff3ae5] transition"
                >
                  Ethics Report
                </a>
              </li>
              <li>
                <button className="hover:text-[#c4ff3ae5] transition">
                  Consent choices
                </button>
              </li>
            </ul>

            {/* BACK TO TOP */}
            <div className="c-footer_top-btn-container w-full lg:w-auto flex justify-center lg:justify-end -translate-x-8">
              <button
                type="button"
                className="c-footer_top-btn border border-white rounded-full px-6 py-2 text-sm md:text-base
                  hover:text-[#c4ff3ae5] hover:border-[#c4ff3ae5] transition"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
