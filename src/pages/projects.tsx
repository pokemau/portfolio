import ProjectCard from "@/components/projects/ProjectCard";

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
        <ProjectCard />
      </div>

      <div
        className="h-[1rem] w-[90%] lg:w-[80%] bg-card-bg m-auto rounded-bl-lg 
      rounded-br-lg"></div>
    </>
  );
};

export default Projects;
