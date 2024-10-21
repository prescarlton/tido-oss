'use client'

import { Session, User } from 'lucia'
import { createContext, ReactNode, useContext } from 'react'

interface SessionData {
  user: User | null
  session: Session | null
}
const SessionContext = createContext({} as SessionData)

interface SessionProviderProps {
  children: ReactNode
  value: SessionData
}

export default function SessionProvider({
  children,
  value,
}: SessionProviderProps) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
