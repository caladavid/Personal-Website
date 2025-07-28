import Image from "next/image"
import NextjsSVG from "./svg/nextjsSVG"
import JsSVG from "./svg/jsSVG"
import PythonSvg from "./svg/PythonSVG"
import ReactSVG from "./svg/ReactSVG"
import TailwindSVG from "./svg/TailwindSVG"
import MySQLSVG from "./svg/MySQLSVG"
import LaravelSVG from "./svg/LaravelSVG"
import Wrapper from "./Wrapper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';

import '../app/globals.css'
import 'swiper/css';


const skills = [
  { icon: JsSVG, label: "Javascript" },
  { icon: ReactSVG, label: "React" },
  { icon: NextjsSVG, label: "Next.js" },
  { icon: TailwindSVG, label: "Tailwind CSS" },
  { icon: PythonSvg, label: "Python" },
  { icon: MySQLSVG, label: "MySQL" },
  { icon: LaravelSVG, label: "Laravel" },
];

const About = () => {
  return (
    <section id="about" className="pb-20 md:my-10">
      <Wrapper>
        <h2 className="break-words font-semibold text-[#000] uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl pt-20 pb-9 ">About</h2>
        <div className=" ">
          <div className=" lg:text-xl">
            <p className="mb-4">Hey there! I&rsquo;m David Cala, and I enjoy simplifying complex things. I love building intuitive, responsive web apps that feel smooth and solve real problems. Whether it’s a dynamic dashboard, a tool that automates repetitive tasks, or a clean user interface, I like turning ideas into things people can actually use.</p>
            <p className="mb-4">Over the past 2 years, I&rsquo;ve been building projects that help me grow as a developer. I’ve tackled real challenges on my own, from design to implementation, learning how to ship things that actually work.</p>
            <p className="mb-8">Beyond writing code, I care about making things that make sense for the people who use them. I pay attention to details, but I never lose sight of the bigger picture. I’m always looking for ways to automate the boring stuff, improve what&rsquo;s already there, and learn something new along the way.</p>
            <div>
              <p className="mb-4 text-lg">Here are a few technologies I&rsquo;ve been working with recently:</p>
              <ul className="flex flex-wrap gap-8 text-lg text-center">
                <Swiper
                  breakpoints={{
                    100: { slidesPerView: 1, spaceBetween: 20 },
                    210: { slidesPerView: 2, spaceBetween: 20 },
                    320: { slidesPerView: 3, spaceBetween: 40 },
                    600: { slidesPerView: 4, spaceBetween: 40 },
                    1024: { slidesPerView: 6, spaceBetween: 40 },
                  }}
                  slidesPerView={4}
                  spaceBetween={5}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                >
                  {skills.map((skill, index) => (
                    <SwiperSlide key={index}>
                      <li className="text-center">
                        <skill.icon width={56} className="hover:fill-orange m-auto flex-1" />
                        <p>{skill.label}</p>
                      </li>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ul>
            </div>
          </div>
{/*           <div className="w-full mx-auto md:w-1/2">
            <div className="flex w-max relative mx-auto group">
              <Image
                src={Photo}
                alt="David Cala"
                className="w-[250px] h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[500px] rounded-md -z-10 object-cover bg-no-repeat"
              />
            </div>
          </div> */}
        </div>
      </Wrapper>
    </section>
  )
}

export default About