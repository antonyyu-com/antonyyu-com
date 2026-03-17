import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import resumeData from './resumeData'

function App () {
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function' || !window.matchMedia('(pointer: fine)').matches) {
      return undefined
    }

    const ringElement = ringRef.current
    const dotElement = dotRef.current

    if (!ringElement || !dotElement) {
      return undefined
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId = null

    function animateRing () {
      ringX += (mouseX - ringX) * 0.32
      ringY += (mouseY - ringY) * 0.32
      ringElement.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = window.requestAnimationFrame(animateRing)
    }

    function handleMouseMove (event) {
      mouseX = event.clientX
      mouseY = event.clientY
      dotElement.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      document.body.classList.add('cursor-ready')
    }

    function isInteractiveTarget (target) {
      return target instanceof Element && target.closest('a, button, input, textarea, label, [role="button"]')
    }

    function handleMouseOver (event) {
      if (isInteractiveTarget(event.target)) {
        document.body.classList.add('cursor-hover')
      }
    }

    function handleMouseOut (event) {
      if (isInteractiveTarget(event.target)) {
        document.body.classList.remove('cursor-hover')
      }
    }

    function handleMouseDown () {
      document.body.classList.add('cursor-down')
    }

    function handleMouseUp () {
      document.body.classList.remove('cursor-down')
    }

    function handleMouseLeave () {
      document.body.classList.remove('cursor-ready', 'cursor-hover', 'cursor-down')
    }

    dotElement.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    animateRing()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('blur', handleMouseLeave)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      document.body.classList.remove('cursor-ready', 'cursor-hover', 'cursor-down')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('blur', handleMouseLeave)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className='app-shell'>
      <div className='custom-cursor custom-cursor-ring' ref={ringRef} aria-hidden='true' />
      <div className='custom-cursor custom-cursor-dot' ref={dotRef} aria-hidden='true' />
      <Header resumeData={resumeData} />
      <main>
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Contact resumeData={resumeData} />
      </main>
      <Footer resumeData={resumeData} />
    </div>
  )
}

export default App
