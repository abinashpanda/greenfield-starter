import React, { useCallback, useContext, useState } from 'react'
import AuthContext from 'contexts/AuthContext'
import { Form, Input, Button } from 'antd'

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async ({ email }) => {
      setLoading(true)
      await forgotPassword(email)
      setLoading(false)
    },
    [forgotPassword],
  )

  return (
    <div className="space-y-4">
      <div className="relative z-10 text-xl font-bold text-gray-800">
        Reset Password
      </div>
      <Form onFinish={handleSubmit} layout="vertical" colon={false}>
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
          <Input name="email" placeholder="Email" />
        </Form.Item>
        <Button
          className="w-full"
          htmlType="submit"
          loading={loading}
          type="primary"
        >
          Reset Password
        </Button>
      </Form>
    </div>
  )
}

export default ForgotPassword
