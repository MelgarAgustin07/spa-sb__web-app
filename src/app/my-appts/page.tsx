'use client'

import { SessionProvider } from 'next-auth/react'
import { SimpleHero } from '@/components'
import { MyApptsSection } from './components'
import { Protect } from '@/guards'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.myAppts

const MyAppts = () => (
  <SessionProvider>
    <Protect>
      <SimpleHero title={title} />
      <MyApptsSection />
    </Protect>
  </SessionProvider>
)

export default MyAppts
