import React from "react";
import TechStackScroll from "@/components/techStack";
import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";

const paragraphLines = [
  "Transforming design into clean, efficient code is at the heart of what we do.",
  "Our approach bridges creativity and functionality,",
  "ensuring that every design element is seamlessly brought to life with pixel-perfect accuracy.",
  "From user interface concepts to fully responsive web solutions,",
  "we turn your vision into a digital reality with the latest development technologies.",
];

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6,
    },
  },
};

const lineAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function AboutUs() {
  return (
    <div className=" w-full">
      {/* Section 1 */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
  <div className="w-full px-4 md:px-20 lg:px-20 xl:px-[200px] py-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
    
    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left md:pr-10">
      <h2 className="text-4xl md:text-6xl lg:text-7xl  font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 animate-text">
        Design To Code
      </h2>
      <motion.div
        className="max-w-[500px] pt-5 text-gray-400 text-base md:text-xl text-justify"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {paragraphLines.map((line, index) => (
          <motion.p key={index} variants={lineAnimation} className="mb-2">
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>

    {/* Image Compare */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Compare
        firstImage="/images/evento.png"
        secondImage="https://assets.aceternity.com/code-problem.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        slideMode="hover"
      />
    </div>

  </div>
</section>


      {/* Section 2 */}
      {/* <section className="w-full bg-black text-white">
        <div className="w-full px-4 md:px-20 lg:px-32 xl:px-[300px] py-20 flex flex-col justify-center items-center gap-16">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-gray-400 font-bold">Tech Stack</h2>
          <TechStackScroll />
        </div>
      </section> */}
    </div>
  );
}
