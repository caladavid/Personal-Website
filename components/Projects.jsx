import React from 'react'
import ProjectCard from './ProjectCard'
import Chatelity from "../public/images/Chatelity.png"
import MP3Vault from "../public/images/MP3Vault.png"
import SpoilAvoider from "../public/images/Spoil-Avoider.png"
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
                        title="Chatelity"
                        info={['React','JWT', 'MERN stack', 'Socket.io']}
                        src={Chatelity}
                        desc="Chatelity is a robust and scalable real-time chat application built with the MERN stack, Socket.io, and JWT. It offers seamless communication, user authentication, and global state management, providing a comprehensive solution for your real-time messaging needs."
                        githubLink='https://github.com/caladavid/Chatelity-mern-chat-app'
                        webLink='https://chatelity-mern-chat-app.onrender.com/'
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
                        title='Spoil Avoider'
                        info={['HTML', 'CSS', 'Javascript']}
                        src={SpoilAvoider}
                        desc="Spoil Avoider is a Chrome extension designed to help you avoid spoilers while watching videos on YouTube. This tool intelligently blurs out any content related to spoilers for the shows or movies you're interested in, enhancing your viewing experience."
                        githubLink='https://github.com/caladavid/Spoil-Avoider-extension'
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects