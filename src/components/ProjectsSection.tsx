"use client"

import ScrollAnimation from "./ScrollAnimation"
import { ArrowUpRight, Github } from 'lucide-react'
import VariableProximity from "./VariableProximity"
import SpotlightCard from "./SpotlightCard"
import { useRef } from "react"
import ScrollReveal from "./ScrollReveal"

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const projects = [
    {
      title: "RAG Chatbot",
      subtitle: "with Gemini AI",
      description: "A production-ready RAG chatbot capable of multi-format document ingestion (PDF, DOCX, HTML). Features persistent storage and a scalable FastAPI backend.",
      tags: ["Gemini AI", "ChromaDB", "FastAPI", "React"],
      links: {
        demo: "#",
        github: "https://github.com/Shubham-mohapatra/RAG-chatbot"
      },
      image: "https://placehold.co/800x600/1a1a1a/ffffff?text=RAG+Chatbot",
      stats: "2-3s Response"
    },
    {
      title: "AgroBuddy",
      subtitle: "AI Crop Disease Detection",
      description: "AI-powered mobile app for crop disease detection using CNNs. Achieved 90% accuracy on 20K+ images, helping farmers reduce crop loss by 25%.",
      tags: ["Android", "Java", "CNN", "TensorFlow"],
      links: {
        demo: "#",
        github: "https://github.com/Shubham-mohapatra/AgroBuddy"
      },
      image: "https://placehold.co/800x600/1a1a1a/ffffff?text=AgroBuddy",
      stats: "90% Accuracy"
    }
  ]

  return (
    <section id="projects" className="relative z-10 min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="flex flex-col items-center text-center">
          <div 
            ref={containerRef}
            className="mb-16 relative"
          >
            <VariableProximity
              label="Featured Projects"
              className="text-5xl md:text-7xl font-bold text-white tracking-tight cursor-default"
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff="linear"
            />
          </div>
          <ScrollReveal 
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName="mb-32"
            textClassName="text-2xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed"
          >
            Forging raw ideas into polished digital realities. A curated selection of my technical endeavors.
          </ScrollReveal>
        </ScrollAnimation>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <ScrollAnimation animation="fade-up" delay={200}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
                    <div className="h-px w-12 bg-purple-500/30" />
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-bold text-white leading-tight group cursor-default">
                    {project.title}
                    <span className="block text-2xl md:text-3xl text-gray-500 font-normal mt-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.subtitle}
                    </span>
                  </h3>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={300}>
                  <ScrollReveal 
                    baseOpacity={0.2}
                    enableBlur={true}
                    baseRotation={1}
                    blurStrength={5}
                    containerClassName=""
                    textClassName="text-xl text-gray-400 leading-relaxed max-w-lg"
                  >
                    {project.description}
                  </ScrollReveal>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={400}>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:text-white transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={500}>
                  <div className="flex items-center gap-8 pt-4">
                    <a href={project.links.demo} className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-lg font-medium group">
                      Live Demo
                      <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href={project.links.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg font-medium">
                      <Github className="w-5 h-5" />
                      Source
                    </a>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <ScrollAnimation animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={200}>
                  <SpotlightCard className="relative group cursor-pointer rounded-2xl overflow-hidden p-0 bg-transparent">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative aspect-[4/3] md:aspect-[16/10]">
                        <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                  </SpotlightCard>
                </ScrollAnimation>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
