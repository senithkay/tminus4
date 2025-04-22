"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const TechStackScroll = () => {
    const [position, setPosition] = useState(0);

    const techStack = [
        { name: 'React', icon: '/reactjs.svg' },
        { name: 'Nodejs', icon: '/nodejs.svg' },
        { name: 'Spring', icon: '/spring.svg' },
        { name: 'MongoDB', icon: '/mongodb.svg' },
        { name: 'IOS', icon: '/ios.svg' },
        { name: 'Express', icon: '/express.svg' },
        { name: 'Figma', icon: '/figma.svg' },
        { name: 'Nextjs', icon: '/nextjs.svg' },
        { name: 'WordPress', icon: '/wp.svg' },
        { name: 'AWS', icon: '/aws.svg' },
        { name: 'Windows', icon: '/windows.svg' },
        { name: 'Rust', icon: '/rust.svg' },
        { name: 'GO', icon: '/go.svg' },
        { name: 'Android', icon: '/android.svg' },
        { name: 'Flutter', icon: '/flutter.svg' },
        { name: 'Laravel', icon: '/laravel.svg' },
        { name: 'Javascript', icon: '/js.svg' },
        { name: 'TypeScript', icon: '/ts.svg' },
        { name: 'TailwindCSS', icon: '/tailwind.svg' },
    ];

    const duplicatedStack = [...techStack, ...techStack];

    useEffect(() => {
        const animate = () => {
            setPosition((prevPosition) => {
                if (prevPosition <= -50 * techStack.length) {
                    return 0;
                }
                return prevPosition - 0.5;
            });
        };

        const animationFrame = setInterval(animate, 30);
        return () => clearInterval(animationFrame);
    }, [techStack.length]);

    return (
        <div className="w-full overflow-hidden bg-transparent py-6 sm:py-8">
            <div
                className="flex items-center gap-6 sm:gap-10 whitespace-nowrap"
                style={{
                    transform: `translateX(${position}px)`,
                    transition: 'transform 0.03s linear'
                }}
            >
                {duplicatedStack.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px] px-2 sm:px-4"
                    >
                        <Image
                            width={60}
                            height={60}
                            className="sm:w-[80px] sm:h-[80px] object-contain"
                            src={tech.icon}
                            alt={tech.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackScroll;
