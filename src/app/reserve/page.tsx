'use client'

import { SessionProvider } from 'next-auth/react'
import { SimpleHero } from '@/components'
import { ReserveForm } from './components'
import { Protect } from '@/guards'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.reserve

const Reserve = () => (
  <SessionProvider>
    <Protect>
      <SimpleHero title={title} />
      <section className="section-form size-l">
        <ReserveForm />
      </section>
    </Protect>
  </SessionProvider>
)

export default Reserve
