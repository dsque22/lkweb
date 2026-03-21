'use client'

import { useState, useRef, useEffect } from 'react'

interface Props {
  src?: string
  poster?: string
  placeholder?: string
  aspectRatio?: string
}

export function VideoTile({ src, poster, placeholder = '[Client video]', aspectRatio = '9/16' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Seek to first frame to avoid black thumbnail when no poster is provided
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handleMetadata = () => {
      video.currentTime = 0.1
    }
    video.addEventListener('loadedmetadata', handleMetadata)
    return () => video.removeEventListener('loadedmetadata', handleMetadata)
  }, [src])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  if (!src) {
    return (
      <div
        style={{
          position: 'relative',
          aspectRatio,
          background: 'var(--bg-dark)',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', opacity: 0.3 }}>▶</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-jost)', padding: '0 1rem' }}>
            {placeholder}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        aspectRatio,
        background: '#111',
        borderRadius: '2px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={togglePlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Overlay: dims slightly when not playing, transparent when playing */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: playing ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.22)',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Play button — visible when not playing, fades on hover when playing */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: playing ? (hovered ? 0.6 : 0) : 1,
            transform: playing ? 'scale(0.85)' : 'scale(1)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
          }}
        >
          {playing ? (
            /* Pause icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3" y="2" width="4" height="14" rx="1" fill="#111" />
              <rect x="11" y="2" width="4" height="14" rx="1" fill="#111" />
            </svg>
          ) : (
            /* Play icon — nudge right for optical centering */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: '3px' }}>
              <path d="M4 2.5L15 9L4 15.5V2.5Z" fill="#111" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}
