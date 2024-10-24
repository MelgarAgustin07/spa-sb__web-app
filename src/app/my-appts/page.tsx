import { SimpleHero } from '@/components'
import { ProtectPage } from '@/guards'
import { MyApptsSection } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { page, title } = jsonData.pages.dynamic.myAppts

export const metadata: Metadata = {
  title: getTitle(title),
}

const MyAppts = () => (
  <ProtectPage {...{ page }}>
    <SimpleHero title={title} />
    <MyApptsSection />
  </ProtectPage>
)

export default MyAppts
