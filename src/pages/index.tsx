import Image from "next/image";
import myImg from "../images/my_pic.jpg";

const Home = () => {
  return (
    <div
      className="bg-card-bg w-[90%] h-[70vh] mx-auto mt-8 rounded-lg flex
      flex-col pt-4 items-center overflow-y-auto pb-5"
    >
      <div className="w-[90%]">
        <div className="flex flex-col md:flex-row">
          <Image
            src={myImg}
            alt="Maurice Image"
            className="w-full mx-auto mb-2 rounded-md aspect-square"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-[3rem] text-center font-bold leading-none">
              MAURICE TAÑECA
            </h1>
            <h3 className="text-2xl font-medium">Web Developer</h3>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl indent-7 text-center">
            Hi! My name is Maurice Tañeca. I'm a developer from the Philippines
            currently pursuing a Bachelor's degree in Computer Science at Cebu
            Institute of Technology University.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className="flex gap-10 mt-2">
              <div className="text-md">
                <h3 className="font-semibold text-xl">Front End</h3>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>Tailwind CSS</p>
                <p>ReactJS/NextJS</p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">Back End</h3>
                <p>Node JS</p>
                <p>PostgreSQL</p>
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
