"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { 
  Code2, 
  Database, 
  Brain, 
  Layout, 
  Smartphone, 
  Wrench, 
  Terminal, 
  Figma, 
  GitBranch, 
  Container,
  Server,
  Cpu,
  Layers,
  Workflow
} from "lucide-react"

interface Skill {
  name: string
  icon: string | React.ReactNode
  category: string
}

const skillsData: Skill[] = [
  // Languages & Databases
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Databases" },
  { name: "ChromaDB", icon: <Database className="w-full h-full text-pink-500" />, category: "Databases" },
  
  // AI/ML
  { name: "GenAI", icon: <Brain className="w-full h-full text-purple-400" />, category: "AI" },
  { name: "RAG", icon: <Layers className="w-full h-full text-blue-400" />, category: "AI" },
  { name: "LangChain", icon: <Workflow className="w-full h-full text-green-400" />, category: "AI" },
  { name: "Gemini", icon: <Code2 className="w-full h-full text-blue-500" />, category: "AI" },
  { name: "CNNs", icon: <Cpu className="w-full h-full text-red-400" />, category: "AI" },
  
  // Web & Mobile
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Web" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Web" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Web" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", category: "Mobile" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Web" },
  
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Tools" },
]

export default function TagCloudSkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const requestRef = useRef<number>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRotationRef = useRef({ x: 0.001, y: 0.001 }) // Auto-rotation speed

  // Physics loop
  const animate = () => {
    setRotation(prev => ({
      x: prev.x + targetRotationRef.current.x,
      y: prev.y + targetRotationRef.current.y
    }))
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Calculate mouse position relative to center (-1 to 1)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    
    // Update target rotation speed based on mouse position
    targetRotationRef.current = {
      x: -y * 0.02, // Invert Y for natural feel
      y: x * 0.02
    }
  }

  const handleMouseLeave = () => {
    // Reset to slow auto-rotation
    targetRotationRef.current = { x: 0.001, y: 0.001 }
  }

  // Calculate 3D positions
  const tags = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle
    
    return skillsData.map((skill, i) => {
      const y = 1 - (i / (skillsData.length - 1)) * 2 // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y) // radius at y
      const theta = phi * i // golden angle increment

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      return { ...skill, x, y, z }
    })
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] preserve-3d">
        {tags.map((tag, i) => {
          // Apply rotation matrix
          // Rotate around X axis
          const y1 = tag.y * Math.cos(rotation.x) - tag.z * Math.sin(rotation.x)
          const z1 = tag.y * Math.sin(rotation.x) + tag.z * Math.cos(rotation.x)
          
          // Rotate around Y axis
          const x2 = tag.x * Math.cos(rotation.y) - z1 * Math.sin(rotation.y)
          const z2 = tag.x * Math.sin(rotation.y) + z1 * Math.cos(rotation.y)

          // Project to 2D (scale based on depth)
          const scale = (z2 + 2) / 3 // z2 ranges from -1 to 1
          const opacity = Math.max(0.2, (z2 + 1.5) / 2.5)
          const blur = Math.max(0, (1 - scale) * 10)

          // Translate to screen coordinates
          const translateX = x2 * 200 // Radius multiplier
          const translateY = y1 * 200

          return (
            <div
              key={tag.name}
              className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center transition-transform duration-75 will-change-transform cursor-pointer group"
              style={{
                transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, ${z2 * 100}px) scale(${scale})`,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex: Math.floor(scale * 100)
              }}
            >
              <div className="relative p-3 bg-black/40 rounded-xl border border-white/10 backdrop-blur-md group-hover:border-purple-500/50 group-hover:bg-white/10 transition-colors duration-300">
                {typeof tag.icon === 'string' ? (
                  <img src={tag.icon} alt={tag.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 p-1">{tag.icon}</div>
                )}
              </div>
              <span className="mt-2 text-sm font-bold text-white bg-black/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                {tag.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
