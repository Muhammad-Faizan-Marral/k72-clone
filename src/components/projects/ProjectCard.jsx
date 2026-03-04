import React from "react";

const ProjectCard = ({
  image1,
  image2,
  onEnterFirst,
  onEnterSecond,
  onLeave,
}) => {
  return (
    <>
      {/* Card 1 */}
      <div
        onMouseEnter={onEnterFirst}
        onMouseLeave={onLeave}
        className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full"
      >
        <img className="h-full w-full object-cover" src={image1} alt="" />

        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>

      {/* Card 2 */}
      <div
        onMouseEnter={onEnterSecond}
        onMouseLeave={onLeave}
        className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full"
      >
        <img className="h-full w-full object-cover" src={image2} alt="" />

        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
