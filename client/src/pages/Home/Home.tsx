import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import AuthContext from 'contexts/AuthContext'

const Home = () => {
  const { signOut } = useContext(AuthContext)

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
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-900">
      <Button
        className="absolute top-0 right-0 m-4"
        type="primary"
        icon={<LogoutOutlined />}
        onClick={signOut}
      >
        Signout
      </Button>

      <div className="space-x-4 text-6xl font-semibold text-white text-num">
        <span>{now.format('HH:mm:ss')}</span>
        <span className="text-lg">{now.format('a').toUpperCase()}</span>
      </div>
    </div>
  )
}

export default Home
