"use client"
import PillNav from "../components/PillNav";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import LetterGlitch from "../components/LetterGlitch";
import RotatingText from "../components/RotatingText";
import ProjectsSection from "../components/ProjectsSection";


import { useState, useEffect } from "react"

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('#about')
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNav(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false)
      }
      
      setLastScrollY(currentScrollY)

      // Active section tracking
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
  }, [lastScrollY])

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-full z-0 background-overlay">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10">
        <div className={`fixed top-0 left-0 right-0 z-50 pt-4 px-4 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
          <PillNav
          items={navItems}
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
              <a 
                href="https://github.com/Shubham-mohapatra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 inline-block"
              >
                View My Work
              </a>
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
  <SkillsSection />

  {/* Projects Section */}
  <ProjectsSection />

  {/* Footer with Contact */}
  <Footer />
      </div>
    </div>
  );
}
