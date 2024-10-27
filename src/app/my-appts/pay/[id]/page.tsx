import { SimpleHero } from '@/components'
import { PayForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.myAppts.pages.pay

export const metadata: Metadata = {
  title: getTitle(title),
}

interface Props {
  params: {
    id: string
  }
  searchParams: {
    'id-treatment': string
  }
}

const Pay = ({ params, searchParams }: Props) => (
  <>
    <SimpleHero title={title} />
    <section className="section-form">
      <PayForm
        id={Number(params.id)}
        idTreatment={Number(searchParams['id-treatment'])}
      />
    </section>
  </>
)

export default Pay
