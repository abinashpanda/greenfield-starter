import React, { useContext } from 'react'
import clsx from 'clsx'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import AuthContext from 'contexts/AuthContext'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const AppShell = ({ children, className, style }: Props) => {
  const { user, signOut } = useContext(AuthContext)

  return (
    <div
      className={clsx('flex flex-col h-screen w-screen', className)}
      style={style}
    >
      <div className="relative z-10 flex items-center justify-end px-4 py-2 space-x-4 bg-white shadow">
        {user ? (
          <div className="flex items-center space-x-2">
            <UserOutlined className="text-gray-700" />
            <span className="text-gray-800">{user.name}</span>
          </div>
        ) : null}
        <Button type="primary" icon={<LogoutOutlined />} onClick={signOut}>
          Signout
        </Button>
      </div>
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
        {children}
      </div>
    </div>
  )
}

export default AppShell
