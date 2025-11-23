"use client"

import ScrollAnimation from "./ScrollAnimation"
import { ArrowUpRight, Github, Code2, Database, Cpu, Brain, Layers, Workflow, Leaf } from 'lucide-react'
import VariableProximity from "./VariableProximity"
import SpotlightCard from "./SpotlightCard"
import { useRef } from "react"
import ScrollReveal from "./ScrollReveal"
import { RippleButton } from "@/components/ui/ripple-button"
import Image from "next/image"
import PixelCard from "./PixelCard"

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const techIcons: Record<string, React.ReactNode> = {
    "React": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={20} height={20} className="w-5 h-5" alt="React" />,
    "Next.js": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={20} height={20} className="w-5 h-5 invert" alt="Next.js" />,
    "FastAPI": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width={20} height={20} className="w-5 h-5" alt="FastAPI" />,
    "Gemini API": <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="#4E86F6"/></svg>,
    "ChromaDB": <Database className="w-5 h-5 text-pink-500" />,
    "Sentence Transformers": <Brain className="w-5 h-5 text-purple-400" />,
    "Android": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" width={20} height={20} className="w-5 h-5" alt="Android" />,
    "Java": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={20} height={20} className="w-5 h-5" alt="Java" />,
    "CNN": <Cpu className="w-5 h-5 text-red-400" />,
    "TensorFlow": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" width={20} height={20} className="w-5 h-5" alt="TensorFlow" />,
    "React Native": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={20} height={20} className="w-5 h-5" alt="React Native" />,
    "Expo": <Image src="https://cdn.simpleicons.org/expo/white" width={20} height={20} className="w-5 h-5" alt="Expo" />,
    "Node.js": <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={20} height={20} className="w-5 h-5" alt="Node.js" />
  }

  const projects = [
    {
      title: "RAG Chatbot",
      subtitle: "with Gemini AI",
      description: "A production-ready RAG chatbot capable of multi-format document ingestion (PDF, DOCX, HTML). Features persistent storage and a scalable FastAPI backend.",
      tags: ["ChromaDB", "React", "Next.js", "FastAPI", "Gemini API", "Sentence Transformers"],
      links: {
        demo: "#",
        github: "https://github.com/Shubham-mohapatra/RAG-chatbot"
      },
      image: (
        <PixelCard variant="blue" gap={10} speed={20} colors="#3b82f6,#60a5fa,#93c5fd" className="w-full h-full bg-[#0f172a]">
          <Image 
            src="/rag-chatbot.png" 
            alt="RAG Chatbot" 
            fill 
            className="object-contain z-[1]" 
            priority
          />
        </PixelCard>
      ),
      stats: "2-3s Response"
    },
    {
      title: "AgroBuddy",
      subtitle: "AI Crop Disease Detection",
      description: "AI-powered mobile app for crop disease detection using CNNs. Achieved 90% accuracy on 20K+ images, helping farmers reduce crop loss by 25%.",
      tags: ["React Native", "Expo", "Node.js", "FastAPI", "TensorFlow", "CNN"],
      links: {
        demo: "#",
        github: "https://github.com/Shubham-mohapatra/AgroBuddy"
      },
      image: (
        <PixelCard variant="pink" gap={6} speed={40} colors="#10b981,#34d399,#6ee7b7" className="w-full h-full bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden group/image">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            {/* Decorative background icon */}
            <Leaf className="absolute -bottom-8 -right-8 w-48 h-48 text-emerald-400/10 rotate-12 transform group-hover/image:scale-110 group-hover/image:rotate-45 transition-all duration-700 ease-in-out" />
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 transform group-hover/image:scale-105 transition-transform duration-500">
              {/* App Icon Style */}
              <div className="relative group/icon">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-[1.5rem] blur opacity-25 group-hover/icon:opacity-75 transition duration-500"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-700 rounded-[1.5rem] flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
                  <Leaf className="w-12 h-12 text-white drop-shadow-md" />
                  
                  {/* Gloss effect */}
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/40 to-transparent rotate-45 transform translate-y-4"></div>
                </div>
              </div>

              <div className="text-center">
                <span className="block text-3xl font-bold text-white tracking-tight drop-shadow-lg">
                  AgroBuddy
                </span>
                <span className="text-emerald-200/80 text-xs font-bold tracking-[0.2em] uppercase mt-1 block">
                  AI Crop Protection
                </span>
              </div>
            </div>
          </div>
        </PixelCard>
      ),
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
                      <RippleButton 
                        key={tag} 
                        variant="outline" 
                        size="sm" 
                        className="text-sm font-bold bg-black text-white border-white/20 hover:bg-gray-800"
                        rippleClassName="bg-white/20"
                      >
                        {tag}
                      </RippleButton>
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
                        <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                        {project.image}
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
