import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const Techstack = () => {
  return (
    <div className="md:w-[80%] mt-8 mb-14 flex flex-col items-center">
      <h2 className="text-[2rem] font-[500] border-b-[1px] font-[Oswald]">
        Tech Stack
      </h2>
      <div className="mt-2 md:mt-4 flex flex-col md:flex-row gap-2 md:gap-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiTypescript className="text-blue-500" />
            <p>TypeScript</p>
          </div>

          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiJavascript className="text-yellow-300" />
            <p>JavaScript</p>
          </div>

          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiExpress className="text-gray-200" />
            <p>Express JS</p>
          </div>

          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiReact className="text-blue-400" />
            <p>React JS</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiNodedotjs className="text-[#6cc24a]" />
            <p>Node JS</p>
          </div>
          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiPostgresql className="text-[#2496e2]" />
            <p>PostgreSQL</p>
          </div>
          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiFirebase className="text-[#d89117]" />
            <p>Firebase</p>
          </div>
          <div className="flex items-center gap-1 text-[1.3rem]">
            <SiTailwindcss className="text-blue-400" />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
