'use client';
import React, {useEffect} from "react";
import {Finger_Paint} from 'next/font/google';
import Link from 'next/link';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';

const finger = Finger_Paint({
    weight: '400',
    subsets: ['latin'],
})

const logoText = ['T: -00:04', 'T: -00:03', 'T: -00:02', 'T: -00:01', 'T: -00:00', 'Lift Off!!'];

const Navbar = () => {
    const [logoTextIndex, setLogoTextIndex] = React.useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setLogoTextIndex((logoTextIndex + 1)%6);
        }, 1000)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [logoTextIndex]);
    return (<nav className={'absolute z-[1003] flex justify-between w-full h-[50px] items-center text-gray-400 px-[20px] overflow-x-hidden'}>
        <h1 className={finger.className + ' w-[200px] cursor-pointer' }><RocketLaunchIcon sx={{marginX:'10px'}}/><span className={`${logoTextIndex===5?'text-lg': 'text-xl'}`}>{logoText[logoTextIndex]}</span></h1>
        <ul className={'hidden  gap-2.5 md:flex'}>
            <li><Link href={'/'} className={'hover:text-[#EB3678FF]'}>Home</Link></li>
            <li><Link href={'/services'} className={'hover:text-[#EB3678FF]'}>Services</Link></li>
            <li><Link href={'/team'} className={'hover:text-[#EB3678FF]'}>Team</Link></li>
            <li><Link href={'/features'} className={'hover:text-[#EB3678FF]'}>Features</Link></li>
            <li><Link href={'/contact'} className={'hover:text-[#EB3678FF]'}>Contact</Link></li>
            <li><Link href={'/about'} className={'hover:text-[#EB3678FF]'}>About</Link></li>

        </ul>
        <div className={'flex gap-1.5 justify-center items-center'}>
            <Link href={'quote'} className={'border-gray-400 border-2 px-3 py-1 rounded-lg w-[120px] text-center'}>Get a Quote</Link>
            <MenuIcon className={'md:hidden'}/>
        </div>
    </nav>)
}

export default Navbar;