import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const OurTeam = () => {
  const teamMembers = [
    {
      src: "/images/me2.png",
      name: "Senith Uthsara",
      role: "Deployment Lead",
      text: "Senith ensures that all deployments run smoothly and that our customers receive the best possible experience.",
    },
    {
      src: "/images/suresh.png",
      name: "Sureshri Dasanayake",
      role: "Frontend Developer",
      text: "Sureshri leads our Frontend Development with creativity and precision.",
    },
    {
      src: "/images/lahiru.png",
      name: "Lahiru Sanjana",
      role: "Backend & QA",
      text: "Lahiru ensures our backend is robust and efficient, with a strong focus on quality.",
    },
    {
      src: "/images/samitha.png",
      name: "Samitha Rathnayake",
      role: "Strategic Lead",
      text: "Samitha drives our strategy and maintains strong customer relationships.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="w-full pb-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl tracking-tight sm:text-6xl md:text-7xl font-extrabold text-center"
        >
          Our Experts Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg lg:text-xl text-center w-full mx-auto"
        >
          At T-4, our team is passionate, experienced, and driven by innovation.
          We’re committed to delivering excellence through collaboration and creativity.
        </motion.p>

        {/* Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="w-72"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={1000}
                className="bg-gray-700 bg-opacity-30 backdrop-blur-md border border-gray-600 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-500"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-blue-300 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.text}</p>
                  <div className="flex justify-center gap-4 mt-2 text-gray-400">
                    <a href="#" className="hover:text-blue-500 transition-all duration-200">
                      <LinkedInIcon />
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-all duration-200">
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
