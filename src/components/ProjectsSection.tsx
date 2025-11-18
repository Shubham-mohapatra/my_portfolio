"use client"

import ScrollAnimation from "./ScrollAnimation"
import { useState } from "react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "RAG Chatbot with Gemini AI",
      description: "A production-ready RAG chatbot capable of multi-format document ingestion (PDF, DOCX, HTML). Features persistent storage and a scalable FastAPI backend.",
      tags: ["Gemini AI", "ChromaDB", "FastAPI", "React", "RAG"],
      links: {
        demo: "#",
        github: "#"
      },
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=RAG+Chatbot",
      stats: "2-3s Response Time"
    },
    {
      title: "AgroBuddy",
      description: "AI-powered mobile app for crop disease detection using CNNs. Achieved 90% accuracy on 20K+ images, helping farmers reduce crop loss by 25%.",
      tags: ["Android", "Java", "CNN", "TensorFlow", "Mobile"],
      links: {
        demo: "#",
        github: "#"
      },
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=AgroBuddy",
      stats: "90% Accuracy"
    }
  ]

  return (
    <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing my journey in building impactful solutions
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={300 + index * 200}>
              <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                {/* Image Placeholder / Gradient */}
                <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 group-hover:from-purple-900/40 group-hover:to-pink-900/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                    {project.title[0]}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-pink-400 border border-pink-500/30 px-2 py-1 rounded-full">
                      {project.stats}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.links.github} className="text-white hover:text-pink-400 transition-colors font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    <a href={project.links.demo} className="text-white hover:text-pink-400 transition-colors font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
