"use client"

import { useState, useEffect } from "react"
import DynamicFrameLayout from "./DynamicFrameLayout"
import Image from "next/image"
import Link from "next/link"

const TypewriterLine: React.FC<{ text: string; speed?: number }> = ({ text, speed = 30 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;

        const typeCharacter = () => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text.charAt(index));
                index++;
                setTimeout(typeCharacter, speed);
            }
        };

        typeCharacter();

        return () => {
            // Cleanup: stop typing if component unmounts
            index = text.length;
        };
    }, [text, speed]);

    return <p className="max-w-[600px] text-gray-400 text-lg text-justify whitespace-pre-wrap">{displayedText}</p>;
};

export default function AboutNew() {
    const [headerSize] = useState(1.2);
    const [textSize] = useState(0.8);

    const paragraphLines = [
        `Transforming design into clean, efficient code is at the heart of what we do. Our approach bridges creativity and functionality, ensuring that every design element is seamlessly brought to life with pixel-perfect accuracy. From user interface concepts to fully responsive web solutions, we turn your vision into a digital reality with the latest development technologies.`
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-8">
            <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
                {/* Left Content */}
                <div className="w-full md:w-[460px] flex-shrink-0 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <h1
                            className="text-center text-4xl font-light italic md:text-5xl lg:text-6xl  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 animate-texttracking-tighter  leading-[130%]"
                            style={{ fontSize: `${4 * headerSize}rem` }}
                        >
                            About
                            <br />
                            T - 4
                        </h1>
                        <div
                            className="flex flex-col gap-12 text-white/50 text-sm font-light max-w-[560px]"
                            style={{ fontSize: `${0.875 * textSize}rem` }}
                        >
                            <div className="space-y-5">
                                <div className="h-px bg-white/10 w-full" />
                                {paragraphLines.map((line, index) => (
                                    <TypewriterLine key={index} text={line} speed={10} />
                                ))}
                                <div className="h-px bg-white/10 w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
                    <DynamicFrameLayout />
                </div>
            </div>
        </div>
    );
}
