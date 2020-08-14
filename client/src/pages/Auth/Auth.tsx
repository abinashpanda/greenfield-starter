import React, { useContext } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import Route from 'components/Route'
import AuthContext from 'contexts/AuthContext'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

const Auth = () => {
  const { user } = useContext(AuthContext)

  if (user) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <div className="relative w-full h-screen">
      <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <div className="p-4 bg-white rounded-md shadow w-80">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/reset-password" component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Auth
