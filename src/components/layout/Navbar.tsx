import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className="w-full bg-main-bg flex md:justify-between justify-center 
      items-center py-2 px-5 md:px-20 transition-all">
      <div className="hidden md:flex items-center justify-center">
        <Link href="/">
          <h1 className="text-[2.5rem] lg:text-[3.2rem] font-bold">MT</h1>
        </Link>
      </div>
      <div className="flex gap-1 md:gap-6 group">
        <Link
          href="/"
          className={`${
            router.pathname == "/" ? "border-main-text" : "border-transparent"
          } border-b-[3px] text-base md:text-lg p-2 rounded-tl rounded-tr font-semibold
          transition-all duration-200 hover:border-yel`}>
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            router.pathname == "/projects"
              ? "border-main-text"
              : "border-transparent"
          } border-b-[3px] text-base md:text-lg p-2 rounded-tl rounded-tr font-semibold 
          transition-all duration-200 hover:border-yel`}>
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${
            router.pathname == "/contact"
              ? "border-main-text"
              : "border-transparent"
          } border-b-[3px] text-base md:text-lg p-2 rounded-tl rounded-tr font-semibold
          transition-all duration-200 hover:border-yel`}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
