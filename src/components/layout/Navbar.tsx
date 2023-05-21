import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-main-bg flex justify-between items-center py-6 px-20">
      <h1 className="text-5xl font-extrabold">MT</h1>
      <div className="flex gap-12 group">
        <Link
          href="/"
          className={`${
            router.pathname == "/" ? "border-b-[3px] border-main-text" : ""
          } text-xl p-2 rounded-tl rounded-tr font-semibold hover:bg-main-hover-bg
          transition-all duration-75`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            router.pathname == "/projects"
              ? "border-b-[3px] border-main-text"
              : ""
          } text-xl p-2 rounded-tl rounded-tr font-semibold hover:bg-main-hover-bg
          transition-all duration-75`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${
            router.pathname == "/contact"
              ? "border-b-[3px] border-main-text"
              : ""
          } text-xl p-2 rounded-tl rounded-tr font-semibold hover:bg-main-hover-bg
          transition-all duration-75`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
