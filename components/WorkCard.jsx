import React from 'react'

const WorkCard = ({ url, date, title, location, desc, technologies, role }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer"
            className='md:flex justify-between h-full w-full md:w-[80%] p-4 gap-4 hover:bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 transition-all border border-none'
        >
            <span className='md:w-[15%] text-base'>{date}</span>
            <div className='md:w-[85%]'>
                <h3 className='font-bold text-xl'>{role} · {title}</h3>
                <span className=' italic'>{location}</span>
                <p className='py-2 '>{desc}</p>
                <ul  className='flex flex-col md:flex-row gap-1'>
                    {technologies && technologies.map((tech, index) =>
                        <li key={index} className='w-fit px-3 py-1 rounded-full mr-2 gap-4 font-bold bg-[#f3521831]  text-orange text-sm'>
                            {tech}
                        </li>
                    )}
                </ul>
            </div>
        </a>
    )
}

export default WorkCard