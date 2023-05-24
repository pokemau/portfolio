import Image from "next/image";
import myImg from "../images/my_pic.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Techstack from "@/components/techstack/Techstack";

const Home = () => {
  return (
    <>
      <div
        className="bg-[#303030] h-[2rem] w-[90%] lg:w-[80%] m-auto rounded-tl-2xl 
        rounded-tr-2xl flex items-center justify-center">
        <p className="font-bold">Home</p>
      </div>

      <div
        className="bg-card-bg w-[90%] lg:w-[80%] h-[73vh] mx-auto overflow-y-auto 
        flex flex-col items-center">
        <div
          className="w-[90%] md:w-[95%] flex flex-col items-center md:gap-4 mt-4
          md:flex-row md:my-4 lg:mt-8 md:items-start md:justify-center">
          <Image
            src={myImg}
            alt="Maurice Image"
            className="w-[15rem] md:w-[16rem] rounded-md 
              aspect-square"
          />

          <div className="flex flex-col items-center">
            <div className="text-center md:text-start">
              <h1
                className="font-[Oswald] text-[#9ca067] text-[4rem] md:text-[5rem] 
                font-[500] leading-[4.6rem] md:leading-[5.5rem]">
                MAURICE TAÑECA
              </h1>
              <h3
                className="text-2xl md:mt-2 md:text-[1.8rem] font-normal
                lg:text-[2.4rem] font-[Oswald]">
                Web Developer
              </h3>
            </div>

            <div className="flex justify-center md:justify-start ap-2 mt-4 w-full">
              <Link
                href="https://github.com/pokemau"
                target="_blank"
                rel="noopener norefferer">
                <AiFillGithub className="text-3xl hover:scale-110 transition-all" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mauricetaneca/"
                target="_blank"
                rel="noopener norefferer">
                <AiFillLinkedin className="text-3xl hover:scale-110 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 w-[90%] md:w-[70%]">
          <p className="text-xl text-center">
            Hi! My name is Maurice Tañeca. I'm a developer from the Philippines
            currently pursuing a Bachelor's degree in Computer Science at Cebu
            Institute of Technology University.
          </p>
        </div>

        <Techstack />
      </div>

      <div
        className="h-[1rem] w-[90%] lg:w-[80%] bg-card-bg m-auto rounded-bl-lg 
      rounded-br-lg"></div>
    </>
  );
};

export default Home;
