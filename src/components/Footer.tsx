"use client"

import ScrollAnimation from './ScrollAnimation'

const Footer = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@shubhammohapatra.com',
      href: 'mailto:hello@shubhammohapatra.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '+91 12345 67890',
      href: 'tel:+911234567890',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shubhammohapatra',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shubhammohapatra',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shubhammohapatra',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'hover:text-blue-400'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-t from-black/50 to-transparent pt-20 pb-8">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Contact Section */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Contact Info Cards */}
          {contactInfo.map((contact, index) => (
            <ScrollAnimation 
              key={contact.label} 
              animation="fade-scale" 
              delay={300 + index * 100}
            >
              <a
                href={contact.href}
                className="block bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                    <p className="text-gray-300 text-sm">{contact.value}</p>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}

          {/* Social Links */}
          {socialLinks.map((social, index) => (
            <ScrollAnimation 
              key={social.name} 
              animation="fade-scale" 
              delay={500 + index * 100}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`text-gray-400 ${social.color} transition-colors duration-300`}>
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{social.name}</h3>
                    <p className="text-gray-300 text-sm">@shubhammohapatra</p>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <ScrollAnimation animation="fade-up" delay={700}>
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Drop me a message and let's create something extraordinary!
              </p>
              <a
                href="mailto:hello@shubhammohapatra.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </ScrollAnimation>

        {/* Footer Bottom */}
        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-300 flex items-center gap-2">
                  Made with 
                  <span className="text-red-400 animate-pulse">❤️</span> 
                  by 
                  <span className="text-white font-semibold">Shubham Mohapatra</span>
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  © {currentYear} All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div className="flex gap-6">
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Top
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}

export default Footer
