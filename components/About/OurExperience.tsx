/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/aboutData";
export default function OurExperience() {
  return (
    <div className="mt-16">
      <div
        className="text-2xl md:text-4xl font-bold text-secondary flex justify-center items-center text-center mb-8 h-48 w-48 md:h-64 md:w-64 bg-cover bg-center rounded-full mx-auto shadow-xl border-4 border-white"
        style={{ backgroundImage: `url(/gif/gif3.gif)` }}
      >
        Our Experience
      </div>
      <div className="max-w-5xl mx-auto relative flex flex-col items-center overflow-x-clip px-1">
        <div className="absolute w-[2px] h-full bg-secondary left-5 md:left-1/2 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className={`relative flex items-center w-full my-6 ${
                index % 2 === 0
                  ? "md:justify-start md:pr-16"
                  : "md:justify-end md:pl-16"
              }`}
            >
              <div className="absolute  left-5 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
                {exp.icon}
              </div>

              <div className="relative flex lg:w-1/2 w-[80%] lg:left-0 left-16">
                <div className="bg-dark  p-6 rounded-lg shadow-lg w-full ">
                  <p className="text-secondary text-md font-semibold mb-2">
                    {exp.year}
                  </p>

                  <h3 className="text-2xl font-semibold text-light">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-md font-medium">
                    {exp.location}
                  </p>

                  <p className="text-light mt-2 text-lg lg:text-xl">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
