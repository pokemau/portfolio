import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (
      e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== ""
    ) {
      emailjs
        .sendForm(
          "service_muiruwp",
          "template_fveanzm",
          form.current!,
          "K6-y1L9o-Pusfm4v6"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="bg-card-bg w-[90%] lg:w-[80%] mx-auto 
        flex flex-col items-center gap-3 mt-8 mb-16">
      <h2 className="text-[2rem] font-[500] border-b-[1px] mb-2 font-[Oswald]">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-main-bg w-full rounded-md px-2 py-6 flex flex-col gap-8 
        md:gap-0 md:flex-row text-main-text">
        <div className="flex flex-col gap-2 w-[90%] md:w-[30%] mx-auto">
          <div className="">
            <p className="font-[500] text-base">Name</p>
            <input
              type="text"
              name="user_name"
              className="text-black p-1 focus:outline-none w-full bg-main-text"
            />
          </div>

          <div className="">
            <p className="font-[500] text-base">Email</p>
            <input
              type="email"
              name="user_email"
              className="text-black p-1 focus:outline-none w-full bg-main-text"
            />
          </div>
        </div>

        <div className="w-[90%] md:w-[55%] m-auto">
          <p className="font-[500] text-base">Message</p>
          <textarea
            name="message"
            rows={10}
            className="text-black p-2 focus:outline-none w-[100%] bg-main-text"
          />
          <input
            type="submit"
            value="Send"
            className="bg-yel hover:bg-yel-hover text-gray-900 mt-2 py-2 px-5 rounded 
            cursor-pointer font-[500] transition-all"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
