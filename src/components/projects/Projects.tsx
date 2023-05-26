import ProjectCard from "./ProjectCard";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-card-bg w-[90%] lg:w-[80%] mx-auto 
        flex flex-col items-center gap-3 mt-4">
      <h2 className="text-[2rem] font-[500] border-b-[1px] mb-2 font-[Oswald]">
        Projects
      </h2>
      {ProjectsList &&
        ProjectsList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
    </section>
  );
};

export default Projects;
