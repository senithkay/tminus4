import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import BrushIcon from "@mui/icons-material/Brush"; // Placeholder for Behance

const OurTeam = () => {
  const teamMembers = [
    {
      src: "/images/me2.png",
      name: "Senith Uthsara",
      role: "Deployment Lead",
      text: " Senith ensures that all deployments run smoothly and that our customers receive the best possible experience. He is the key point of contact for client queries and support.",
    },
    {
      src: "/images/samitha.png",
      name: "Samitha Rathnayake",
      role: "Strategic Lead",
      text: "Samitha drives our company's strategic initiatives. He also plays a crucial role in maintaining strong relationships with our customers.",
    },
    {
      src: "/images/kavinda.png",
      name: "Kavinda Medagoda",
      role: "UI/UX and Frontend",
      text: "Kavinda is the creative force behind our user interfaces, ensuring that our products are not only functional but also visually appealing and user-friendly.",
    },
    {
      src: "/images/lahiru.png",
      name: "Lahiru Sanjana",
      role: "Backend Applications and Quality",
      text: "Lahiru is responsible for the robustness and quality of our backend applications. His attention to detail ensures that our systems are reliable and efficient.",
    },
    {
      src: "/images/suresh.png",
      name: "Sureshri Dasanayake",
      role: "Marketing",
      text: "Sureshsri leads our marketing efforts, driving brand growth and visibility.",
    },
  ];

  return (
    <section className="w-full pb-24 text-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">
        <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">Our Experts Team</h2>
        <p className="text-gray-300 text-lg lg:text-xl">
          At T-4, our team consists of a talented group of professionals
          dedicated to delivering innovative and reliable software solutions. We
          pride ourselves on our ability to tackle challenges across various
          domains with creativity and expertise.
        </p>

        {/* Single row with all cards */}
        <div className="flex justify-center items-center mb-8 space-x-4 overflow-hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between h-72 w-52 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-600"
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-500"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-300 mb-3">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-500 mt-auto">
                <a href="#" className="hover:text-blue-400">
                  <LinkedInIcon />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
