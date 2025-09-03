import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Live from './pages/Live.jsx'
import Schedule from './pages/Schedule.jsx'
import Archives from './pages/Archives.jsx'
import Moderation from './pages/Moderation.jsx'
import Admin from './pages/Admin.jsx'

export default function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1 className="app-title">RIECH</h1>
        <p className="app-subtitle">A world where every Rwandan experiences Rwanda in real time.</p>
        <nav className="app-nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/live" className="nav-link">Live</NavLink>
          <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
          <NavLink to="/archives" className="nav-link">Archives</NavLink>
          <NavLink to="/moderation" className="nav-link">Moderation</NavLink>
          <NavLink to="/admin" className="nav-link">Admin</NavLink>
        </nav>
      </header>
      <section className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </section>
    </main>
  )
}
