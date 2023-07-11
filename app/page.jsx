"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import Rightside from "@/components/Rightside";

import './globals.css'


export default function Home() {
  return (
    <>
      <div className="noise"></div>
      <HeroBanner />
      <About />
      <Rightside />
      <Projects />
      <Contact />
    </>
  )
}
