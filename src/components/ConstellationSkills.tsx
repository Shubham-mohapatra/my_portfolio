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

interface Node extends Skill {
  id: number
  x: number
  y: number
  vx: number
  vy: number
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

export default function ConstellationSkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const requestRef = useRef<number>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Initialize nodes
  useEffect(() => {
    if (!containerRef.current) return

    const { offsetWidth, offsetHeight } = containerRef.current
    setDimensions({ width: offsetWidth, height: offsetHeight })

    const initialNodes = skillsData.map((skill, i) => ({
      ...skill,
      id: i,
      x: Math.random() * offsetWidth,
      y: Math.random() * offsetHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setNodes(initialNodes)
  }, [])

  // Physics loop
  const animate = () => {
    setNodes(prevNodes => {
      return prevNodes.map(node => {
        let { x, y, vx, vy } = node

        // Update position
        x += vx
        y += vy

        // Boundary bounce
        if (x <= 0 || x >= dimensions.width) vx *= -1
        if (y <= 0 || y >= dimensions.height) vy *= -1

        // Keep within bounds
        x = Math.max(0, Math.min(dimensions.width, x))
        y = Math.max(0, Math.min(dimensions.height, y))

        // Mouse interaction (gentle attraction)
        const dx = mouseRef.current.x - x
        const dy = mouseRef.current.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) {
          vx += dx * 0.0001
          vy += dy * 0.0001
        }

        // Friction to prevent infinite acceleration
        vx *= 0.99
        vy *= 0.99

        // Minimum movement to keep alive
        if (Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) {
            vx += (Math.random() - 0.5) * 0.05
            vy += (Math.random() - 0.5) * 0.05
        }

        return { ...node, x, y, vx, vy }
      })
    })
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (dimensions.width > 0) {
      requestRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [dimensions])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  // Calculate connections
  const connections = useMemo(() => {
    const lines: JSX.Element[] = []
    nodes.forEach((nodeA, i) => {
      nodes.slice(i + 1).forEach(nodeB => {
        const dx = nodeA.x - nodeB.x
        const dy = nodeA.y - nodeB.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const opacity = 1 - distance / 150
          lines.push(
            <line
              key={`${nodeA.id}-${nodeB.id}`}
              x1={nodeA.x}
              y1={nodeA.y}
              x2={nodeB.x}
              y2={nodeB.y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              style={{ opacity }}
            />
          )
        }
      })
    })
    return lines
  }, [nodes])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] overflow-hidden bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm"
      onMouseMove={handleMouseMove}
    >
      {/* SVG Layer for Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections}
      </svg>

      {/* Nodes */}
      {nodes.map(node => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: node.x, top: node.y }}
        >
          <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-black/40 rounded-full border border-white/10 backdrop-blur-md shadow-lg group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
            {typeof node.icon === 'string' ? (
              <img src={node.icon} alt={node.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
            ) : (
              <div className="w-6 h-6 md:w-8 md:h-8 p-1">{node.icon}</div>
            )}
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="text-xs font-bold text-white bg-black/80 px-2 py-1 rounded-full border border-white/10">
                {node.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
