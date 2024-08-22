import './Service.css'
import Image from 'next/image'

interface Props {
  serviceKey: string
  title: string
  works: {
    title: string
    desc: string
  }[]
}

const Service = ({ serviceKey, title: serviceTitle, works }: Props) => (
  <section className="cmp-service" id={serviceKey}>
    <h2 className="text">{serviceTitle}</h2>
    <ul>
      {works.map(({ title, desc }, index) => (
        <li key={index}>
          <div>
            <h3 className="text">{title}</h3>
            <p className="text">{desc}</p>
          </div>
          <Image
            src={`/hero.webp`}
            // src={`/services/${serviceKey}/${index}.webp`}
            width={640}
            height={640}
            alt={`Foto del trabajo "${title}" en ${serviceTitle}`}
          />
        </li>
      ))}
    </ul>
  </section>
)

export default Service
