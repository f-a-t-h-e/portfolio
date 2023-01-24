import { motion } from "framer-motion";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // window.location.href = `mailto:`
    console.log("send email...");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row items-center
md:flex-row max-w-7xl h-screen justify-evenly xl:space-y-0 mx-auto overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[1.3rem] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center">
          Get work done{" "}
          <span className="underline decoration-[#F7ABBA]/50">
            get in touch
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <AiFillPhone className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <HiEnvelope className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">fatthiosama@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <HiMapPin className="text-[#F7ABBA] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Egypt Cairo</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contact-input"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="message"
            className="contact-input"
          />
          <button
            type="submit"
            className="bg-[#F7ABBA] py-5 px-10 rounded-md text-black 
          font-bold text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
