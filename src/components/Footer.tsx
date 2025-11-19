"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import VariableProximity from "./VariableProximity"
import { useRef } from "react"

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/Shubham-mohapatra",
      label: "GitHub",
      color: "hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/shubhammohapatra29/", 
      label: "LinkedIn",
      color: "hover:text-[#0077b5] hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.5)]"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:shubhammohapatra094@gmail.com", 
      label: "Email",
      color: "hover:text-[#EA4335] hover:drop-shadow-[0_0_10px_rgba(234,67,53,0.5)]"
    }
  ]

  return (
    <footer id="contact" className="bg-transparent border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div 
            ref={containerRef}
            className="mb-6 relative inline-block"
          >
            <VariableProximity
              label="Get in Touch"
              className="text-3xl md:text-4xl font-bold text-white tracking-tight cursor-default"
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff="linear"
            />
          </div>
          <p className="text-gray-300 max-w-xl mb-8 leading-relaxed text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:shubhammohapatra094@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 mb-12"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 p-2 hover:bg-white/5 rounded-full ${link.color}`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Shubham Mohapatra. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by Shubham Mohapatra
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
