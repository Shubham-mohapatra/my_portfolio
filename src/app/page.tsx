"use client"

import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ScrollAnimation from "../components/ScrollAnimation";
import { useEffect, useState } from "react"

const ContinuousTypeWriter = ({ texts, speed = 100, pauseDuration = 2000 }: { 
  texts: string[]; 
  speed?: number; 
  pauseDuration?: number; 
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentCharIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentCharIndex + 1))
          setCurrentCharIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
     
        if (currentCharIndex > 0) {
          setDisplayedText(currentText.substring(0, currentCharIndex - 1))
          setCurrentCharIndex(prev => prev - 1)
        } else {
      
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, pauseDuration])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse text-pink-400">|</span>
    </span>
  )
}

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 animate-pulse">
            Shubham Mohapatra
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={300}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <ContinuousTypeWriter 
                texts={[
                  "I'm a Developer",
                  "I'm a Problem Solver",
                  "I Build Amazing Apps"
                ]}
                speed={120}
                pauseDuration={1500}
              />
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={500}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              Creating digital experiences that blend creativity with functionality
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-scale" delay={700}>
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
          </ScrollAnimation>
        </main>

        {/* Scroll indicator - positioned relative to hero section */}
        <ScrollAnimation animation="fade-up" delay={900}>
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
            onClick={scrollToAbout}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <AboutSection />
    </div>
  );
}
