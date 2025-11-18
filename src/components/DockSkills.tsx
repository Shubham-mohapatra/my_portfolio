"use client"

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
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export interface Skill {
  name: string
  icon: string | React.ReactNode
  category: string
}

export const skillsData: Skill[] = [
  // Languages
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Languages" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Languages" },
  
  // Backend & Database
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white", category: "Backend" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Backend" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Databases" },
  { name: "ChromaDB", icon: "/chromadb.png", category: "Databases" },
  
  // AI/ML
  { name: "GenAI", icon: <Brain className="w-full h-full text-purple-400" />, category: "AI" },
  { name: "RAG", icon: <Layers className="w-full h-full text-blue-400" />, category: "AI" },
  { name: "LangChain", icon: <Workflow className="w-full h-full text-green-400" />, category: "AI" },
  { name: "Gemini", icon: <Code2 className="w-full h-full text-blue-500" />, category: "AI" },
  { name: "CNNs", icon: <Cpu className="w-full h-full text-red-400" />, category: "AI" },
  
  // Web & Mobile
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Web" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", category: "Web" },
  { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/white", category: "Web" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/white", category: "Web" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Mobile" },
  { name: "Expo", icon: "https://cdn.simpleicons.org/expo/white", category: "Mobile" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Web" },
  
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Tools" },
]

function DockIcon({ mouseX, skill, index }: { mouseX: MotionValue; skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      initial={{ opacity: 0, y: 20, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.05, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      whileTap={{ scale: 0.85, transition: { duration: 0.1 } }}
      className="aspect-square rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center relative group cursor-pointer hover:bg-white/10 transition-colors flex-shrink-0"
    >
      <div className="w-full h-full p-2 flex items-center justify-center">
        {typeof skill.icon === 'string' ? (
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full p-1">{skill.icon}</div>
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <span className="text-xs font-bold text-white bg-black/80 px-2 py-1 rounded-full border border-white/10 whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function DockSkills() {
  const mouseX = useMotionValue(Infinity)
  const [isHovered, setIsHovered] = useState(false)

  // Duplicate skills for infinite loop
  const duplicatedSkills = [...skillsData, ...skillsData]

  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="w-full max-w-[100vw] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          mouseX.set(Infinity)
        }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
      >
        {/* Gradient Masks for seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <motion.div 
          className="flex items-end gap-4 p-4 w-max"
          animate={{ 
            x: isHovered ? undefined : ["0%", "-50%"] 
          }}
          transition={{ 
            x: {
              duration: 40, // Speed of scroll
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {duplicatedSkills.map((skill, i) => (
            <DockIcon key={`${skill.name}-${i}`} mouseX={mouseX} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
      
      <p className="text-gray-500 text-sm mt-8 animate-pulse">
        Hover to pause & interact
      </p>
    </div>
  )
}
