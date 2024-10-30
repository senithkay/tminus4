"use client";
import React, { JSX, SVGProps, useEffect, useRef, useState } from "react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { WhyUs } from "@/components/why-us";
import { CustomerReviews } from "@/components/customer-reviews";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { AboutUs } from "@/components/about-us";
import { PrebuildProducts } from "@/components/prebuild-products";
import Link from "next/link";
import { Button } from "@mui/material";
import Navbar from "@/app/components/navbar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ConstructionIcon from "@mui/icons-material/Construction";
import SupportIcon from "@mui/icons-material/Support";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Finger_Paint } from "next/font/google";
import OurTeam from "@/components/our-team";

import JavascriptIcon from "@mui/icons-material/Javascript";
import Image from "next/image";

const finger = Finger_Paint({
  weight: "400",
  subsets: ["latin"],
});
const logoText = [
  "T: -00:04",
  "T: -00:03",
  "T: -00:02",
  "T: -00:01",
  "T: -00:00",
  "Lift Off!!",
];

function scrollToSection(elementRef: any) {
  elementRef.current.scrollIntoView({ behavior: "smooth" });
}
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollCanvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [scrollCanvasSize, setScrollCanvasSize] = useState({
    width: 0,
    height: 0,
  });
  const [mouse, setMouse] = useState<Mouse>({ x: 0, y: 0 });
  const [pageOffset, setPageOffset] = useState(0);
  const [logoTextIndex, setLogoTextIndex] = React.useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogoTextIndex((logoTextIndex + 1) % 6);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [logoTextIndex]);

  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    setScrollCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    setMouse({ x: event.x, y: event.y });
  };

  useEffect(() => {
    const handleCanvasScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setPageOffset(pageOffset + 100);
      } else {
        setPageOffset(pageOffset - 100);
      }
    };

    if (pageOffset < 0) {
      setPageOffset(0);
    }
    if (pageOffset > 100) {
      setPageOffset(100);
    }

    const scrollCanvas = scrollCanvasRef.current;
    if (!scrollCanvas || !scrollCanvas.parentElement) return;
    scrollCanvas.width = scrollCanvasSize.width;
    scrollCanvas.height = scrollCanvas.parentElement.offsetHeight;
    const context = scrollCanvas.getContext("2d");
    if (!context) return;

    // //draw scrollbar
    // const height = 200+ pageOffset;
    // const scrollBar = new ScrollBar(height,scrollCanvas,context)
    // scrollBar.animate();

    window.addEventListener("wheel", handleCanvasScroll);

    return () => {
      window.removeEventListener("wheel", handleCanvasScroll);
    };
  }, [pageOffset, scrollCanvasSize.width]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    canvas.width = canvasSize.width;
    canvas.height = canvas.parentElement.offsetHeight;
    const context = canvas.getContext("2d");
    if (!context) return;

    const ball1 = new Ball(
      canvas.width / 3,
      0,
      0,
      "rgba(235, 54, 120, 1)",
      "rgba(235, 54, 120, 0)",
      context,
      canvas,
      mouse
    );
    const ball2 = new Ball(
      canvas.width / 3,
      canvas.width,
      canvas.height,
      "rgba(79, 23, 135, 1)",
      "rgba(79, 23, 135, 0)",
      context,
      canvas,
      mouse
    );
    animate();

    function animate() {
      if (canvas && context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ball1.animate();
        ball2.animate();

        requestAnimationFrame(animate);
      }
    }

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasSize.height, canvasSize.width, mouse]);

  useEffect(() => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    setScrollCanvasSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />
      <main>
        <div className={"w-full h-screen relative "}>
          <div
            className={`bg-black bg-transparent absolute w-full flex justify-center items-center h-[200vh] transition-transform duration-1000 `}
          >
            <div
              className={
                "h-[100vh] absolute top-0 w-full flex flex-col justify-center items-center gap-2.5"
              }
            >
              <h1
                className={`text-gray-400 text-6xl font-bold text-center  transition-opacity duration-[1000] ease-linear`}
              >
                Unlock Your Digital Potential
              </h1>
              <p className="text-gray-400 max-w-[800px] text-center text-lg">
                Our software solutions empower businesses to innovate, scale,
                and thrive in the digital age. Experience seamless integration,
                data-driven insights, and unparalleled performance.
              </p>

              <div
                className={
                  " gap-2.5 text-gray-500 flex flex-col justify-center items-center absolute top-[85vh]"
                }
              >
                <p className={"text-gray-500"}>Scroll down to get started</p>
                <ArrowCircleDownIcon fontSize={"large"} />
              </div>
            </div>

            <div
              className={
                "min-h-[100vh] absolute top-[100vh] w-full flex flex-col justify-center items-center   bg-white"
              }
            >
              <div ref={aboutUsRef} className={"flex flex-col gap-[30px]"}>
                <AboutUs />
              </div>
              {/* <div ref={servicesRef} className={"flex flex-col gap-[30px]"}>
                <h1
                  className={` text-6xl font-bold text-center  transition-opacity duration-[1000] ease-linear`}
                >
                  Our Services
                </h1>
              </div> */}
              <div ref={productsRef} className={"flex flex-col gap-[30px]"}>
                <PrebuildProducts />
              </div>

              <div className={"flex flex-col gap-[30px]"}>
                <WhyUs />
              </div>

              <div className={"flex flex-col gap-[30px] "}>
                <CustomerReviews />
              </div>

              <div ref={teamRef} className={"flex flex-col gap-[30px]"}>
                <OurTeam />
              </div>

              <div
                ref={contactRef}
                className={
                  "flex flex-col gap-[30px] bg-gradient-to-r from-black  via-[#4F1787FF] to-[#EB3678FF] w-full justify-center items-center md:px-[100px]"
                }
              >
                <ContactUs />
              </div>

              <div className={"flex flex-col gap-[30px] bg-gradient-to-br from-gray-600 to-gray-900 w-full justify-center items-center" }>
                <footer className="bg-muted py-12 md:py-16 w-full  flex justify-center items-center ">
                  <div className="container max-w-7xl flex flex-col  items-center justify-between gap-6 text-sm">
                    <div className="flex flex-col items-center gap-6">
                      <div
                        className={
                          "flex flex-col items-center justify-center text-white gap-2.5"
                        }
                      >
                        <div className={"flex"}>
                          {" "}
                          <Link href="#" prefetch={false}>
                            <RocketLaunchIcon
                              sx={{ marginX: "10px", fontSize: "60px" }}
                            />
                          </Link>
                          <h3 className="text-6xl font-bold">
                            <span className={finger.className}>T - 4</span>
                          </h3>
                        </div>
                        <p className="text-white">
                          &copy; 2024 Tminus4. All rights reserved.
                        </p>
                      </div>
                    </div>
                    <nav className="flex items-center gap-4 md:gap-6 text-white">
                      <ul className={"  gap-20 md:flex"}>
                        <li>
                          <button
                            onClick={() => scrollToSection(servicesRef)}
                            className={
                              "hover:text-[#EB3678FF] text-lg font-bold"
                            }
                          >
                            Services
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => scrollToSection(productsRef)}
                            className={
                              "hover:text-[#EB3678FF] text-lg font-bold"
                            }
                          >
                            Products
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => scrollToSection(teamRef)}
                            className={
                              "hover:text-[#EB3678FF] text-lg font-bold"
                            }
                          >
                            Team
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => scrollToSection(contactRef)}
                            className={
                              "hover:text-[#EB3678FF] text-lg font-bold"
                            }
                          >
                            Contact
                          </button>
                        </li>
                      </ul>
                    </nav>
                    <div className="flex items-center gap-4 md:gap-6">
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                      >
                        <MailIcon className="w-5 h-5 " />
                        <span className="text-gray-300">tivitytest101@gmail.com</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span className=" text-gray-300">+94 (76) 8510403</span>
                      </a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>

            <div
              className={
                "min-h-[100vh] absolute top-[200vh] w-full flex flex-col justify-center items-center gap-[50px] py-[100px] px-[50px]"
              }
            ></div>
          </div>
          <canvas ref={canvasRef} className={"bg-black"}></canvas>
          <canvas
            ref={scrollCanvasRef}
            className={"bg-transparent absolute z-[1002] top-0"}
          ></canvas>
        </div>
      </main>
    </>
  );
}

