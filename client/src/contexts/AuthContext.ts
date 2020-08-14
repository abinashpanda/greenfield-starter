import { createContext } from 'react'
import { User } from 'types/user'

const AuthContext = createContext<{
  jwt?: string
  user?: User
  signOut: () => Promise<boolean>
  signInWithEmail: (signIndata: {
    email: string
    password: string
    rememberMe?: boolean
  }) => Promise<boolean>
  signUpWithEmail: (signUpData: {
    name: string
    email: string
    password: string
    rememberMe?: boolean
  }) => Promise<boolean>
  forgotPassword: (email: string) => Promise<boolean>
}>({
  jwt: undefined,
  user: undefined,
  signOut: async () => false,
  signInWithEmail: async () => false,
  signUpWithEmail: async () => false,
  forgotPassword: async () => false,
})

export default AuthContext
