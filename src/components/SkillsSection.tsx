"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, LayoutList, X } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import DockSkills, { skillsData, Skill } from "./DockSkills"
import VariableProximity from "./VariableProximity"

const SkillsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Group skills by category
  const categories = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="text-center mb-12">
            <div 
              ref={containerRef}
              className="mb-4 relative inline-block"
            >
              <VariableProximity
                label="Tech Stack."
                className="text-5xl md:text-7xl font-bold text-white tracking-tight cursor-default"
                fromFontVariationSettings="'wght' 700, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef as React.RefObject<HTMLElement>}
                radius={100}
                falloff="linear"
              />
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build innovative solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="dock"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <DockSkills />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 w-full"
              >
                {Object.entries(categories).map(([category, skills], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-semibold text-gray-200 mb-8 border-b border-white/10 pb-4 inline-block min-w-[150px]">
                      {category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      {skills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="group flex flex-col items-center justify-center gap-3"
                        >
                          <div className="w-20 h-20 md:w-24 md:h-24 p-2 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            {typeof skill.icon === 'string' ? (
                              <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                              />
                            ) : (
                              <div className="w-full h-full p-1 text-gray-300 group-hover:text-white transition-colors">{skill.icon}</div>
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            aria-label={isExpanded ? "Collapse view" : "Expand view"}
          >
            <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
            {isExpanded ? (
              <X className="w-6 h-6 text-white relative z-10" />
            ) : (
              <Grid className="w-6 h-6 text-white relative z-10" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
