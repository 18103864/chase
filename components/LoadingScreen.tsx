import { useState, useEffect } from 'react'

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onLoadingComplete()
    }, 4000)

    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5 // Increase by 5% every 200ms to reach 100% in 4 seconds
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl aspect-video mb-4">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg shadow-lg"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vidu--4-2024-11-24T22_18_37Z-QMBHoxw2aes3FbORFBLcT1PEpVlDta.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center">
        <p className="text-2xl text-black mb-2">HONK HONK!!!!</p>
        <p className="text-3xl font-bold text-orange-500">{percentage}%</p>
      </div>
    </div>
  )
}

