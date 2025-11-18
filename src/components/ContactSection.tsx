"use client"

import { useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Copy, Check, ArrowRight } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function ContactSection() {
  const [isCopied, setIsCopied] = useState(false)

  // Spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@shubhammohapatra.com')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Shubham-mohapatra", label: "GitHub", username: "@Shubham-mohapatra" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/shubhammohapatra", label: "LinkedIn", username: "Shubham Mohapatra" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/shubhammohapatra", label: "Twitter", username: "@shubhammohapatra" },
  ]

  return (
    <section id="contact" className="relative pt-0 pb-0 px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-3xl relative z-10">
          <div 
            className="group relative bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight Gradient */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(168, 85, 247, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />

            <div className="relative p-10 md:p-16 flex flex-col items-center text-center">
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="w-full max-w-md space-y-6">
                {/* Email Card */}
                <div 
                  onClick={handleCopyEmail}
                  className="group/email flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/email:bg-purple-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-gray-300 group-hover/email:text-purple-400" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Email Me</p>
                    <p className="text-base text-white truncate group-hover/email:text-purple-200 transition-colors">hello@shubhammohapatra.com</p>
                  </div>
                  {isCopied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-500 group-hover/email:text-purple-400" />}
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group/link"
                    >
                      <span className="p-2 rounded-full bg-white/5 group-hover/link:bg-white/10 transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-sm text-gray-400 group-hover/link:text-white transition-colors font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
      </div>
    </section>
  )
}
