import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full bg-main-bg flex justify-center items-center py-6 px-20">
      <div className="flex gap-4 md:gap-12 group">
        <Link
          href="/"
          className={`${
            router.pathname == "/" ? "border-main-text" : "border-transparent"
          } border-b-[3px] text-xl p-2 rounded-tl rounded-tr font-semibold
          transition-all duration-200 hover:border-yel`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            router.pathname == "/projects"
              ? "border-main-text"
              : "border-transparent"
          } border-b-[3px] text-xl p-2 rounded-tl rounded-tr font-semibold 
          transition-all duration-200 hover:border-yel`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${
            router.pathname == "/contact"
              ? "border-main-text"
              : "border-transparent"
          } border-b-[3px] text-xl p-2 rounded-tl rounded-tr font-semibold
          transition-all duration-200 hover:border-yel`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
