import React from 'react'
import ProjectCard from './ProjectCard'
import ArsertijoPortfolio from "../public/images/Arsertijo-website.png"
import MP3Vault from "../public/images/MP3Vault.png"
import CleanerGDC from "../public/images/CleanerGDC.png"
import Astralea from "../public/images/astralea.png"

import '../app/globals.css'

const Projects = () => {
    return (
        <section id='projects' className='bg-black text-grey z-10 relative '>
            <div className="noiseBlack"></div>
            <div className='w-11/12 pb-20 mx-auto px-5 md:px-10 2xl:w-3/4'>
                <h1 className="break-words font-semibold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl py-20">Projects</h1>
                <div className='flex flex-col gap-10'>
                <ProjectCard 
                        number="01"
                        title="Astralea"
                        info={['Next JS', 'Tailwind CSS', 'Jikan API']}
                        src={Astralea}
                        desc="Astralea is an intuitive platform that offers users a unique experience when exploring a wide variety of anime series. The platform keeps users up-to-date with the latest releases and allows them to dive into popular trends with just a few clicks. Astralea provides detailed information about each series, from synopses to the number of episodes."
                        githubLink='https://github.com/caladavid/astralea'
                        webLink='https://astralea.vercel.app/'
                    />

                    <ProjectCard 
                        number="02"
                        title="Arsertijo's portfolio"
                        info={['React', 'Tailwind CSS']}
                        src={ArsertijoPortfolio}
                        desc="Discover the impressive web portfolio tailored for Arsertijo Artz. Dive into a collection of their finest work, showcasing their unique design style, creative talent, and passion for crafting visually captivating experiences"
                        githubLink='https://github.com/caladavid/arsertijo'
                        webLink='https://arsertijo.netlify.app/'
                    />

                    <ProjectCard 
                        number="03"
                        title='MP3Vault'
                        info={['Python', 'Pytube']}
                        src={MP3Vault}
                        githubLink='https://github.com/caladavid/MP3Vault.git'
                        desc="MP3Vault is a desktop application that enables you to effortlessly download music from YouTube and convert it to MP3 format. With this user-friendly app, you can access your favorite songs and build your personal offline music library in a breeze."
                    />

                    <ProjectCard 
                        number="04"
                        title='CleanerGDC'
                        info={['Python']}
                        src={CleanerGDC}
                        desc="CleanerGDC is a specialized desktop application designed exclusively for the technical support staff of Gobierno Del Distrito Capital (GDC). Its primary objective is to streamline and simplify their maintenance tasks, ensuring efficiency and effectiveness in system maintenance."
                        githubLink='https://github.com/caladavid/CleanerGDC.git'
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects