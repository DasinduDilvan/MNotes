import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'ict2113',
    code: 'ICT2113',
    name: 'Data Structures and Algorithms',
    desc: 'Arrays, linked lists, trees, graphs, sorting, searching, and algorithm analysis.',
  },
  {
    id: 'ict2122',
    code: 'ICT2122',
    name: 'Object Oriented Programming',
    desc: 'Classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
  },
  {
    id: 'ict2132',
    code: 'ICT2132',
    name: 'Object Oriented Programming Practicum',
    desc: 'Hands-on lab exercises, coding projects, and practical OOP implementations.',
  },
  {
    id: 'ict2142',
    code: 'ICT2142',
    name: 'E-Business Systems',
    desc: 'E-commerce models, digital payment systems, online business strategies.',
  },
  {
    id: 'ict2152',
    code: 'ICT2152',
    name: 'Object Oriented Analysis and Design',
    desc: 'UML diagrams, use cases, design patterns, and system modeling techniques.',
  },
  {
    id: 'ict2162',
    code: 'ICT2162',
    name: 'Management Information Systems',
    desc: 'Information systems in organizations, decision support, and IT management.',
  },
  {
    id: 'tcs2112',
    code: 'TCS2112',
    name: 'Business Economics',
    desc: 'Microeconomics, macroeconomics, market structures, and economic decision making.',
  },
]

function Home() {
  /* Theme setup */
  useEffect(() => {
    const saved = localStorage.getItem('sn-theme')
    if (saved) document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem('sn-theme', next)
  }

  return (
    <div className="home-page">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-icon">SN</span>
            Study Notes
          </Link>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <svg className="icon-moon" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24">
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <span className="hero-badge">Semester 1 — Year 2</span>
        <p>Select a course below to start reviewing your notes. Keep it simple, stay focused.</p>
      </section>

      {/* ===== COURSES ===== */}
      <section className="courses-section">
        <div className="section-label">All Courses</div>
        <div className="courses-grid">
          {courses.map((course) => (
            <Link to={`/${course.id}`} className="course-card" key={course.id}>
              <div className="card-top">
                <span className="course-code">{course.code}</span>
                <span className="card-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </div>
              <div className="course-name">{course.name}</div>
              <div className="course-desc">{course.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-logo">SN</span>
          Study Notes v2
        </div>
        <div className="footer-right">
          Made with focus <span>•</span> BY_#D1 <span>•</span> 2026
        </div>
      </footer>
    </div>
  )
}

export default Home