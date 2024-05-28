import Image from "next/image"
import Photo from "../public/images/deivi.jpg"
import NextjsSVG from "./svg/nextjsSVG"
import JsSVG from "./svg/jsSVG"
import PythonSvg from "./svg/PythonSVG"
import ReactSVG from "./svg/ReactSVG"
import TailwindSVG from "./svg/TailwindSVG"
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
];

const About = () => {
  return (
    <section id="about" className="pb-20 md:my-10">
      <Wrapper>
        <h2 className="break-words font-semibold text-[#000] uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl pt-20 pb-9 ml-5 ">About</h2>
        <div className="flex flex-col min-[769px]:flex-row gap-12 md:pt-11 ">
          <div className="min-[769px]:w-1/2 lg:ml-16 lg:text-xl">
            <p className="mb-4">Hey there! I&rsquo;m David Cala, and I&rsquo;m not just a web developer – I&rsquo;m a passionate problem-solver who loves building things from scratch. My journey in web development has been fueled by a deep love for technology and a desire to make a positive impact.</p>
            <p className="mb-8">Since my youth, I&rsquo;ve been captivated by the world of computers and technology. From immersing myself in video games to exploring the depths of software, my love for technology has been the driving force behind my path to becoming a web developer.</p>
            <div>
              <p className="mb-4 text-lg">Here are a few technologies I&rsquo;ve been working with recently:</p>
              <ul className="flex flex-wrap gap-8 text-lg text-center">
                <Swiper
                  breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 40 },
                    480: { slidesPerView: 4, spaceBetween: 40 },
                  }}
                  slidesPerView={4}
                  spaceBetween={5}
                  autoplay={{
                    delay: 2500,
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
          <div className="w-full mx-auto md:w-1/2">
            <div className="flex w-max relative mx-auto group">
              <Image
                src={Photo}
                alt="David Cala"
                className="w-[250px] h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[500px] rounded-md -z-10 object-cover bg-no-repeat"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default About