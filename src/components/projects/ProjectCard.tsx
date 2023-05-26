import Link from "next/link";
import { ProjectsList } from "./ProjectsList";
import { BsStack } from "react-icons/bs";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
      {ProjectsList &&
        ProjectsList.map((project) => (
          <div
            key={project.id}
            className="bg-main-bg w-[95%] md:w-[70%] rounded-md py-4 px-4 md:px-6
             transition-all duration-150">
            {project.img && (
              <Link
                href={project.site}
                target="_blank"
                rel="noopener norefferer"
                className="relative block w-full md:w-[67%] mx-auto hover:scale-[1.01] 
                transition-all max-w-[35rem]">
                <Image
                  src={project.img}
                  alt={project.id}
                  priority
                  className="w-full mb-4 aspect-auto rounded-md
                  shadow-[0px_5px_20px_1px_#2b2b2a]"
                />
              </Link>
            )}
            <div className="flex justify-between">
              <Link
                href={project.site}
                target="_blank"
                rel="noopener norefferer">
                <h1 className="text-xl text-yel hover:text-yel-hover font-[700] mb-2">
                  {project.name}
                </h1>
              </Link>
            </div>
            <p>{project.desc}</p>

            <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <BsStack />
                {project.techUsed.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
              <div className="flex gap-4 text-[1.4rem]">
                {project.links.map((link) => (
                  <Link
                    key={link.site}
                    href={link.site}
                    className="hover:text-gray-400"
                    target="_blank"
                    rel="noopener norefferer">
                    <link.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProjectCard;
