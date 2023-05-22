import Image from "next/image";
import myImg from "../images/my_pic.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Techstack from "@/components/techstack/Techstack";

const Home = () => {
  return (
    <>
      <div
        className="bg-[#303030] h-[2rem] w-[90%] m-auto rounded-tl-2xl rounded-tr-2xl
      flex items-center justify-center"
      >
        <p className="font-bold">Home</p>
      </div>
      <div
        className="bg-card-bg w-[90%] md:w-[75%] h-[70vh] mx-auto flex
      flex-col pt-4 items-center overflow-y-auto pb-5"
      >
        <div className="w-[90%]">
          <div className="flex flex-col md:flex-row">
            <Image
              src={myImg}
              alt="Maurice Image"
              className="w-full max-w-[20rem] mx-auto mb-2 rounded-md aspect-square"
            />
            <div className="flex flex-col items-center">
              <h1 className="font-[Oswald] text-[3.5rem] text-center font-bold leading-[4rem]">
                MAURICE TAÑECA
              </h1>
              <h3 className="text-2xl font-medium">Web Developer</h3>
            </div>

            <div className="flex gap-3 justify-center items-center mt-4">
              <Link
                href="https://github.com/pokemau"
                target="_blank"
                rel="noopener norefferer"
              >
                <AiFillGithub className="text-3xl" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mauricetaneca/"
                target="_blank"
                rel="noopener norefferer"
              >
                <AiFillLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-2xl text-center">
              Hi! My name is Maurice Tañeca. I'm a developer from the
              Philippines currently pursuing a Bachelor's degree in Computer
              Science at Cebu Institute of Technology University.
            </p>
          </div>

          <Techstack />
        </div>
      </div>
      <div className="h-[1rem] w-[90%] bg-card-bg m-auto rounded-bl-lg rounded-br-lg"></div>
    </>
  );
};

export default Home;
