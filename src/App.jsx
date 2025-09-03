import React from 'react'

export default function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Welcome</h1>
        <p className="app-subtitle">Your app is running on Vite + React (port 3000).</p>
      </header>
      <section className="app-content">
        <button className="primary-button" onClick={() => alert('It works!')}>Test Action</button>
      </section>
    </main>
  )
}
