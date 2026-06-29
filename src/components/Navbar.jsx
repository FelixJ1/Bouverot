// components/Navbar.jsx
import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT', id: 'about' },
  { label: 'DEALS', id: 'deals' },
  { label: 'SERVICES', id: 'services' },
  { label: 'CONTACT', id: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 53)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ display: 'flex', flexDirection: 'row', fontWeight: '700' }}>
        ZEF
      </div>
      <div className="nav-links">
        {links.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={[
              activeSection === id ? 'active' : '',
              id === 'contact' ? 'contact-link' : ''
            ].join(' ').trim()}
            onClick={(e) => handleClick(e, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}