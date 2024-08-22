import './Hero.css'
import Image from 'next/image'

interface Props {
  title: string
  children?: React.ReactNode
}

const Hero = ({ title, children }: Props) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <Image src="/hero.webp" width={1920} height={1920} alt="" />
      {children}
    </section>
  )
}

export default Hero
