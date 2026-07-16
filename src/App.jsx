import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:courseId" element={<Course />} />
    </Routes>
  )
}

export default App