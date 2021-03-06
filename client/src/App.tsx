import React from 'react'
import { Switch } from 'react-router-dom'
import Auth from 'components/Auth'
import Route from 'components/Route'
import AuthPage from 'pages/Auth'
import { Spin } from 'antd'
import Apollo from 'components/Apollo'

const Home = React.lazy(() => import('pages/Home'))

const App = () => {
  return (
    <Auth>
      <Apollo>
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-screen">
              <Spin tip="Loading App..." />
            </div>
          }
        >
          <Switch>
            <Route
              path={['/login', '/signup', '/reset-password']}
              component={AuthPage}
            />
            <Route path="/" exact component={Home} protectedRoute />
          </Switch>
        </React.Suspense>
      </Apollo>
    </Auth>
  )
}

export default App
