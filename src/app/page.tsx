"use client"
import PillNav from "../components/PillNav";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import Grainient from "../components/Grainient";
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
import { useTheme } from "next-themes"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"


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
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
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
      <div className="fixed top-4 right-4 z-[100] md:top-6 md:right-6">
        <AnimatedThemeToggler className="bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />
      </div>
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Grainient
          color1={mounted && resolvedTheme === 'dark' ? "#1e0b36" : "#FF9FFC"}
          color2={mounted && resolvedTheme === 'dark' ? "#0f0724" : "#5227FF"}
          color3={mounted && resolvedTheme === 'dark' ? "#2e1554" : "#B19EEF"}
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
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
          baseColor={mounted && resolvedTheme === 'light' ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.1)"}
          pillColor={mounted && resolvedTheme === 'light' ? "#ffffff" : "#1f2937"}
          hoveredPillTextColor="#ffffff"
          pillTextColor={mounted && resolvedTheme === 'light' ? "#000000" : "#ffffff"}
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
              <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md max-w-3xl mb-8">
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
                  textClassName="text-xl text-white font-medium drop-shadow-md max-w-2xl mx-auto"
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
                        label="It Finally Worked"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                        After countless attempts, things finally clicked — officially started my professional journey.
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
                        label="Trial & Error"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                        A year of trying, failing, learning, and pretending I had everything under control.
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
                        label="Joined College"
                        staggerFrom="center"
                        reverse={false}
                        className="text-2xl md:text-4xl font-bold"
                      />
                    </div>
                    <div className="text-white dark:text-white text-base md:text-lg font-normal mb-8">
                      <ScrollText per='word' preset='fade'>
                            Hello World → Why is nothing working?
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
