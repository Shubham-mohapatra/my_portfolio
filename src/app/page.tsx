"use client"
import PillNav from "../components/PillNav";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import FaultyTerminal from "../components/FaultyTerminal";
import RotatingText from "../components/RotatingText";
import { useState, useEffect } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState('#about')

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#003300"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Main content wrapper */}
      <div className="relative z-10">
        {/* Fixed PillNav */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <PillNav
          items={[
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Resume', href: '#resume' }
          ]}
          activeHref={activeSection}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          onMobileMenuClick={() => {}}
          />
        </div>
      
  {/* Hero Section */}
  <div className="min-h-screen relative z-10">
        {/* Hero content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">
            Shubham Mohapatra
            </h1>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <RotatingText 
                texts={[
                  "I'm a Developer",
                  "I'm a Problem Solver",
                  "I Build Amazing Apps"
                ]}
                rotationInterval={2000}
                splitBy="lines"
                staggerDuration={0}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
              />
            </h2>
          </div>
          
          <div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              Creating digital experiences that blend creativity with functionality
            </p>
          </div>

          <div>
            <div className="flex gap-4">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </main>
        <div>
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
            onClick={scrollToAbout}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
  <AboutSection />
      
  {/* Skills Section */}
  <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 bg-black">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">Skills</h2>
      <p className="text-xl text-gray-300">Skills section coming soon...</p>
    </div>
  </section>

  {/* Projects Section */}
  <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 bg-black">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">Projects</h2>
      <p className="text-xl text-gray-300">Projects section coming soon...</p>
    </div>
  </section>

  {/* Footer with Contact */}
  <Footer />
      </div>
    </div>
  );
}
