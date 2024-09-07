import './page.css'
import { SimpleHero } from '@/components'
import { ReserveForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.login

export const metadata: Metadata = {
  title: getTitle(title),
}

const Reserve = () => (
  <>
    <SimpleHero title={title} />
    <section>
      <ReserveForm />
    </section>
  </>
)

export default Reserve
