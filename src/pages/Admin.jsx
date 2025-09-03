import React, { useEffect, useState } from 'react'

export default function Admin() {
  const [config, setConfig] = useState({ liveHlsUrl: '' })
  useEffect(() => {
    const saved = localStorage.getItem('riech-admin-config')
    if (saved) setConfig(JSON.parse(saved))
  }, [])
  const update = (e) => {
    const next = { ...config, [e.target.name]: e.target.value }
    setConfig(next)
    localStorage.setItem('riech-admin-config', JSON.stringify(next))
  }
  return (
    <section className="page admin-page">
      <h2 className="section-title">Admin Settings</h2>
      <div className="form-grid">
        <label className="form-field">
          <span className="form-label">Live HLS URL</span>
          <input className="form-input" name="liveHlsUrl" value={config.liveHlsUrl} onChange={update} placeholder="https://...m3u8" />
          <span className="form-hint">Stored locally for preview. Use env VITE_LIVE_HLS_URL in production.</span>
        </label>
      </div>
    </section>
  )
}
