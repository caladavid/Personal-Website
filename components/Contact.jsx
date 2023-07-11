import React from 'react'
import Wrapper from './Wrapper'
import EnvelopeSVG from './svg/EnvelopeSVG'

const Contact = () => {
  return (
    <Wrapper>
      <section>
        <div id='contact' className='w-full py-32 flex flex-col justify-center items-center text-center'>
            <p className='font-semibold text-3xl sm:text-5xl uppercase'>Ready to bring your ideas to life?</p>
            <h2 className='break-words my-10 text-[#000] text-xl sm:text-3xl'>Let&rsquo;s connect! Reach out to me now and let&rsquo;s discuss how we can work together to create something amazing!</h2>
              <div className='group  text-center text-grey bg-orange rounded-md'>
                  <a href='mailto:davidcalae@gmail.com' className='w-60 flex justify-center font-semibold text-xl uppercase  py-4 px-8'>
                    <span className='group-hover:mr-4 transition-[margin]'>Get Started</span>
                    <EnvelopeSVG width={28} fill="#F6F6F6" className='group-hover:block hidden'/>
                  </a>
              </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Contact