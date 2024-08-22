import './Section.css'
import { Separator } from '@/components'

interface Props {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => (
  <section className="cmp-section">
    <h4>{title}</h4>
    <Separator />
    <div>{children}</div>
  </section>
)

export default Section
