import React from 'react'
import Wrapper from './Wrapper'
import GithubSVG from './svg/GithubSVG'
import LinkedinSVG from './svg/LinkedinSVG'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
        <div className='w-full flex flex-col md:flex-row justify-center text-base text-center py-5 border-t-[1px] text-black/80 border-black/80'>
            <div className='flex md:hidden gap-4 justify-center items-center'>
              <a href="https://github.com/caladavid" target="_blank" rel="noopener noreferrer" aria-label='Github Link'><GithubSVG width={30} fill="#151819" className='hover:fill-orange'/></a>
              <a href="https://www.linkedin.com/in/david-cala-b93806282/" target="_blank" rel="noopener noreferrer" aria-label='Website Link'><LinkedinSVG width={40} fill="#151819" className='hover:fill-orange'/></a>
            </div>
            <div>
              <p>&copy; {currentYear}. All Rights Reserved</p>
              <p>Designed & Built by David Cala</p> 
            </div>
        </div>
    </Wrapper>
  )
}

export default Footer