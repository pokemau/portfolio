import Link from "next/link";
import { ProjectsList } from "../components/projects/ProjectsList";

import { BsStack } from "react-icons/bs";

const Projects = () => {
  return (
    <>
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
            <div
              key={project.id}
              className="bg-main-bg w-[85%] md:w-[70%] rounded-md py-4 px-6
            hover:scale-[1.006] transition-all duration-150 h-auto">
              <div className="flex justify-between">
                <Link
                  href={project.site}
                  target="_blank"
                  rel="noopener norefferer">
                  <h1 className="text-xl text-yel hover:text-yel-hover font-[700] mb-2">
                    {project.name}
                  </h1>
                </Link>
                <div className="flex gap-4 text-[1.4rem]">
                  {project.links.map((link) => (
                    <Link
                      href={link.site}
                      className="hover:text-gray-400"
                      target="_blank"
                      rel="noopener norefferer">
                      <link.icon />
                    </Link>
                  ))}
                </div>
              </div>
              <p>{project.desc}</p>

              <div className="flex items-center mt-4 gap-2 flex-wrap">
                <BsStack />
                {project.techUsed.map((tech) => (
                  <p>{tech}</p>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div
        className="h-[1rem] w-[90%] lg:w-[80%] bg-card-bg m-auto rounded-bl-lg 
      rounded-br-lg"></div>
    </>
  );
};

export default Projects;
