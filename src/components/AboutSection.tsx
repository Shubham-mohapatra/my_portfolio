"use client"

import { useEffect, useState } from "react"
import ScrollAnimation from "./ScrollAnimation"

const TypeWriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Three.js Container - We'll add this later */}
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    {/* Placeholder for your photo */}
                    <div className="w-72 h-72 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xl font-semibold">
                      Your Photo Here
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="text-left">
            <ScrollAnimation animation="fade-right" delay={400}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                About Me
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="text-2xl md:text-3xl text-gray-300 mb-6 min-h-[100px]">
                <TypeWriter 
                  text="Hi, I am Shubham Mohapatra" 
                  speed={150}
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={800}>
              <div className="text-lg text-gray-400 leading-relaxed space-y-4">
                <p>
                  I&apos;m a passionate full-stack developer who loves creating digital experiences 
                  that blend creativity with functionality.
                </p>
                <p>
                  With expertise in modern web technologies, I enjoy building applications 
                  that make a difference and solve real-world problems.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </ScrollAnimation>

            {/* Tech Stack Icons */}
            <ScrollAnimation animation="fade-scale" delay={1000}>
              <div className="mt-8">
                <h3 className="text-xl text-white mb-4">Technologies I work with:</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Three.js'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
