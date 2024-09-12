import { SimpleHero } from '@/components'
import { ReserveForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.reserve

const Reserve = () => {
  return (
    <>
      <SimpleHero title={title} />
      <section className="section-form size-l">
        <ReserveForm />
      </section>
    </>
  )
}

export default Reserve
