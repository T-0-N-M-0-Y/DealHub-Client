import { useRef } from "react";

const Form = () => {
  const form = useRef();

  return (
    <div>
      <form ref={form}>
        <input
          className="w-11/12 mb-4 h-10 outline-my-primary rounded border border-my-accent  placeholder-gray-4  p-2 font-medium focus:border-2 focus:outline-none  focus:border-accent"
          placeholder="Your Name"
          required
          type="text"
          name="name"
          id="name"
        />{" "}
        <br />
        <input
          className="w-11/12 mb-4 h-10 outline-my-primary rounded border border-my-accent  placeholder-gray-4  p-2 font-medium focus:border-2 focus:outline-none  focus:border-accent "
          placeholder="Your Email"
          required
          type="email"
          name="email"
          id="email"
        />
        <br />
        <input
          className="w-11/12 mb-4 h-10 outline-my-primary rounded border border-my-accent  placeholder-gray-4  p-2 font-medium focus:border-2 focus:outline-none  focus:border-accent "
          placeholder="Subject"
          required
          type="subject"
          name="subject"
          id="subject"
        />
        <br />
        <textarea
          className="w-11/12 mb-4 h-36 outline-my-primary rounded border border-my-accent  placeholder-gray-4  p-2 font-medium  focus:border-2 focus:outline-none  focus:border-accent"
          placeholder="Your Message"
          name="message"
          id="message"
          cols="30"
          rows="10"
        />
        <br />
        <input
          className="bg-cyan-600 w-11/12 h-10 cursor-pointer text-white hover:bg-cyan-300"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Form;
