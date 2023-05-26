import Head from "next/head";
import Projects from "@/components/projects/Projects";
import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Maurice Tañeca</title>
      </Head>

      <div
        className="bg-card-bg w-[90%] lg:w-[80%] mx-auto overflow-y-auto
        flex flex-col items-center mt-[4rem] md:mt-[6rem] mb-8 pb-8 rounded-lg">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
