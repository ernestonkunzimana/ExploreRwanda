import React from 'react'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { config } from '../services/config.js'

export default function Live() {
  return (
    <section className="page live-page">
      <h2 className="section-title">Live Broadcast</h2>
      {config.liveHlsUrl ? (
        <VideoPlayer src={config.liveHlsUrl} className="live-player" />
      ) : (
        <div className="notice">Live stream not configured. Set VITE_LIVE_HLS_URL.</div>
      )}
    </section>
  )
}
