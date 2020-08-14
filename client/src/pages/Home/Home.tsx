import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Home: React.FC = () => {
  const [now, setNow] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div
        className="space-x-4 text-6xl font-semibold text-white"
        style={{
          fontFeatureSettings: 'tnum',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <span>{now.format('HH:mm:ss')}</span>
        <span className="text-lg">{now.format('a').toUpperCase()}</span>
      </div>
    </div>
  )
}

export default Home
