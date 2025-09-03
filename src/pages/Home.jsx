import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page home-page">
      <h2 className="section-title">Rwanda Intelligent Event & Cultural Hub</h2>
      <p className="section-subtitle">Experience Rwanda in real time — inclusively, proudly, and securely.</p>
      <nav className="quick-links">
        <Link className="nav-chip" to="/live">Live</Link>
        <Link className="nav-chip" to="/schedule">Schedule</Link>
        <Link className="nav-chip" to="/archives">Archives</Link>
        <Link className="nav-chip" to="/moderation">Moderation</Link>
        <Link className="nav-chip" to="/admin">Admin</Link>
      </nav>
      <div className="feature-grid">
        <article className="feature-card">
          <h3 className="feature-title">Edge-first</h3>
          <p className="feature-text">Offline-first hubs, mesh networking, and local AI to reach every Rwandan.</p>
        </article>
        <article className="feature-card">
          <h3 className="feature-title">Sovereign</h3>
          <p className="feature-text">Data owned by Rwanda with post-quantum security and blockchain governance.</p>
        </article>
        <article className="feature-card">
          <h3 className="feature-title">Inclusive</h3>
          <p className="feature-text">Multilingual, accessible experiences for citizens and diaspora.</p>
        </article>
      </div>
    </section>
  )
}
