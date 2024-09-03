import './page.css'
import Image from 'next/image'
import { Hero } from '@/components'
import { Reviews, ServiceCard } from './components'
import jsonData from '@/data.json'

const { pages } = jsonData
const { home } = pages.stable
const { title, sections } = home
const { aboutUs, services } = sections

const Home = () => (
  <>
    <Hero title={title} />
    <section className="about-us">
      <Image
        src={`/home/${aboutUs.img.file}`}
        width={1024}
        height={1024}
        alt={aboutUs.img.alt}
      />
      <div>
        <h2>{aboutUs.title}</h2>
        <div className="paragraphs">
          {aboutUs.text.map((paragraph, index) => (
            <p key={index} className="text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
    <section className="services full-background">
      <h2>{services.title}</h2>
      <div className="items">
        {pages.stable.services.sections.map(service => (
          <ServiceCard key={service.serviceKey} {...service} />
        ))}
      </div>
    </section>
    <Reviews />
  </>
)

export default Home
