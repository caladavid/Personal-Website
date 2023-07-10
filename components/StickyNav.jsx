"use client"
import React, { useEffect, } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import '../app/globals.css'

const StickyNav = ({ isOpen }) => {
    useEffect(() => {
        const handleBodyScroll = () => {
          document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
        };
    
        handleBodyScroll();
    
        if (isOpen) {
          window.addEventListener('scroll', handleBodyScroll);
        } else {
          window.removeEventListener('scroll', handleBodyScroll);
        }
    
        return () => {
          window.removeEventListener('scroll', handleBodyScroll);
        };
      }, [isOpen]);

  return (
    <AnimatePresence>
        {isOpen  && (
            <motion.ul className={` ${isOpen ? 'fixed' : 'hidden'} flex flex-col justify-center text-center gap-12 bg-[#1e1e1e] top-0 right-0 h-screen w-screen sm:w-3/4  md:w-2/4 lg:w-2/5 xl:w-4/12 2xl:w-1/4 z-[23]`}
                initial={{ opacity: 0,right: '-100%' }}
                animate={{ opacity: 1,right: 0 }}
                exit={{ opacity: 0,right: '-100%' }}
                >
                <li>
                    <a href='#about' className= "md:text-xl text-white hover:text-orange transition-all">About</a>
                </li>
                <li>
                    <a href='#projects' className= "md:text-xl text-white hover:text-orange transition-all">Projects</a>
                </li>
                <li>
                    <a href='#contact' className= "md:text-xl text-white hover:text-orange transition-all">Contact</a>
                </li>
                <li>
                    <a href='/docs/DavidCalaResume.pdf' download className="hover:bg-orange  md:text-xl text-white border-2 border-orange hover:transition-all py-4 p-8 rounded-md" >Resume</a>
                </li>
            </motion.ul>
        )}
    </AnimatePresence>
  )
}

export default StickyNav