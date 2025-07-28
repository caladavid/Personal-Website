import BackSVG from "@/components/svg/BackSVG";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export function getProjectsDataBySlug(slug) {
    const projects = [
        {
            "slug": "astralea",
            "title": "Astralea",
            "role": "Frontend Developer",
            "description": "An anime exploration platform that helps users browse, search, and discover series, characters, and reviews with a smooth and modern interface.",
            "technologies": ["Next.js", "TailwindCSS", "Jikan API"],
            "problem":  "Anime fans often struggle to find a clean, fast, and spoiler-free platform to browse seasonal content. Existing platforms were either too cluttered or lacked responsiveness and filtering options.",
            "solution": "I built a dynamic anime discovery platform using Next.js and TailwindCSS, integrating the Jikan API to fetch real-time data from MyAnimeList. The frontend included filters by season, genre, and popularity, with dynamic routing for each anime detail page. Animations were implemented using Framer Motion to enhance user experience.",
            "result": "A user-friendly anime discovery platform with detailed views and smooth performance.",
            "url": "https://astralea.vercel.app/",
            "images": [
                "/images/projects/astralea.png",
            ],
            "github": "https://github.com/caladavid/Chatelity-mern-chat-app"
        },
        {
            "slug": "chatelity",
            "title": "Chatelity",
            "role": "Fullstack Developer",
            "description": "A real-time chat web application that allows users to send and receive messages instantly, manage sessions, and track who is online.",
            "solution": "I built the application using the MERN stack (MongoDB, Express.js, React, Node.js) and integrated Socket.io for real-time bidirectional communication. The frontend used React with Zustand for state management and a responsive design approach. Messages were stored in MongoDB with proper indexing for efficient querying.",
            "problem": "There was a need to build a scalable real-time chat platform capable of handling multiple users simultaneously, with a modern UI and reliable socket communication for real-time updates.",
            "result": "A fully functional real-time chat platform with online presence and secure login.",
            "technologies": ["React", "NodeJs", "ExpressJs", "MongoDB", "Socket.io", "TailwindCSS"],
            "lessons_learned": "Managing real-time events at scale was a challenge. I resolved race conditions and message duplication by restructuring the socket event system with clear server-side state handling and acknowledgments.",
            "url": "https://github.com/caladavid/Chatelity-mern-chat-app",
            "images": [
                "/images/projects/chatelity-3.png",
                "/images/projects/chatelity-4.png",
            ],
            "github": "https://github.com/caladavid/Chatelity-mern-chat-app"
        },
        {
            "slug": "spoilersafe",
            "title": "SpoilerSafe",
            "role": "Fullstack Extension Developer",
            "description": "A browser extension that hides or blurs potential spoiler content on social media and video platforms based on user-defined keywords.",
            "technologies": ["TypeScript", "Chrome APIs", "DOM Manipulation"],
            "problem": "Users who watch series often get spoiled by thumbnails or video titles on platforms like YouTube. There was no effective tool to dynamically block spoiler content across platforms.",
            "solution": "Created a browser extension that allows users to define spoiler keywords (like 'Attack on Titan') and blocks spoiler content using DOM mutation observers. The extension automatically blurs or hides spoiler content using DOM observers, with support for real-time keyword updates and platform toggling.",
            "result": "Enhanced content browsing experience by shielding users from unwanted spoilers across multiple platforms.",
            "url": "https://spoilersafe.vercel.app/",
            "images": [
                "/images/projects/spoilersafe.png",
                "/images/projects/spoilersafe-2.png",
            ]
        },
        {
            "slug": "crimereporter",
            "title": "Crime Reporter",
            "role": "Fullstack Developer",
            "description": "A dashboard system that visualizes crime data and emerging threats, incorporating external sources like news articles and scanned reports.",
            "technologies": ["React", "Chart.js", "OCR", "Scraping"],
            "problem": "Authorities needed a way to analyze crime patterns and visualize incident data across locations.",
            "solution": "Built a dashboard that fetches crime data, scrapes relevant news sources, and uses OCR for document digitization. Presented data through interactive maps and real-time alerts to support quicker decision-making.",
            "result": "Enabled better crime trend analysis and faster response strategies through visual data insights.",
            "url": "https://github.com/yourusername/crimereporter"
        },
        {
            "slug": "mp3vault",
            "title": "MP3Vault",
            "role": "Backend Developer",
            "description": "A backend service that lets users download and convert YouTube videos to MP3 format while cleaning metadata and filenames.",
            "technologies": ["Python", "yt-dlp", "ffmpeg"],
            "problem": "Users needed a tool to download audio from YouTube videos while preserving metadata.",
            "solution": "Developed a backend service using Python and Flask that downloads and converts YouTube videos to MP3. It cleans filenames, extracts metadata, and supports multi-threaded downloads. Integrated `yt-dlp` and `ffmpeg` for processing.",
            "result": "A robust tool for fast and clean YouTube audio downloads with proper formatting and metadata.",
            "github": "github.com/caladavid/MP3Vault",
            "images": [
                "/images/projects/mp3vault.png",
                "/images/projects/mp3vault-2.png",
            ],

        },
    ]
    return projects.find(project => project.slug === slug);

};

