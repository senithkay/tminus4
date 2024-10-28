"use client";
import React, { useEffect, useState } from "react";
import { Finger_Paint } from "next/font/google";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Button from "@mui/material/Button";

const finger = Finger_Paint({
  weight: "400",
  subsets: ["latin"],
});

type NavbarProps = {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  aboutUsRef: React.RefObject<HTMLElement>;
  servicesRef: React.RefObject<HTMLElement>;
  productsRef: React.RefObject<HTMLElement>;
  teamRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
};

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  aboutUsRef,
  servicesRef,
  productsRef,
  teamRef,
  contactRef,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-[1003] flex justify-between border-2 border-gray-800 text-white items-center py-2 ${
        isScrolled ? "bg-white text-black" : "bg-transparent"
      } shadow-xl rounded-full transition-all duration-300`}
    >
      <h1
        className={`${finger.className} cursor-pointer flex items-center ml-10`}
      >
        <RocketLaunchIcon sx={{ marginX: "10px" }} />
        <span className="text-lg">T - 4</span>
      </h1>
      <ul className="hidden gap-20 md:flex">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(aboutUsRef)}
            className="nav-link"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="nav-link"
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(productsRef)}
            className="nav-link"
          >
            Products
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(teamRef)} className="nav-link">
            Team
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="nav-link"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="flex gap-1.5">
        <Button
          onClick={() => scrollToSection(contactRef)}
          className="bg-violet-600 hover:bg-violet-900 text-white border-2 px-3 py-2 rounded-lg w-[140px] text-center mx-10"
        >
          Get a Quote
        </Button>
      </div>
      <style jsx>{`
        .nav-link {
          position: relative;
          color: inherit; /* Keep the inherited color */
          text-decoration: none; /* Remove underline */
          transition: color 0.3s, transform 0.3s;
        }
        .nav-link:hover {
          color: #eb3678ff; /* Change color on hover */
          transform: scale(1.1); /* Scale up on hover */
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px; /* Adjust to position the line */
          height: 2px; /* Line height */
          background: #eb3678ff; /* Color of the line */
          transform: scaleX(0); /* Initially hidden */
          transition: transform 0.3s; /* Smooth transition */
        }
        .nav-link:hover::after {
          transform: scaleX(1); /* Show line on hover */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
