import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Footer from "../Footer";

const AgencyFottoer = () => {
  const panel1 = useRef(null);
  const panel2 = useRef(null);
  const panel3 = useRef(null);
  const panel4 = useRef(null);

  const viewAllRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
       
        start: "top+=50 top",
        pin: true,
        pinSpacing: false,
      });
    });
    ScrollTrigger.create({
      trigger: panel1.current,
      start: "top top",
      end: () => panel1.current.offsetHeight,
      pin: viewAllRef.current,
      pinSpacing: false,
    });
  });
  const footerImages = [
    "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
    "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
  ];
  return (
    <div className="bg-black">
      <div className="bg-black">
        {/* Page-1  */}
        <section
          ref={panel1}
          className="panel  bg-gray-800 h-[90vh] w-full rounded-tl-[3rem] rounded-tr-[3rem] overflow-hidden relative group"
        >
          <div className="group-hover:bg-[#00000059]  transition-all ease-in-out 2 absolute top-0 z-30 h-full w-full"></div>

          <div
            ref={viewAllRef}
            className="w-full text-center sticky top-12 text-white z-50 "
          >
            <h1 className="text-2xl font-medium font-[font2]">
              VIEW ALL PROJECTS
            </h1>
          </div>

          <div className="absolute top-0 w-full h-full ">
            <img
              src={footerImages[0]}
              alt="View project"
              className="w-full h-full object-cover group-hover:scale-105 transition-all 2  ease-in-out "
            />
          </div>

          <div className="h-full w-full flex items-center justify-center flex-col gap-7 absolute top-0 z-20 mt-3 ">
            <h1 className="font-[font2] text-3xl font-bold text-white  ">
              Opto-Network
            </h1>
            <h2 className="font-[font1] text-7xl font-medium text-white ">
              We see you like no one else
            </h2>
          </div>
        </section>
        {/* Page-2  */}
        <section
          ref={panel2}
          className="panel panel2 bg-amber-800 h-[90vh] w-full  rounded-tl-[3rem] rounded-tr-[3rem] relative -top-12 group overflow-hidden "
        >
          <div className="group-hover:bg-[#00000059]  transition-all ease-in-out 2 absolute top-0 z-30 h-full w-full"></div>

          <div className="absolute top-0 w-full h-full ">
            <img
              src={footerImages[1]}
              alt="View project"
              className="w-full h-full object-cover group-hover:scale-105 transition-all 2  ease-in-out"
            />
          </div>

          <div className="h-full w-full flex items-center justify-center flex-col gap-7 absolute top-0  mt-3 z-40 ">
            <h1 className="font-[font2] text-3xl font-bold text-white  ">
              Lamajeure
            </h1>
            <h2 className="font-[font1] text-7xl font-medium text-white ">
              Lamajeure
            </h2>
          </div>
        </section>
        {/* Page-3  */}
        <section
          ref={panel3}
          className="panel panel3 bg-blue-700 h-[90vh] w-full group overflow-hidden rounded-tl-[3rem] rounded-tr-[3rem] relative -top-20 md:-top-28"
        >
          <div className="group-hover:bg-[#00000059]  transition-all ease-in-out 2 absolute top-0 z-30 h-full w-full"></div>

          <div className="absolute top-0 w-full h-full ">
            <img
              src={footerImages[2]}
              alt="View project"
              className="w-full h-full object-cover group-hover:scale-105 transition-all 2  ease-in-out"
            />
          </div>

          <div className="h-full w-full flex items-center justify-center flex-col gap-7 absolute top-0  mt-3 z-40 ">
            <h1 className="font-[font2] text-3xl font-bold text-white  ">
              Lassonde
            </h1>
            <h2 className="font-[font1] text-7xl font-medium text-white ">
              Fruite
            </h2>
          </div>
        </section>
        {/* Page-4  */}

        <section
          ref={panel4}
          className="panel panel3 bg-black h-[60vh] w-full   text-white"
        >
          <Footer />
        </section>

        <div className="c-footer_foot w-full relative top-0  bg-black  overflow-y-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-white">
            {/* CLOCK */}

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

export default AgencyFottoer;
