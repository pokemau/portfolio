import ProjectCard from "@/components/projects/ProjectCard";

import { ProjectsList } from "@/components/projects/ProjectsList";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Maurice | Projects</title>
      </Head>
      <div
        className="bg-[#303030] h-[2rem] w-[90%] lg:w-[80%] m-auto rounded-tl-2xl 
        rounded-tr-2xl flex items-center justify-center">
        <p className="font-bold">Projects</p>
      </div>

      <div
        className="bg-card-bg w-[90%] lg:w-[80%] h-[73vh] mx-auto overflow-y-auto 
        flex flex-col items-center gap-3 pt-4">
        {ProjectsList &&
          ProjectsList.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </div>

      <div
        className="h-[1rem] w-[90%] lg:w-[80%] bg-card-bg m-auto rounded-bl-lg 
      rounded-br-lg"></div>
    </>
  );
};

export default Projects;
