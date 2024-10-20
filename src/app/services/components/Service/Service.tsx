import './ServiceV.css'
import Image from 'next/image'

interface Props {
  serviceKey: string
  title: string
  treatments: {
    title: string
    price: number
    desc: string
  }[]
}

const Service = ({ serviceKey, title: serviceTitle, treatments }: Props) => (
  <section className="cmp-service" id={serviceKey}>
    <h2 className="text">{serviceTitle}</h2>
    <ul>
      {treatments.map(({ title, price, desc }, index) => (
        <li key={index}>
          <div>
            <h3 className="text">
              {title}
              <strong>$ {price}</strong>
            </h3>
            <p className="text">{desc}</p>
          </div>
          <Image
            src={`/services/${serviceKey}-${index}.webp`}
            width={1280}
            height={720}
            alt={`Foto del tratamiento "${title}" en ${serviceTitle}. En el Spa Sentirse Bien`}
          />
        </li>
      ))}
    </ul>
  </section>
)

export default Service
