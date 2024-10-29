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
      role: "Frontend Development",
      text: "Sureshsri leads our marketing efforts, driving brand growth and visibility.",
    },
  ];

  return (
    <section className="pb-24  text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Our Experts Team</h2>
        <p className="text-gray-500 mb-12">
          At T-4, our team consists of a talented group of professionals
          dedicated to delivering innovative and reliable software solutions. We
          pride ourselves on our ability to tackle challenges across various
          domains with creativity and expertise.
        </p>

        {/* First row with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="bg-white card-shadow-primary-purple rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-84 w-72 mx-auto  duration-300 hover:bg-gray-200"
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-5">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-500 mt-auto">
                <a href="#" className="hover:text-blue-500">
                  <LinkedInIcon />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index}
              className="bg-white card-shadow-primary-purple rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-84 w-72 mx-auto  duration-300 hover:bg-gray-200"
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-5">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-500 mt-auto">
                <a href="#" className="hover:text-blue-500">
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
