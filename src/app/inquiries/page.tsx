import { SimpleHero } from '@/components'
import { ProtectPage } from '@/guards'
import { InquiriesSection } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { page, title } = jsonData.pages.dynamic.inquiries

export const metadata: Metadata = {
  title: getTitle(title),
}

const Inquiries = () => (
  <ProtectPage {...{ page }}>
    <SimpleHero title={title} />
    <InquiriesSection />
  </ProtectPage>
)

export default Inquiries
