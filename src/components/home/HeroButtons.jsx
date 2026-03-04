import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <div className="w-full">
      <div className="text-white font-[font2] w-full flex justify-end">
        <p
          className="
          text-left
          pl-6
          leading-relaxed
          text-[1.1rem]
          indent-8
          w-[22rem]
        "
        >
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>
      </div>
      <div className="font-[font2] flex items-center justify-center gap-2  text-white mt-11">
        <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-32 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
          <Link className="text-[6vw] lg:mt-6" to="/projects">
            Work
          </Link>
        </div>
        <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-32 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
          <Link className="text-[6vw] lg:mt-6" to="/agence">
            agence
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;
