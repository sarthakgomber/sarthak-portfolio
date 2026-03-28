'use client'

export default function VideoBackground() {
  return (
    <div className="video-bg">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mp4"
      />
    </div>
  )
}