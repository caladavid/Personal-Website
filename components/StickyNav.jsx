"use client"
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import '../app/globals.css'

const StickyNav = ({ isOpen, close }) => {

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
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-[24]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.ul className={` ${isOpen ? 'fixed' : 'hidden'} flex flex-col justify-center text-center gap-12 bg-[#1e1e1e] top-0 right-0 h-screen w-screen sm:w-3/4  md:w-2/4 lg:w-2/5 xl:w-4/12 2xl:w-1/4 z-[25]`}
            initial={{ opacity: 0, right: '-100%' }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, right: '-100%' }}
          >
            <li>
              <a href='#about' className="md:text-xl text-white hover:text-orange transition-all" onClick={() => close()}>About</a>
            </li>
            <li>
              <a href='#experience' className="md:text-xl text-white hover:text-orange transition-all" onClick={() => close()}>My experiences</a>
            </li>
            <li>
              <a href='#projects' className="md:text-xl text-white hover:text-orange transition-all" onClick={() => close()}>Projects</a>
            </li>
            <li>
              <a href='#contact' className="md:text-xl text-white hover:text-orange transition-all" onClick={() => close()}>Contact</a>
            </li>
            {/* <li>
              <a href='/docs/DavidCalaResume.pdf' download className="hover:bg-orange  md:text-xl text-white border-2 border-orange hover:transition-all py-4 p-8 rounded-md">Resume</a>
            </li> */}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyNav