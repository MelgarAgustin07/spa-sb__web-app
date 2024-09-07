import './page.css'
import Image from 'next/image'
import { Hero } from '@/components'
import { Review, ServiceCard } from './components'
import jsonData from '@/data.json'

const { pages } = jsonData
const { home } = pages
const { title, sections } = home
const { philosophy, services, reviews } = sections

const betterReviews = [
  {
    id: 1,
    rating: 5,
    comment:
      'Un oasis en la ciudad. El servicio fue impecable y me fui sintiéndome completamente renovada.',
  },
  {
    id: 2,
    rating: 5,
    comment:
      'Desde que entré, me sentí en otro mundo. El personal fue muy atento, y la experiencia completa fue increíble.',
  },
  {
    id: 3,
    rating: 4,
    comment:
      'Muy buena experiencia, me fui con una sensación de paz total. Las instalaciones son excelentes y el personal muy profesional.',
  },
  {
    id: 4,
    rating: 4,
    comment:
      'Disfruté mucho mi visita al SPA. Los tratamientos fueron muy buenos y el ambiente es perfecto para desconectar.',
  },
]

const Home = () => (
  <>
    <Hero title={title} />
    <section className="philosophy">
      <Image src="/home/philosophy.webp" width={720} height={720} alt="" />
      <div>
        <h2>{philosophy.title}</h2>
        <p className="text">{philosophy.text}</p>
      </div>
    </section>
    <section className="services full-background">
      <h2>{services.title}</h2>
      <div className="items">
        {pages.services.sections.map(({ serviceKey, title }) => (
          <ServiceCard
            key={serviceKey}
            url={`/services#${serviceKey}`}
            title={title}
            img="webp"
          />
        ))}
      </div>
    </section>
    <section className="reviews">
      <h2>{reviews.title}</h2>
      <ul>
        {betterReviews.map(({ id, rating, comment }) => (
          <Review key={id} rating={rating} comment={comment} />
        ))}
      </ul>
    </section>
  </>
)

export default Home
