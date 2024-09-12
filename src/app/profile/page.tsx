'use client'

import { SessionProvider } from 'next-auth/react'
import { SimpleHero } from '@/components'
import { Protect } from '@/guards'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'
import { ProfileSection } from './components'

const { title } = jsonData.pages.dynamic.profile

const Profile = () => (
  <SessionProvider>
    <Protect>
      <SimpleHero title={title} />
      <ProfileSection />
    </Protect>
  </SessionProvider>
)

export default Profile
