// import Link from "next/link";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className="w-full bg-main-bg flex md:justify-between justify-center 
      items-center px-16 md:py-0 transition-all fixed top-0 left-0 z-10">
      <div className="hidden md:flex items-center justify-center">
        <Link
          to="home"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          className="cursor-pointer">
          <h1
            className="text-[2.5rem] lg:text-[3rem] font-bold hover:text-yel
          transition-all duration-100">
            MT
          </h1>
        </Link>
      </div>

      <div className="test flex gap-1 md:gap-6 transition-all">
        <Link
          activeClass="border-yel"
          to="home"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          className="text-lg p-2 rounded-tl rounded-tr font-semibold
          hover:border-yel cursor-pointer border-b-[3px] border-transparent">
          Home
        </Link>

        <Link
          activeClass="border-yel"
          to="projects"
          smooth={true}
          offset={-80}
          duration={500}
          spy={true}
          className="text-lg p-2 rounded-tl rounded-tr font-semibold
          hover:border-yel cursor-pointer border-b-[3px] border-transparent">
          Projects
        </Link>

        <Link
          activeClass="border-yel"
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          spy={true}
          className="text-lg p-2 rounded-tl rounded-tr font-semibold
          hover:border-yel cursor-pointer border-b-[3px] border-transparent">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
