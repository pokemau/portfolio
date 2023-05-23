import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const Techstack = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold border-b-[1px]">Tech Stack</h2>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-1 text-2xl">
          <SiTypescript className="text-blue-500" />
          <p>TypeScript</p>
        </div>

        <div className="flex items-center gap-1 text-2xl">
          <SiJavascript className="text-yellow-300" />
          <p>JavaScript</p>
        </div>

        <div className="flex items-center gap-1 text-2xl">
          <SiTailwindcss className="text-blue-400" />
          <p>Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-1 text-2xl">
          <SiReact className="text-blue-400" />
          <p>React JS</p>
        </div>
        <div className="flex items-center gap-1 text-2xl">
          <SiNodedotjs className="text-[#6cc24a]" />
          <p>Node JS</p>
        </div>
        <div className="flex items-center gap-1 text-2xl">
          <SiPostgresql className="text-[#2496e2]" />
          <p>PostgreSQL</p>
        </div>
        <div className="flex items-center gap-1 text-2xl">
          <SiFirebase className="text-[#d89117]" />
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
