'use client'

import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import { PrivateInterceptor, PublicInterceptor } from '@/interceptors'
import { SimpleHero } from '@/components'
import { ProfileSection } from './components'
import { Protect } from '@/guards'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.profile

const Profile = () => {
  useEffect(() => {
    PublicInterceptor()
    PrivateInterceptor()
  }, [])

  return (
    <SessionProvider>
      <Protect>
        <SimpleHero title={title} />
        <ProfileSection />
      </Protect>
    </SessionProvider>
  )
}

export default Profile
