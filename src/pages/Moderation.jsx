import React, { useEffect, useState } from 'react'

export default function Moderation() {
  const [queue, setQueue] = useState([])
  useEffect(() => {
    fetch('/data/moderation.json').then(r => r.json()).then(setQueue).catch(() => setQueue([]))
  }, [])

  const decisions = [
    { key: 'approve', label: 'Approve' },
    { key: 'educate', label: 'Educate' },
    { key: 'reject', label: 'Reject' }
  ]

  return (
    <section className="page moderation-page">
      <h2 className="section-title">AI Moderation Review</h2>
      <table className="mod-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Content</th>
            <th>Confidence</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {queue.map(item => (
            <tr key={item.id}>
              <td>{new Date(item.ts).toLocaleString()}</td>
              <td>{item.type}</td>
              <td className="mod-content">{item.preview}</td>
              <td>{Math.round(item.score * 100)}%</td>
              <td className="mod-actions">
                {decisions.map(d => (
                  <button key={d.key} className={`action-btn action-${d.key}`}>{d.label}</button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
