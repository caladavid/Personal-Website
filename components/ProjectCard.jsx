"use client"

import React, { useState } from 'react'
import Image from "next/image"
import GithubSVG from './svg/GithubSVG';
import WebLink from './svg/WebLink';
import { AnimatePresence, motion } from 'framer-motion';


const ProjectCard = ({ title, number, info, src, githubLink, webLink, desc }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded)
  };

  return (
    
        <div className={`w-full ${expanded ? 'bg-[#212425] rounded-3xl ' : 'border-b-[1px]'} transition-all cursor-pointer py-6 px-4  md:p-12 lg:p-16 border-grey/80`}
          onClick={handleToggle}>
          <div className='flex w-full justify-between uppercase '>
            <div className='hidden sm:block mt-4 pr-4 sm:pr-8 md:pr-10 lg:pr-16 xl:pr-20 text-orange min-w-min'>
              <span className='text-xl lg:text-2xl font-semibold'>{number}</span>
            </div>
            <div className='w-full sm:w-3/5 md:w-[60%] min-[1060px]:w-3/4 flex flex-col'>
              <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold row-start-1 col-span-2 mb-4'>{title}</p>
              <span className='flex gap-3 mb-2'>
                {info.map((item, index) => (
                  <p key={index} className='row-start-2 text-sm md:text-lg'>{item}</p>
                ))}
              </span>
              <span className='flex gap-4'>
                {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><GithubSVG width={20} className="hover:fill-orange transition-all" /></a>}
                {webLink && <a href={webLink} target="_blank" rel="noreferrer"><WebLink width={20} className="hover:fill-orange transition-all" /></a>}
              </span>
            </div>
            <div className='hidden min-[350px]:block text-right '>

              <button className='font-semibold text-sm md:text-lg '>
                {expanded ? "VIEW LESS" : "VIEW MORE"}
              </button>
            </div>
          </div>
          <AnimatePresence>
          {expanded && (
            <motion.div 
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]  }} >
              <Image
                src={src}
                alt={title}
                className="w-full h-auto object-cover 2xl:max-h-[610px] rounded-[2.8rem] md:rounded-[5rem] py-8"
              />
              <p>{desc}</p>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
  )
}

export default ProjectCard