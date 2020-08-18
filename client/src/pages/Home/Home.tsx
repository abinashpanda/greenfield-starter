import React, { useState, useEffect } from 'react'
import moment from 'moment'
import AppShell from 'components/AppShell'

const Home = () => {
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
    <AppShell>
      <div className="flex items-center justify-center h-full bg-gray-900">
        <div className="space-x-4 text-6xl font-semibold text-white text-num">
          <span>{now.format('HH:mm:ss')}</span>
          <span className="text-lg">{now.format('a').toUpperCase()}</span>
        </div>
      </div>
    </AppShell>
  )
}

export default Home
