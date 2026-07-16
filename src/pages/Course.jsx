import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const courseNames = {
  ict2113: 'Data Structures and Algorithms',
  ict2122: 'Object Oriented Programming',
  ict2132: 'Object Oriented Programming Practicum',
  ict2142: 'E-Business Systems',
  ict2152: 'Object Oriented Analysis and Design',
  ict2162: 'Management Information Systems',
  tcs2112: 'Business Economics',
}

function Course() {
  const { courseId } = useParams()
  const courseName = courseNames[courseId] || 'Unknown Course'

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
    <div className="course-page">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-icon">SN</span>
            Study Notes
          </Link>
          <div className="nav-separator"></div>
          <span className="current-course">{courseName}</span>
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

      {/* ===== PLACEHOLDER LAYOUT ===== */}
      <div className="app-container">

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">Lessons</div>
          <ul className="lesson-list">
            <li className="lesson-item">
              <a href="#" className="lesson-link active">
                <span className="lesson-num">01</span> Introduction
              </a>
            </li>
            <li className="lesson-item">
              <a href="#" className="lesson-link">
                <span className="lesson-num">02</span> Core Concepts
              </a>
            </li>
            <li className="lesson-item">
              <a href="#" className="lesson-link">
                <span className="lesson-num">03</span> Advanced Topics
              </a>
            </li>
          </ul>
          <footer className="sidebar-footer">
            Study Notes &nbsp;•&nbsp; BY_#D1
          </footer>
        </aside>

        {/* Content */}
        <main className="content-container">
          <div className="content-body">
            <div className="content-card">
              <span className="lesson-badge">{courseId.toUpperCase()}</span>
              <h1>{courseName}</h1>
              <div className="meta-info">
                Lesson 01 <span>•</span> Introduction <span>•</span> Beginner
              </div>
              <p>This is a placeholder for the <strong>{courseName}</strong> course content. Your lesson notes will appear here.</p>
              <div className="callout callout-green">
                <span className="callout-label">Tip</span>
                <p>Navigate between lessons using the sidebar on the left.</p>
              </div>
              <p>
                <Link to="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  ← Back to all courses
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Course