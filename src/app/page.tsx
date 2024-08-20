'use client';
import React, {useEffect, useRef, useState} from "react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {WhyUs} from "@/components/why-us";
import {CustomerReviews} from "@/components/customer-reviews";
import {OurTeam} from "@/components/our-team";
import {ContactUs} from "@/components/contact-us";
import {Footer} from "@/components/footer";
import {AboutUs} from "@/components/about-us";
import {PrebuildProducts} from "@/components/prebuild-products";
import Link from "next/link";
import {Button} from "@mui/material";
import Navbar from "@/app/components/navbar";

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollCanvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [scrollCanvasSize, setScrollCanvasSize] = useState({ width: 0, height: 0 });
    const [mouse, setMouse] = useState<Mouse>({x:0,y:0});
    const [pageOffset, setPageOffset] = useState(0);

    const handleResize = () => {
        setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        setScrollCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (event: MouseEvent)=>{
        setMouse({x:event.x,y:event.y});
    }


    useEffect(() => {
        const handleCanvasScroll = (event:WheelEvent) => {
            if (event.deltaY>0) {
                setPageOffset(pageOffset + 100)
            }
            else{
                setPageOffset(pageOffset - 100)
            }
        }

        if (pageOffset<0){
            setPageOffset(0)
        }
        if (pageOffset>100){
            setPageOffset(100)
        }

        const scrollCanvas = scrollCanvasRef.current;
        if (!scrollCanvas || !scrollCanvas.parentElement) return;
        scrollCanvas.width = scrollCanvasSize.width;
        scrollCanvas.height = scrollCanvas.parentElement.offsetHeight;
        const context = scrollCanvas.getContext('2d');
        if (!context) return;

        // //draw scrollbar
        // const height = 200+ pageOffset;
        // const scrollBar = new ScrollBar(height,scrollCanvas,context)
        // scrollBar.animate();

        window.addEventListener('wheel', handleCanvasScroll);

        return () => {
            window.removeEventListener('wheel', handleCanvasScroll);
        }


    }, [pageOffset, scrollCanvasSize.width]);
    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas || !canvas.parentElement) return;
        canvas.width = canvasSize.width;
        canvas.height = canvas.parentElement.offsetHeight;
        const context = canvas.getContext('2d');
        if (!context) return;

        const ball1 = new Ball((canvas.width/3), 0, 0, 'rgba(235, 54, 120, 1)', 'rgba(235, 54, 120, 0)', context, canvas, mouse);
        const ball2 = new Ball((canvas.width/3), canvas.width,canvas.height, 'rgba(79, 23, 135, 1)', 'rgba(79, 23, 135, 0)', context,canvas, mouse);
        animate()


        function animate() {
            if (canvas && context){
                context.clearRect(0, 0, canvas.width, canvas.height);
                ball1.animate();
                ball2.animate();

                requestAnimationFrame(animate);
            }
        }


        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        }
    }, [canvasSize.height, canvasSize.width, mouse]);



    useEffect(() => {
        setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        setScrollCanvasSize({ width: window.innerWidth, height: window.innerHeight })
    }, []);
  return (
     <>
         <Navbar />
         <main>
             <div className={'w-full h-screen relative '}>
                 <div
                     className={`bg-black bg-transparent absolute w-full flex justify-center items-center h-[200vh] transition-transform duration-1000 `}>
                     <div className={'h-[100vh] absolute top-0 w-full flex flex-col justify-center items-center gap-2.5'}>
                         <h1 className={`text-gray-400 text-6xl font-bold text-center  transition-opacity duration-[1000] ease-linear`}>Unlock
                             Your Digital Potential</h1>
                         <p className="text-gray-400 max-w-[800px] text-center text-lg">
                             Our software solutions empower businesses to innovate, scale, and thrive in the digital age.
                             Experience
                             seamless integration, data-driven insights, and unparalleled performance.
                         </p>

                         <div className={'flex gap-2.5'}>
                             <Button variant={'contained'} sx={{backgroundColor: '#9CA3AF', color:'black'}} href={'quote'} className={'border-gray-400 border-2 px-3 py-2 rounded-lg w-[140px] text-center '}>Get Started</Button>
                             <Button variant={'outlined'} sx={{color:'#9CA3AF'}} href={'quote'} className={'border-gray-400 border-2 px-3 py-2 rounded-lg w-[140px] text-center '}>Get Started</Button>
                         </div>
                     </div>

                     <div
                         className={'min-h-[100vh] absolute top-[100vh] w-full flex flex-col justify-center items-center py-[50px] gap-[100px]  bg-white'}>

                         <div className={'flex flex-col gap-[30px]'}>
                             <AboutUs/>
                         </div>
                         <div className={'flex flex-col gap-[30px]'}>
                             <h1 className={` text-6xl font-bold text-center  transition-opacity duration-[1000] ease-linear`}>
                                 Our Services
                             </h1>
                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                 <div
                                     className={'w-[300px] hover:scale-[1.03] transition-all duration-500 h-[260px] rounded-[20px] card-shadow-primary-pink  p-[20px] flex flex-col gap-[20px] justify-center'}>
                                     <SettingsSuggestIcon className={'text-6xl'}/>
                                     <h3 className={'text-2xl'}> Custom Solutions</h3>
                                     <p className={''}>Our team of experienced developers can create custom
                                         software
                                         solutions tailored
                                         to your specific requirements.</p>
                                 </div>
                                 <div
                                     className={'w-[300px] hover:scale-[1.03] transition-all duration-500 h-[260px] rounded-[20px] card-shadow-primary-purple  p-[20px] flex flex-col gap-[20px] justify-center'}>
                                     <SettingsSuggestIcon className={'text-6xl'}/>
                                     <h3 className={'text-2xl'}> Custom Solutions</h3>
                                     <p className={''}>Our team of experienced developers can create custom
                                         software
                                         solutions tailored
                                         to your specific requirements.</p>
                                 </div>
                                 <div
                                     className={'w-[300px] hover:scale-[1.03] transition-all duration-500 h-[260px] rounded-[20px] card-shadow-primary-pink  p-[20px] flex flex-col gap-[20px] justify-center'}>
                                     <SettingsSuggestIcon className={'text-6xl'}/>
                                     <h3 className={'text-2xl'}> Custom Solutions</h3>
                                     <p className={''}>Our team of experienced developers can create custom
                                         software
                                         solutions tailored
                                         to your specific requirements.</p>
                                 </div>
                                 <div
                                     className={'w-[300px] hover:scale-[1.03] transition-all duration-500 h-[260px] rounded-[20px] card-shadow-primary-purple p-[20px] flex flex-col gap-[20px] justify-center'}>
                                     <SettingsSuggestIcon className={'text-6xl'}/>
                                     <h3 className={'text-2xl'}> Custom Solutions</h3>
                                     <p className={''}>Our team of experienced developers can create custom
                                         software
                                         solutions tailored
                                         to your specific requirements.</p>
                                 </div>
                             </div>
                         </div>

                         <div className={'flex flex-col gap-[30px]'}>
                             <WhyUs/>
                         </div>

                         <div className={'flex flex-col gap-[30px] '}>
                             <CustomerReviews/>
                         </div>

                         <div className={'flex flex-col gap-[30px]'}>
                             <PrebuildProducts/>
                         </div>

                         <div className={'flex flex-col gap-[30px]'}>
                             <OurTeam/>
                         </div>

                         <div
                             className={'flex flex-col gap-[30px] bg-gradient-to-r from-black  via-[#4F1787FF] to-[#EB3678FF] w-full justify-center items-center md:px-[100px]'}>
                             <ContactUs/>
                         </div>

                         <div className={'flex flex-col gap-[30px]'}>
                             <Footer/>
                         </div>
                     </div>


                     <div
                         className={'min-h-[100vh] absolute top-[200vh] w-full flex flex-col justify-center items-center gap-[50px] py-[100px] px-[50px]'}>

                     </div>
                 </div>
                 <canvas ref={canvasRef} className={'bg-black'}></canvas>
                 <canvas ref={scrollCanvasRef} className={'bg-transparent absolute z-[1002] top-0'}></canvas>

             </div>
         </main>
     </>
  );
}

interface Mouse {
    x: number;
    y: number
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

    constructor(radius: number, x: number, y: number, startColor: string, endColor: string, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, mouse: Mouse) {
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
        const gradient = this.context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
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
            this.dx *= -1
        }
        if (this.y <= 0 || this.y >= this.canvas.height) {
            this.dy *= -1
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

    constructor(length: number, scrollCanvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.length = length;
        this.scrollCanvas = scrollCanvas;
        this.context = context;
        this.x = scrollCanvas.width - 50;
        this.y = 200;
    }

    private draw() {
        this.context.beginPath();
        const lineGradient = this.context.createLinearGradient(this.x, 100, this.x, this.y);
        lineGradient.addColorStop(0, 'rgba(79, 23, 135, 1)');
        lineGradient.addColorStop(1, 'rgba(235, 54, 120, 1)');
        this.context.strokeStyle = lineGradient;
        this.context.lineWidth = 3;
        this.context.moveTo(this.x, 100);
        this.context.lineTo(this.x, this.y);
        this.context.stroke();
    }

    animate(){
        this.context.clearRect(0,0, this.scrollCanvas.width, this.scrollCanvas.height);
        if (this.y<this.length){
            this.y+=10;
        }
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }


}