const addSeparation = (text, currentIndex, totalLengthOfArray) => {
    if (currentIndex === totalLengthOfArray - 1) {
        return text;
    } else {
        const newText = `${text} / `
        return newText
    }
}

const Page = ({ params }) => {
    const projectSlug = params.id
    const project = getProjectsDataBySlug(projectSlug)

    return (
        <section className="h-full pb-20 ">
            <div className="w-full bg-black text-white py-10 mb-4 ">
                <Wrapper newClass="max-w-[1024px]">
                    <Link href={"/"} className="flex hover:ml-4 transition-all w-fit">
                        <BackSVG className="w-6" />
                        Back
                    </Link>
                    <h1 className="font-semibold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl pt-20">{project.title}</h1>
                    <p className="pt-4 pb-20">{project.description}</p>
                </Wrapper>
            </div>
            <Wrapper newClass="max-w-[1024px]">
                <div className="grid md:grid-cols-2 sm:grid-rows-2 py-10 gap-4 text-base">
                    <div className="">
                        <span className="text-black font-semibold">Role</span>
                        <p>{project.role}</p>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-black font-semibold">Stack</span>
                        <span className="">
                            {
                                project.technologies && project.technologies.map((tech, index, array) => (
                                    <span key={index} className="">
                                        {
                                            addSeparation(tech, index, array.length)
                                        }
                                    </span>
                                ))
                            }
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold">Live Site</span>
                        <a className="underline w-fit" href={project.url} rel="noopener noreferrer" target="_blank" >{project.title}</a>
                    </div>
                    {
                        project.github && (
                            <div className="flex flex-col">
                                <span className="text-black font-semibold">Github</span>
                                <a className="underline w-fit" href={project.github} rel="noopener noreferrer" target="_blank" >{project.title}</a>
                            </div>
                        )
                    }
                </div>

                <div className="flex gap-4 pb-10 text-base">

                    <div className="flex flex-col  gap-6 w-full pb-4">
                        <div className="flex flex-col  gap-2 w-full pb-4">
                            <h2 className="text-black font-semibold text-xl">Challenge</h2>
                            <p className="">{project.problem}</p>
                        </div>

                        <div className="flex flex-col gap-2 w-full pb-4">
                            <h2 className="text-black font-semibold text-xl">Technical Solution</h2>
                            <p className="">{project.solution}</p>
                        </div>
                    </div>




                </div>
                <div className="h-full w-full flex flex-col items-center">
                    {project.images && project.images.length > 0 ? (
                        project.images.map((imagePath, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={imagePath} // <-- Aquí se usa la ruta como string
                                    width={1000}
                                    height={800}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="rounded-lg"
                                    style={{ height: 'auto' }}
                                />
                            );
                        })
                    ) : (
                        <p>No images available for this project.</p>
                    )}
                </div>


            </Wrapper>

        </section>
    )
}

export default Page