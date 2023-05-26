import Link from "next/link";
import { ProjectType } from "./ProjectsList";
import Image from "next/image";

import stackIcon from "../../images/stack.png";

type ProjectCardTypes = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardTypes> = ({ project }) => {
  return (
    <>
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
              priority
              width={450}
              height={200}
              src={project.img}
              alt={project.id}
              className="rounded-md mx-auto"
            />
          </Link>
        )}
        <div className="flex justify-between">
          <Link href={project.site} target="_blank" rel="noopener norefferer">
            <h1 className="text-xl text-yel hover:text-yel-hover mt-2 md:mt-0 font-[700] mb-2">
              {project.name}
            </h1>
          </Link>
        </div>
        <p>{project.desc}</p>

        <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Image src={stackIcon} alt="Stack Icon" width={28} height={28} />
            {project.techUsed.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
          <div className="flex gap-2 text-[1.4rem]">
            {project.links.map((link) => (
              <Link
                key={link.site}
                href={link.site}
                target="_blank"
                rel="noopener norefferer">
                <Image
                  src={link.icon}
                  alt="icon"
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
