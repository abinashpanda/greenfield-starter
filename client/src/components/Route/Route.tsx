import React, { useContext } from 'react'
import {
  RouteProps,
  Route as ReactRouterRoute,
  Redirect,
} from 'react-router-dom'
import AuthContext from 'contexts/AuthContext'

interface Props extends RouteProps {
  protectedRoute?: boolean
}

const Route: React.FC<Props> = ({
  protectedRoute,
  location,
  ...routeProps
}) => {
  const { jwt, user } = useContext(AuthContext)

  if (protectedRoute && !(jwt && user)) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { redirectedFrom: location ? location.pathname : undefined },
        }}
      />
    )
  }

  return <ReactRouterRoute {...routeProps} />
}

Route.defaultProps = {
  protectedRoute: false,
}

export default Route
