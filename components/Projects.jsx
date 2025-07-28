import React from 'react'
import ProjectCard from './ProjectCard'
import Chatelity from "../public/images/Chatelity.png"
import MP3Vault from "../public/images/projects/mp3vault.png"
import SpoilAvoider from "../public/images/projects/spoilersafe.png"
import Astralea from "../public/images/astralea.png"

import '../app/globals.css'

const Projects = () => {
    return (
        <section id='projects' className='bg-black text-grey z-10 relative '>
            <div className="noiseBlack"></div>
            <div className='w-11/12 pb-20 mx-auto px-5 md:px-10 2xl:w-3/4'>
                <h1 className="break-words font-semibold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl py-20">Projects</h1>
                <div className='flex flex-col gap-8'>
                    <ProjectCard
                        number="01"
                        title="Astralea"
                        /* info={['Next JS', 'Tailwind CSS', 'Jikan API']} */
                        info={["Frontend Developer"]}
                        src={Astralea}
                        desc="Astralea is an intuitive platform that offers users a unique experience when exploring a wide variety of anime series."

                    />

                    <ProjectCard
                        number="02"
                        title="Chatelity"
                        /* info={['React','JWT', 'MERN stack', 'Socket.io']} */
                        info={["Fullstack Developer"]}
                        src={Chatelity}
                        desc="Chatelity is a robust and scalable real-time chat application built with the MERN stack, Socket.io, and JWT."
                    /* githubLink='https://github.com/caladavid/Chatelity-mern-chat-app'
                    webLink='https://chatelity-mern-chat-app.onrender.com/' */
                    />

                    <ProjectCard
                        number="03"
                        title='MP3Vault'
                        /* info={['Python', 'Pytube']} */
                        info={["Backend Developer"]}
                        src={MP3Vault}
                        desc="MP3Vault is a desktop application that enables you to effortlessly download music from YouTube and convert it to MP3 format."
                        /* githubLink='https://github.com/caladavid/MP3Vault.git' */
                    />

                    <ProjectCard
                        number="04"
                        title='SpoilerSafe'
                        /* info={["TypeScript", "Chrome APIs", "DOM Manipulation"]} */
                        info={["Fullstack Extension Developer"]}
                        src={SpoilAvoider}
                        desc="SpoilerSafe is a browser extension designed to help you avoid spoilers on YouTube and Twitter. "
                        /* webLink='https://spoilersafe.vercel.app/' */
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects