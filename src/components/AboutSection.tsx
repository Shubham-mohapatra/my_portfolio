"use client"

// import { useEffect, useState } from "react"
import ScrollAnimation from "./ScrollAnimation"
import ProfileCard from "./ProfileCard"


const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - ProfileCard */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="flex justify-center lg:justify-center lg:pl-8">
              <div className="scale-75">
                <ProfileCard
                  name=""
                  title=""
                  handle=""
                  status=""
                  contactText="Contact Me"
                  avatarUrl="/photo.jpg"
                  miniAvatarUrl="/photo.jpg"
                  behindGradient="none"
                  innerGradient="none"
                  showBehindGradient={false}
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            </div>
          </ScrollAnimation>

          <div className="text-left">
            <ScrollAnimation animation="fade-right" delay={400}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                About Me
              </h2>
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
                  When I am not coding, you can find me exploring new technologies, 
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
