"use client"
import { useEffect, useState } from "react"
import MenuOpenSVG from "./svg/MenuOpenSVG";
import CloseMenuSVG from "./svg/CloseMenuSVG";
import StickyNav from "./StickyNav";
import Logo from "./svg/Logo";
import { AnimatePresence, motion } from "framer-motion";

import '../app/globals.css'
import { usePathname } from "next/navigation";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const pathname = usePathname();
      const isHomePage = pathname === "/"

    const close = () => setIsMenuOpen(false)

      const handleToggleNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <header>
            <nav className={`${isHomePage ? "border-b-[1px] text-black/80 border-black/80" : ""} relative flex justify-between w-11/12 2xl:w-3/4 m-auto transition-all  overflow-hidden`}>
                <div className="text-base lg:text-lg p-9 uppercase">
                    <a className="hover:text-orange"
                    href='/' aria-label="Logo"><Logo width={50} className='hover:fill-white transition-all'/></a>
                </div>

                <button
                    className={`${isMenuOpen ? 'stickyNav mr-[7%] lg:mr-[5%] 2xl:mr-[3%]' : ''} md:hidden cursor-pointer p-9 rounded-full`}
                    onClick={handleToggleNavbar} aria-label="Menu">
                        {isMenuOpen ? <CloseMenuSVG width={18} fill={isMenuOpen ? '#F6F6F6' : '#151819'} /> : <MenuOpenSVG width={18} fill={isMenuOpen ? '#F6F6F6' : '#151819'} />}
                </button>

                <AnimatePresence >
                    {sticky && <motion.button className={`stickyNav flex justify-end mr-[7%] lg:mr-[5%] 2xl:mr-[3%] z-20 rounded-full`} onClick={handleToggleNavbar} aria-label="Menu"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isMenuOpen ? <CloseMenuSVG width={18} fill={sticky ? '#F6F6F6' : '#151819'}  /> : <MenuOpenSVG width={18} fill={sticky ? '#F6F6F6' : '#151819'} />}
                    </motion.button>}
                </AnimatePresence>
                
                
                {<StickyNav isOpen={isMenuOpen} close={close}/>}
                <ul className="hidden md:w-auto md:h-auto md:mb-0 md:bg-transparent md:flex md:flex-row md:justify-between gap-5 lg:gap-20  text-base lg:text-lg p-9 uppercase">
                    <li className="hover:text-orange transition-all">
                        <a href='#about'>About</a>
                    </li>
                    <li className="hover:text-orange transition-all">
                        <a href='/#experience'>Experience</a>
                    </li>
                    <li className="hover:text-orange transition-all">
                        <a href='/#projects'>Projects</a>
                    </li>
                    <li className="hover:text-orange transition-all">
                        <a href='/#contact'>Contact</a>
                    </li>
                    {/* <li>
                        <a href='/docs/DavidCalaResume.pdf' download className="hover:bg-[#c94d20] text-grey  bg-orange py-4 p-8 rounded-md transition-all">Resume</a>
                    </li>  */}
                </ul>
            </nav>
        </header>
    )
}

export default Header