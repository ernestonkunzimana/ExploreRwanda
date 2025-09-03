import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoPlayer({ src, poster = '', className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let hls

    if (src && Hls.isSupported() && src.endsWith('.m3u8')) {
      hls = new Hls({ maxBufferLength: 10 })
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (src) {
      video.src = src
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <div className={`video-container ${className}`}>
      <video ref={videoRef} poster={poster} controls playsInline className="video-element" />
    </div>
  )
}
