import React from 'react'
import GithubSVG from './svg/GithubSVG'
import LinkedinSVG from './svg/LinkedinSVG'

const Rightside = () => {
    
    return (
        <ul className="hidden fixed md:flex flex-col bottom-0 right-4 xl:right-6 2xl:right-20 z-[22] items-end mix-blend-difference text-white">
            <li className='mx-auto mb-2 hover:mb-3 transition-all'><a href="https://github.com/caladavid" target="_blank" rel="noopener noreferrer"><GithubSVG width={30} className='hover:fill-orange'/></a></li>
            <li className='mx-auto mb-2 hover:mb-3 transition-all'><a href="https://www.linkedin.com/in/david-cala-b93806282/" target="_blank" rel="noopener noreferrer"><LinkedinSVG width={40} className='hover:fill-orange'/></a></li>
            <li className="inline-block h-[10rem] min-h-[1em] w-0.5 bg-white mx-auto"></li>
        </ul>
    )
}

export default Rightside