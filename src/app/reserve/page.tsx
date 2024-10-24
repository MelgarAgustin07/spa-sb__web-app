import { SimpleHero } from '@/components'
import { ProtectPage } from '@/guards'
import { ReserveForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { page, title } = jsonData.pages.dynamic.reserve

export const metadata: Metadata = {
  title: getTitle(title),
}

const Reserve = () => (
  <ProtectPage {...{ page }}>
    <SimpleHero title={title} />
    <section className="section-form size-l">
      <ReserveForm />
    </section>
  </ProtectPage>
)

export default Reserve
