import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import courseContent from '../content'

function Course() {
  const { courseId } = useParams()
  const course = courseContent[courseId]

  const courseName = course?.courseName || 'Unknown Course'
  const lessons = course?.lessons || []

  // activeLesson: -1 means "Summary" is selected
  const [activeLesson, setActiveLesson] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setActiveLesson(0)
    setSidebarOpen(false)
  }, [courseId])

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

  useEffect(() => {
    const contentEl = document.querySelector('.content-container')
    if (contentEl) contentEl.scrollTop = 0
  }, [activeLesson])

  const handleLessonClick = (index) => {
    setActiveLesson(index)
    setSidebarOpen(false)
  }

  const handleSummaryClick = () => {
    setActiveLesson(-1)
    setSidebarOpen(false)
  }

  const currentLesson = activeLesson >= 0 ? lessons[activeLesson] : null
  const isSummaryActive = activeLesson === -1

  /* Build summary HTML from all lessons */
  const buildSummaryHTML = () => {
    if (!lessons || lessons.length === 0) return '<p>No lessons available yet.</p>'

    let html = `
      <span class="lesson-badge">SMART SUMMARY</span>
      <h1>${courseName}</h1>
      <div class="meta-info">${courseId.toUpperCase()} <span>•</span> ${lessons.length} Lessons <span>•</span> Complete Overview</div>

      <p>A consolidated overview of every lesson covering <strong>topics</strong>, <strong>sub-topics</strong>, <strong>key definitions</strong>, and <strong>important concepts</strong>.</p>

      <div class="divider"></div>

      <h2>Table of Contents</h2>
      <ol>
    `

    lessons.forEach((lesson) => {
      html += `<li><a href="#summary-lesson-${lesson.id}" class="summary-toc-link">${lesson.title}</a></li>`
    })

    html += `</ol><div class="divider"></div>`

    lessons.forEach((lesson) => {
      html += `
        <div class="summary-block" id="summary-lesson-${lesson.id}">
          <div class="summary-block-header">
            <span class="lesson-badge">LESSON ${String(lesson.id).padStart(2, '0')}</span>
            <h2>${lesson.title}</h2>
          </div>
      `

      if (lesson.summary) {
        // Topic
        if (lesson.summary.topic) {
          html += `
            <h3>Topic</h3>
            <p>${lesson.summary.topic}</p>
          `
        }

        // Sub-topics
        if (lesson.summary.subTopics && lesson.summary.subTopics.length > 0) {
          html += `<h3>Sub-Topics</h3><ul>`
          lesson.summary.subTopics.forEach((st) => {
            html += `<li>${st}</li>`
          })
          html += `</ul>`
        }

        // Definitions
        if (lesson.summary.definitions && lesson.summary.definitions.length > 0) {
          html += `
            <div class="callout callout-blue">
              <span class="callout-label">Key Definitions</span>
          `
          lesson.summary.definitions.forEach((def) => {
            html += `<p><strong>${def.term}</strong> — ${def.meaning}</p>`
          })
          html += `</div>`
        }

        // Key Points
        if (lesson.summary.keyPoints && lesson.summary.keyPoints.length > 0) {
          html += `
            <div class="callout callout-yellow">
              <span class="callout-label">Important Points</span>
              <ul>
          `
          lesson.summary.keyPoints.forEach((point) => {
            html += `<li>${point}</li>`
          })
          html += `</ul></div>`
        }
      } else {
        html += `
          <div class="callout callout-red">
            <span class="callout-label">Pending</span>
            <p>Summary not yet available for this lesson.</p>
          </div>
        `
      }

      html += `</div>` // close summary-block

      // Add divider between blocks (not after last)
      html += `<div class="divider"></div>`
    })

    return html
  }

  if (!course) {
    return (
      <div className="course-page">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src="/image.png" alt="MN Logo" className="logo-icon" />
              Mobile Notes
            </Link>
          </div>
        </nav>
        <div className="app-container">
          <main className="content-container">
            <div className="content-body">
              <div className="content-card">
                <h1>Course Not Found</h1>
                <p>The course <code>{courseId}</code> does not exist yet.</p>
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

  return (
    <div className="course-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
          <Link to="/" className="logo">
            <img src="/image.png" alt="MN Logo" className="logo-icon" />
            Mobile Notes
          </Link>
          <div className="nav-separator" />
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

      {/* SIDEBAR OVERLAY */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' show' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* LAYOUT */}
      <div className="app-container">

        {/* Sidebar */}
        <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
          <div className="sidebar-header">Lessons</div>
          <ul className="lesson-list">

            {/* SMART SUMMARY BUTTON */}
            <li className="lesson-item">
              <button
                className={`lesson-link${isSummaryActive ? ' active' : ''}`}
                onClick={handleSummaryClick}
              >
                <span className="lesson-num">★</span>
                Smart Summary
              </button>
            </li>

            <li className="sidebar-divider-line" aria-hidden="true" />

            {lessons.map((lesson, index) => (
              <li key={lesson.id} className="lesson-item">
                <button
                  className={`lesson-link${index === activeLesson ? ' active' : ''}`}
                  onClick={() => handleLessonClick(index)}
                >
                  <span className="lesson-num">
                    {String(lesson.id).padStart(2, '0')}
                  </span>
                  {lesson.title}
                </button>
              </li>
            ))}
          </ul>
          <footer className="sidebar-footer">
            Mobile Notes &nbsp;•&nbsp; BY_#D1
          </footer>
        </aside>

        {/* Content */}
        <main className="content-container">
          <div className="content-body">
            <div className="content-card">
              {isSummaryActive ? (
                <div dangerouslySetInnerHTML={{ __html: buildSummaryHTML() }} />
              ) : currentLesson ? (
                <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
              ) : (
                <p>Select a lesson from the sidebar.</p>
              )}

              {/* Lesson Navigation — only for lessons, not summary */}
              {!isSummaryActive && (
                <>
                  <div className="divider" />
                  <div className="lesson-nav">
                    {activeLesson > 0 && (
                      <button
                        className="lesson-nav-btn prev"
                        onClick={() => setActiveLesson(activeLesson - 1)}
                      >
                        ← {lessons[activeLesson - 1].title}
                      </button>
                    )}
                    {activeLesson < lessons.length - 1 && (
                      <button
                        className="lesson-nav-btn next"
                        onClick={() => setActiveLesson(activeLesson + 1)}
                      >
                        {lessons[activeLesson + 1].title} →
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Course