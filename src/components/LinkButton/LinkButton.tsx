import './LinkButton.css'
import Link from 'next/link'

interface Props {
  title: string
  href: string
}

const LinkButton = ({ title, href }: Props) => (
  <Link className="cmp-link-button" href={href}>
    {title}
  </Link>
)

export default LinkButton
