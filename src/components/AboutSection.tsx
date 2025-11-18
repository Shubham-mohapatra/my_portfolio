"use client"

import { useRef } from "react"
import ScrollAnimation from "./ScrollAnimation"
import TiltedCard from "./TiltedCard"


const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null)
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20" ref={containerRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="flex justify-center lg:justify-center lg:pl-8">
              <TiltedCard
                imageSrc="/profile.jpg"
                altText="Shubham Mohapatra"
                captionText=""
                containerHeight="450px"
                containerWidth="450px"
                imageHeight="350px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </ScrollAnimation>

          <div className="text-left">
            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="text-lg md:text-xl mb-6 space-y-6 leading-relaxed text-white">
                <p className="font-bold">
                  👋 Hey, I&apos;m Shubham Mohapatra — a full-stack developer and AI/ML enthusiast who loves building smart, meaningful digital experiences.
                </p>
                <p className="font-semibold">
                  I enjoy blending creativity with logic — crafting seamless UIs, scalable backends, and intelligent systems that learn and adapt.
                </p>
                <p className="font-semibold">
                  When I&apos;m not coding, I&apos;m exploring new tech trends or experimenting with data-driven ideas.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
