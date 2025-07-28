"use client"

import React, { useState } from 'react'
import Image from "next/image"
import GithubSVG from './svg/GithubSVG';
import WebLink from './svg/WebLink';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';


const ProjectCard = ({ title, number, info = false, src, githubLink, webLink, desc = false }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded)
  };

  const titleFixed = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div>
      <Link href={`/projects/${titleFixed}`} className={`w-full ${expanded ? 'bg-[#212425] rounded-3xl ' : 'border-b-[1px] '}hover:bg-[#212425] hidden md:block transition-all cursor-pointer py-6 px-4  md:p-12 lg:p-16 border-grey/80`}>
        {/* <div className={`w-full ${expanded ? 'bg-[#212425] rounded-3xl ' : 'border-b-[1px] hover:bg-[#212425]'} hidden md:block transition-all cursor-pointer py-6 px-4  md:p-12 lg:p-16 border-grey/80`}
        onClick={handleToggle}> */}
        <div className='flex w-full justify-between uppercase '>
          <div className='hidden sm:block mt-4 pr-4 sm:pr-8 md:pr-10 lg:pr-16 xl:pr-20 text-orange min-w-min'>
            <span className='text-xl lg:text-2xl font-semibold'>{number}</span>
          </div>
          <div className='w-full sm:w-3/5 md:w-[60%] min-[1060px]:w-3/4 flex flex-col'>
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold row-start-1 col-span-2 mb-4'>{title}</p>
            <span className='flex gap-3 mb-2'>
              {/* <p className='normal-case text-base py-2'>{desc}</p> */}
              {info && info.map((item, index) => (
                <p key={index} className=' row-start-2 text-sm md:text-lg'>{item}</p>
              ))}
            </span>
            <span className='flex gap-4'>
              {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" aria-label='Github Link'><GithubSVG width={25} className="hover:fill-orange transition-all" /></a>}
              {webLink && <a href={webLink} target="_blank" rel="noreferrer" aria-label='Website Link'><WebLink width={25} className="hover:fill-orange transition-all" /></a>}
              {/* <Link href={`/projects/${titleFixed}`}>More</Link> */}
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
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }} >
              <Image
                src={src}
                alt={title}
                className="w-full h-auto object-cover 2xl:max-h-[610px] py-8"
              />
              <p>{desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* </div> */}
      </Link>


      <div className='md:hidden relative bg-[#212425] hover:bg-[#363a3b] p-6'>
        <Image
          src={src}
          alt={title}
          className="w-full h-auto object-cover 2xl:max-h-[610px]"
        />

        <a href={`/projects/${titleFixed}`} className='flex w-full flex-col py-4'>
          <span  aria-label='Website Link' className='text-orange uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold row-start-1 col-span-2 mb-4 after:absolute after:z-0 after:top-0 after:left-0  after:w-full after:h-full'>{title}</span>
          <div className='w-full flex flex-col'>
            <p className='py-4 z-[2]'>{desc}</p>
            <span className='flex gap-3 mb-2 capiz pt-4 z-[2]'>
              {info && info.map((item, index) => (
                <p key={index} className='hidden md:block row-start-2 text-sm md:text-lg '>{item}</p>
              ))}
            </span>
            <span className='w-max flex gap-4 pt-2 z-[2]'>
              {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" aria-label='Github Link'><GithubSVG width={25} className="hover:fill-orange transition-all" /></a>}
              {webLink && <a href={webLink} target="_blank" rel="noreferrer" aria-label='Website Link'><WebLink width={25} className="hover:fill-orange transition-all" /></a>}
            </span>
          </div>
        </a>
      </div>
    </div >
  )
}

export default ProjectCard