"use client"
import PillNav from "../components/PillNav";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import LetterGlitch from "../components/LetterGlitch";
import RotatingText from "../components/RotatingText";
import ProjectsSection from "../components/ProjectsSection";
import { Timeline } from "../components/ui/timeline";
import ScrollAnimation from "../components/ScrollAnimation";
import ScrollReveal from "../components/ScrollReveal";
import { LetterSwapForward as LetterSwap } from "@/components/ui/letter-swap";
import { TextEffect } from "@/components/ui/text-effect";

import VariableProximity from "../components/VariableProximity";
import MobileDock from "../components/MobileNav";
import StarBorder from "../components/StarBorder";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { useState, useEffect, useRef } from "react"

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#' }
]

import { useInView } from "framer-motion";

const ScrollText = ({ children, className, ...props }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  return (
    <div ref={ref} className={className}>
      <TextEffect trigger={isInView} {...props}>
        {children}
      </TextEffect>
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('#about')
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineHeadingRef = useRef<HTMLDivElement>(null)

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
            // Update URL without page reload
            const newUrl = `/${section}`
            if (window.location.pathname !== newUrl) {
              window.history.pushState({}, '', newUrl)
            }
            break
          }
        }
      }
      
      // If at the top, set to home
      if (window.scrollY < 100) {
        setActiveSection('#about')
        if (window.location.pathname !== '/') {
          window.history.pushState({}, '', '/')
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
        {/* Desktop Navigation - Hidden on mobile */}
        <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 pt-4 px-4 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
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
            <div 
              ref={containerRef}
              className="mb-4 relative inline-block"
            >
              <VariableProximity
                label="Shubham Mohapatra"
                className="text-6xl md:text-8xl font-extrabold text-white tracking-tight cursor-default"
                fromFontVariationSettings="'wght' 800, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef as React.RefObject<HTMLElement>}
                radius={100}
                falloff="linear"
              />
            </div>
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
                <ShimmerButton
                  onClick={() => window.open("https://github.com/Shubham-mohapatra", "_blank")}
                  className="shadow-2xl"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    View My Work
                  </span>
                </ShimmerButton>
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
        
        {/* Timeline Section */}
        <section className="relative z-10 min-h-screen py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center mb-16">
                <div 
                  ref={timelineHeadingRef}
                  className="mb-4 relative inline-block"
                >
                  <VariableProximity
                    label="My Journey."
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight cursor-default"
                    fromFontVariationSettings="'wght' 700, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={timelineHeadingRef as React.RefObject<HTMLElement>}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <ScrollReveal 
                  baseOpacity={0.3}
                  enableBlur={true}
                  baseRotation={1}
                  blurStrength={5}
                  containerClassName=""
                  textClassName="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  From humble beginnings to building impactful solutions — a chronicle of growth, learning, and innovation.
                </ScrollReveal>
              </div>
            </ScrollAnimation>
            
            <Timeline data={[
              {
                title: "Present",
                content: (
                  <div>
                    <div className="text-white dark:text-white text-2xl md:text-4xl font-bold mb-4">
                      <LetterSwap
                        label="Building & Hunting"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                        Currently building scalable applications and hunting for the perfect job opportunity. Transforming complex problems into elegant solutions.
                      </ScrollText>
                    </div>
                  </div>
                ),
              },
              {
                title: "2023",
                content: (
                  <div>
                    <div className="text-white dark:text-white text-2xl md:text-4xl font-bold mb-4">
                      <LetterSwap
                        label="Full Stack Developer"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                        Built my first full-stack application and explored AI integration. Deepened knowledge in React, Next.js, and Cloud technologies.
                      </ScrollText>
                    </div>
                  </div>
                ),
              },
              {
                title: "2022",
                content: (
                  <div>
                    <div className="text-white dark:text-white text-2xl md:text-4xl font-bold mb-4">
                      <LetterSwap
                        label="Joined KIIT"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                        Started my B.Tech in Computer Science Engineering at Kalinga Institute of Industrial Technology. The beginning of my professional coding journey.
                      </ScrollText>
                    </div>
                  </div>
                ),
              },
            ]} />
          </div>
        </section>
        
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileDock activeSection={activeSection} />
    </div>
  );
}
