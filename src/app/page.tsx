"use client";
import React, {  useEffect, useRef, useState } from "react";
import { WhyUs } from "@/components/why-us";
import { ContactUs } from "@/components/contact-us";
import { AboutUs } from "@/components/about-us";
import { PrebuildProducts } from "@/components/prebuild-products";
import Navbar from "@/components/navbar";
import OurTeam from "@/components/our-team";
import 'aos/dist/aos.css';
import BackgroundPaths from "@/components/BackgroundPaths";
import AboutNew from "@/components/about-new";
import WorkProcess from "@/components/WorkProcess";
import ClientReviews from "@/components/ClientReviews";



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
    <div className="w-full relative overflow-x-hidden">
      
    <Navbar
        scrollToSection={scrollToSection}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        teamRef={teamRef}
        contactRef={contactRef}
      />

    </div>
    
      <main className="  ">
        <div className={"w-full h-screen relative   "}>
          <div className="">
            <BackgroundPaths />
          </div>

          <div ref={aboutUsRef} className=" w-full z-[1001] flex flex-col justify-center items-center gap-4">
            <AboutNew />
          </div>


         
            <div className={"flex w-full flex-col gap-[30px]"}>
              <AboutUs />
            </div>

            <div ref={productsRef} className={"flex flex-col gap-[30px]"}>
              <PrebuildProducts />
            </div>

            <div className={"flex flex-col gap-[30px]"}>
              <WhyUs />
            </div>
            <div className={"flex flex-col w-full "}>
              <WorkProcess />
            </div>

            <div className={"flex flex-col w-full "}>
              {/* <CustomerReviews /> */}
              <ClientReviews />
            </div>

            <div ref={teamRef} className={"w-full b"}>
              <OurTeam />
            </div>

            <div
              ref={contactRef}
              className={
                "flex flex-col gap-[30px] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 w-full justify-center items-center md:px-[100px]"
              }
            >
              <ContactUs />
            </div>

          <div
            className={
              "min-h-[100vh] absolute top-[200vh] w-full flex flex-col justify-center items-center gap-[50px] py-[100px] px-[50px]"
            }
          ></div>

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


