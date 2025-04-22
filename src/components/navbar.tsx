"use client";
import React, { useEffect, useState } from "react";
import { Finger_Paint } from "next/font/google";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref);
    setIsMobileMenuOpen(false); // close menu on link click
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-[1003] flex justify-between items-center py-2`}
    >
      {/* Logo */}
      <h1 className={`${finger.className} cursor-pointer flex items-center ml-4`}>
        <RocketLaunchIcon sx={{ marginX: "10px", color: "white" }} />
        <span className="text-xl text-white">T - 4</span>
      </h1>

      {/* Desktop Nav */}
      <ul
        className={`hidden md:flex gap-20 border-2 border-gray-800 py-3 px-10 shadow-xl rounded-full transition-all duration-300 ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><button onClick={() => handleLinkClick(aboutUsRef)} className="nav-link">About</button></li>
        <li><button onClick={() => handleLinkClick(servicesRef)} className="nav-link">Services</button></li>
        <li><button onClick={() => handleLinkClick(productsRef)} className="nav-link">Products</button></li>
        <li><button onClick={() => handleLinkClick(teamRef)} className="nav-link">Team</button></li>
        <li><button onClick={() => handleLinkClick(contactRef)} className="nav-link">Contact</button></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden mr-4 z-[1004]">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <CloseIcon sx={{ color: "white" }} />
          ) : (
            <MenuIcon sx={{ color: "white" }} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`absolute top-20 left-4 right-4 bg-white text-black rounded-xl shadow-lg p-6 flex flex-col gap-4 z-[1002] transition-all`}>
          <button onClick={() => handleLinkClick(aboutUsRef)} className="nav-link text-left">About</button>
          <button onClick={() => handleLinkClick(servicesRef)} className="nav-link text-left">Services</button>
          <button onClick={() => handleLinkClick(productsRef)} className="nav-link text-left">Products</button>
          <button onClick={() => handleLinkClick(teamRef)} className="nav-link text-left">Team</button>
          <button onClick={() => handleLinkClick(contactRef)} className="nav-link text-left">Contact</button>
          <Link href="/" className="nav-link text-left">Home</Link>
          <Button
            onClick={() => handleLinkClick(contactRef)}
            className="bg-black hover:bg-gray-900 text-white font-semibold rounded-full px-4 py-2 w-full"
          >
            Get a Quote
          </Button>
        </div>
      )}

      {/* Desktop Get a Quote Button */}
      <div className="hidden md:flex gap-1.5 mr-10">
        <Button
          onClick={() => scrollToSection(contactRef)}
          className="bg-white hover:bg-white text-black font-semibold border-2 px-3 py-2 rounded-full w-[140px] text-center"
        >
          Get a Quote
        </Button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s, transform 0.3s;
        }
        .nav-link:hover {
          color: #eb3678ff;
          transform: scale(1.1);
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 2px;
          background: #eb3678ff;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
