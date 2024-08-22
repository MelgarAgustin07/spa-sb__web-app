import './SimpleHero.css'
import Image from 'next/image'

interface Props {
  title: string
}

const SimpleHero = ({ title }: Props) => {
  return (
    <section className="cmp-simple-hero">
      <h1>{title}</h1>
      <Image src="/hero.webp" width={1920} height={1920} alt="" />
    </section>
  )
}

export default SimpleHero
