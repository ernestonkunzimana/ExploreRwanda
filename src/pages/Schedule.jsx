import React, { useEffect, useState } from 'react'

export default function Schedule() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch('/data/schedule.json').then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])
  return (
    <section className="page schedule-page">
      <h2 className="section-title">Event Schedule</h2>
      <ul className="event-list">
        {events.map(ev => (
          <li key={ev.id} className="event-item">
            <div className="event-meta">
              <span className="event-date">{new Date(ev.start).toLocaleString()}</span>
              <span className="event-location">{ev.location}</span>
            </div>
            <h3 className="event-title">{ev.title}</h3>
            <p className="event-desc">{ev.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
