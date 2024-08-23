import './page.css'
import { SimpleHero } from '@/components'
import { Service } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title, sections } = jsonData.pages.services

export const metadata: Metadata = {
  title: getTitle(title),
}

const Services = () => {
  return (
    <>
      <SimpleHero title={title} />
      <section className="explanation-services">
        {sections.map(service => (
          <Service key={service.serviceKey} {...service} />
        ))}
      </section>
    </>
  )
}

export default Services