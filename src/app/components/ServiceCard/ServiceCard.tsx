import './ServiceCard.css'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  url: string
  img: string
}

const ServiceCard = ({ url, title, img }: Props) => (
  <Link className="cmp-service-card text" href={url}>
    <Image src="/hero.webp" width={640} height={640} alt="P" />
    {title}
  </Link>
)

export default ServiceCard
