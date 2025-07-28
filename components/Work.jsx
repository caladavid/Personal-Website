import React from 'react'
import Wrapper from './Wrapper'
import WorkCard from './WorkCard'

const jobs = [
    {
        "title": "CleanerGDC",
        "desc": "Build a desktop app to automate repetitive Windows processes, centralize key tools, and reduce operational time for technical staff.",
        "rol": "Software Developer",
        "date": "May – July 2023",
        "location": "Gobierno del Distrito Capital",
        "url": "https://github.com/caladavid/CleanerGDC",
        "technologies": [
            "Python",
            "Tkinter",
        ]
    },
    {
        "title": "Arsertijo",
        "desc": "Designed and built a personal portfolio website for a graphic designer client. The goal was to create a modern, visually rich experience with smooth animations, fast performance, and responsive layout.",
        "rol": "Frontend Developer ",
        "date": "June – Aug 2023",
        "location": "Remote",
        "url": "https://arsertijo.netlify.app/",
        "technologies": [
            "Next.js",
            "TailwindCSS",
            "GSAP",
            "Framer Motion",
            "GSAP",
        ]
    },
]

const Work = () => {
    return (
        <section className='pb-20'>
            <Wrapper>
                <h1 id='experience' className="font-semibold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl pt-20 pb-9">My Experience</h1>
                {
                    jobs.map((job, index) => (
                        <div key={index} className='flex pb-4'>
                            <WorkCard
                                date={job.date}
                                role={job.rol}
                                location={job.location}
                                title={job.title}
                                url={job.url}
                                desc={job.desc}
                                technologies={job.technologies}
                            />
                        </div>
                    ))
                }
            </Wrapper>
        </section>
    )
}

export default Work