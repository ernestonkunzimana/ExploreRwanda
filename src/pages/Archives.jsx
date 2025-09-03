import React, { useEffect, useState } from 'react'
import VideoPlayer from '../components/VideoPlayer.jsx'

export default function Archives() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(null)
  useEffect(() => {
    fetch('/data/archives.json').then(r => r.json()).then((data) => {
      setItems(data)
      setActive(data[0] || null)
    }).catch(() => setItems([]))
  }, [])

  return (
    <section className="page archives-page">
      <h2 className="section-title">Archives</h2>
      <div className="archives-layout">
        <aside className="archive-list">
          {items.map((it) => (
            <button key={it.id} className={`archive-item ${active && active.id === it.id ? 'is-active' : ''}`} onClick={() => setActive(it)}>
              <div className="archive-meta">
                <span className="archive-date">{new Date(it.date).toLocaleDateString()}</span>
                <span className="archive-tag">{it.tag}</span>
              </div>
              <div className="archive-title">{it.title}</div>
            </button>
          ))}
        </aside>
        <div className="archive-viewer">
          {active ? (
            <>
              <h3 className="viewer-title">{active.title}</h3>
              {active.src ? (
                <VideoPlayer src={active.src} />
              ) : (
                <p className="notice">No media available.</p>
              )}
              <p className="viewer-desc">{active.description}</p>
            </>
          ) : (
            <p className="notice">Select an item to view.</p>
          )}
        </div>
      </div>
    </section>
  )
}
