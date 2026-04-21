import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Activities from './pages/activities.jsx'
import ActivityDetail from './pages/ActivityDetail.jsx'
import Filter from './pages/Filter.jsx'
import Stats from './pages/Stats.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
