import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import AuthContext from 'contexts/AuthContext'

const Home = () => {
  const { user, signOut } = useContext(AuthContext)

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
      <div className="absolute top-0 left-0 right-0 flex items-center justify-end p-4 space-x-8">
        {user ? (
          <div className="flex items-center space-x-2">
            <UserOutlined className="text-gray-500" />
            <span className="text-gray-400">{user.name}</span>
          </div>
        ) : null}
        <Button type="primary" icon={<LogoutOutlined />} onClick={signOut}>
          Signout
        </Button>
      </div>

      <div className="space-x-4 text-6xl font-semibold text-white text-num">
        <span>{now.format('HH:mm:ss')}</span>
        <span className="text-lg">{now.format('a').toUpperCase()}</span>
      </div>
    </div>
  )
}

export default Home
