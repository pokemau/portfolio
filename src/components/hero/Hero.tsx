import Link from "next/link";
import Image from "next/image";

import myImg from "../../images/myimg.jpg";
import ghLogo from "../../images/githubLogo.png";
import linkedInLogo from "../../images/linkedin.png";
import Techstack from "../techstack/Techstack";
import emailLogo from "../../images/email.png";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center">
      <div
        className="w-[90%] md:w-[95%] flex flex-col items-center md:gap-4
          md:flex-row mt-4 md:mt-6 lg:mt-8 md:items-start md:justify-center">
        <Image
          priority
          src={myImg}
          width={300}
          height={300}
          alt="Maurice Image"
          className="rounded-md"
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
              Software Developer
            </h3>
          </div>

          <div className="flex justify-center md:justify-start gap-2 mt-4 w-full">
            <Link
              href="https://github.com/pokemau"
              target="_blank"
              rel="noopener norefferer">
              <Image
                width={35}
                height={35}
                src={ghLogo}
                alt="GitHub Logo"
                className="hover:scale-110 transition-all"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mauricetaneca/"
              target="_blank"
              rel="noopener norefferer">
              <Image
                width={35}
                height={35}
                src={linkedInLogo}
                alt="LinkedIn Logo"
                className="hover:scale-110 transition-all"
              />
            </Link>

            <Link href="mailto: mauricetaneca7@gmail.com">
              <Image
                width={35}
                height={35}
                src={emailLogo}
                alt="email icon"
                className="hover:scale-110 transition-all"
              />
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
    </section>
  );
};

export default Hero;
