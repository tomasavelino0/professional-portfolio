import  { useState, useEffect } from 'react'
import { FiArrowUp as Arrow } from 'react-icons/fi'

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true)
    else setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', () => toggleVisibility())
  }, [])

  return (
    <>
      {
        isVisible && (
          <button
            id="scroll-top-btn"
            onClick={() => scrollToTop()}
          >
            <Arrow />
          </button>
        )
      }
    </>
  )
}

export default ScrollBtn