interface Mouse {
  x: number;
  y: number;
}

class Ball {
  private readonly radius: number;
  private x: number;
  private y: number;
  private readonly startColor: string;
  private readonly endColor: string;
  private context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private dx: number;
  private dy: number;
  private mouse: Mouse;

  constructor(
    radius: number,
    x: number,
    y: number,
    startColor: string,
    endColor: string,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    mouse: Mouse
  ) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.startColor = startColor;
    this.endColor = endColor;
    this.context = context;
    this.canvas = canvas;
    this.dx = Math.random() < 0.5 ? -1 : 1;
    this.dy = Math.random() < 0.5 ? -1 : 1;
    this.mouse = mouse;
  }

  // private getDistanceToMouse() {
  //     const dx = this.mouse.x-this.x;
  //     const dy = this.mouse.y-this.y;
  //     return Math.sqrt(dx*dx + dy*dy);
  // }

  private draw() {
    // if (this.getDistanceToMouse()>this.radius){
    //     this.x = this.mouse.x;
    // }
    const gradient = this.context.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    gradient.addColorStop(0, this.startColor);
    gradient.addColorStop(1, this.endColor);

    this.context.fillStyle = gradient;

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.fill();
  }

  animate() {
    this.draw();
    this.updatePosition();
    if (this.x <= 0 || this.x >= this.canvas.width) {
      this.dx *= -1;
    }
    if (this.y <= 0 || this.y >= this.canvas.height) {
      this.dy *= -1;
    }
  }

  private updatePosition() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

class ScrollBar {
  private readonly length: number;
  private scrollCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private readonly x: number;
  private y: number;

  constructor(
    length: number,
    scrollCanvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) {
    this.length = length;
    this.scrollCanvas = scrollCanvas;
    this.context = context;
    this.x = scrollCanvas.width - 50;
    this.y = 200;
  }

  private draw() {
    this.context.beginPath();
    const lineGradient = this.context.createLinearGradient(
      this.x,
      100,
      this.x,
      this.y
    );
    lineGradient.addColorStop(0, "rgba(79, 23, 135, 1)");
    lineGradient.addColorStop(1, "rgba(235, 54, 120, 1)");
    this.context.strokeStyle = lineGradient;
    this.context.lineWidth = 3;
    this.context.moveTo(this.x, 100);
    this.context.lineTo(this.x, this.y);
    this.context.stroke();
  }

  animate() {
    this.context.clearRect(
      0,
      0,
      this.scrollCanvas.width,
      this.scrollCanvas.height
    );
    if (this.y < this.length) {
      this.y += 10;
    }
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
