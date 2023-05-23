const Projects = () => {
  return (
    <>
      <div
        className="bg-[#303030] h-[2rem] w-[90%] m-auto rounded-tl-2xl rounded-tr-2xl
      flex items-center justify-center"
      >
        <p className="font-bold">Projects</p>
      </div>
      <div
        className="bg-card-bg w-[90%] md:w-[75%] h-[70vh] mx-auto flex
      flex-col pt-4 items-center overflow-y-auto pb-5"
      >
        <div>MY PROJECTS HERE</div>
      </div>
      <div
        className="h-[1rem] w-[90%] bg-card-bg m-auto rounded-bl-lg 
      rounded-br-lg"
      ></div>
    </>
  );
};

export default Projects;
