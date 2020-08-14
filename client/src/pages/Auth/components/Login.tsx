import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Checkbox, Form } from 'antd'
import AuthContext from 'contexts/AuthContext'

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async ({ email, password, rememberMe }) => {
      setLoading(true)
      if (!(await signInWithEmail({ email, password, rememberMe }))) {
        setLoading(false)
      }
    },
    [signInWithEmail],
  )

  return (
    <div className="space-y-4">
      <div className="relative z-10 text-xl font-bold text-gray-800">Login</div>
      <Form
        layout="vertical"
        colon={false}
        onFinish={handleSubmit}
        name="login"
        initialValues={{ rememberMe: true }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Email is required' },
            {
              type: 'email',
              message: 'Email is invalid',
              validateTrigger: 'onblur',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <div className="flex items-center justify-between mb-4">
          <Form.Item name="rememberMe" valuePropName="checked" className="mb-0">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <Link
            to="/reset-password"
            className="text-sm font-medium text-center text-blue-500"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          className="w-full"
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Login
        </Button>
      </Form>
      <div className="relative h-6">
        <div className="absolute left-0 right-0 border-b border-gray-200 top-1/2" />
        <div className="absolute px-2 text-sm text-center text-gray-400 whitespace-no-wrap transform -translate-x-1/2 -translate-y-1/2 bg-white left-1/2 top-1/2">
          or get started
        </div>
      </div>
      <Link to="/signup" className="block">
        <Button className="w-full" type="default">
          Sign up
        </Button>
      </Link>
    </div>
  )
}

export default Login
