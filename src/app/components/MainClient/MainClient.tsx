'use client'

import { ReactNode, useEffect } from 'react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { PrivateInterceptor, PublicInterceptor } from '@/interceptors'
import { Navs } from './components'

interface Props {
  children: ReactNode
  session: Session | null
}

const MainClient = ({ children, session }: Props) => {
  useEffect(() => {
    PublicInterceptor()
    PrivateInterceptor()
  }, [])

  return (
    <SessionProvider {...{ session }}>
      <Navs />
      <main>{children}</main>
    </SessionProvider>
  )
}

export default MainClient
