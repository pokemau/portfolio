import TSLogo from "../../images/ts.png";
import JSLogo from "../../images/js.png";
import expressLogo from "../../images/express.png";
import reactLogo from "../../images/react.png";
import nodeLogo from "../../images/node.png";
import postgresLogo from "../../images/postgres.png";
import firebaseLogo from "../../images/firebase.png";
import tailwindLogo from "../../images/tailwind.png";

import Image from "next/image";

const Techstack = () => {
  return (
    <div className="md:w-[80%] mt-8 mb-14 flex flex-col items-center">
      <h2 className="text-[2rem] font-[500] border-b-[1px] font-[Oswald]">
        Tech Stack
      </h2>
      <div className="mt-2 md:mt-4 flex flex-col md:flex-row gap-2 md:gap-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              src={TSLogo}
              alt="TypeScript Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <p>TypeScript</p>
          </div>

          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={JSLogo}
              alt="JavaScript Logo"
              className="rounded-md"
            />
            <p>JavaScript</p>
          </div>

          {/* <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={expressLogo}
              alt="Express Logo"
              className="rounded-md"
            />
            <p>Express JS</p>
          </div> */}

          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={reactLogo}
              alt="React Logo"
              className="rounded-md"
            />
            <p>React JS</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={nodeLogo}
              alt="Node JS Logo"
              className="rounded-md"
            />
            <p>Node JS</p>
          </div>
          {/* <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={postgresLogo}
              alt="PostgreSQL Logo"
              className="rounded-md"
            />
            <p>PostgreSQL</p>
          </div> */}
          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={firebaseLogo}
              alt="Firebase Logo"
              className="rounded-md"
            />
            <p>Firebase</p>
          </div>
          <div className="flex items-center gap-2 text-[1.3rem]">
            <Image
              width={40}
              height={40}
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              className="rounded-md"
            />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
