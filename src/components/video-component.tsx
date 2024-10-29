'use client';

import React from 'react';

const DarkAutoplayVideo = () => {
    return (
        <div className="relative w-full mx-auto">
            <div className="relative bg-black overflow-hidden">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className={'absolute z-[11] text-white flex flex-col justify-center items-center w-full h-full'}>
                    <h2 className={'text-8xl  mx-auto text-gray-400'}>About T-4</h2>
                    <p className={'max-w-[600px] text-gray-400 text-2xl text-justify'}>
                        {`Our vision is to empower businesses with cutting-edge software solutions that drive innovation and success. We are committed to delivering exceptional products and services that exceed our customers' expectations.`}

                        <br /><br />{`Our mission is to be the trusted partner of choice for organizations seeking to transform their operations and unlock new opportunities through the power of technology.`}</p>
                </div>

                <video
                    className="w-full h-screen object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={'/videos/black_hole.mp4'} type="video/mp4" />
                    {` Your browser does not support the video.`}
                </video>
            </div>
        </div>
    );
};

export default DarkAutoplayVideo;