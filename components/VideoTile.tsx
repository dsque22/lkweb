'use client'

import { useState, useRef } from 'react'

interface Props {
  src?: string
  placeholder?: string
  aspectRatio?: string
}

export function VideoTile({ src, placeholder = '[Client video]', aspectRatio = '9/16' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const handleClick = () => {
    if (!videoRef.current) return
    if (playing) {
      setMuted(m => {
        if (videoRef.current) videoRef.current.muted = !m
        return !m
      })
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
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-jost)',
              padding: '0 1rem',
            }}
          >
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
        background: 'var(--bg-dark)',
        borderRadius: '2px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onMouseEnter={() => {
          if (!playing && videoRef.current) {
            videoRef.current.play()
            setPlaying(true)
          }
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.75rem',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
        className="video-controls"
      >
        <span
          style={{
            color: 'white',
            fontSize: '0.75rem',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.25rem 0.5rem',
            borderRadius: '2px',
          }}
        >
          {playing ? (muted ? 'Click to unmute' : 'Unmuted') : 'Hover to play'}
        </span>
      </div>
      <style>{`.video-controls { opacity: 0; } div:hover > .video-controls { opacity: 1; }`}</style>
    </div>
  )
}
