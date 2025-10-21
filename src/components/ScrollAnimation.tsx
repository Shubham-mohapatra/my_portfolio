"use client"

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale'
  delay?: number
  className?: string
  onInView?: () => void
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  onInView
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
              if (onInView) onInView()
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  return (
    <div 
      ref={elementRef}
      className={`scroll-animate ${animation} ${className}`}
    >
      {children}
    </div>
  )
}
