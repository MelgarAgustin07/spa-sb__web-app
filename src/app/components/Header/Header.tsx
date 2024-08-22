import './Header.css'
import Image from 'next/image'
import Link from 'next/link'
import { reassemble } from '@/helpers'
import jsonData from '@/data.json'
const { pages } = jsonData

const links = reassemble(pages, (_, { page, title }) => ({
  href: `/${page}`,
  title,
}))

const Header = () => (
  <header className="cmp-header">
    {/* <Image className="logo" src="/next.svg" width={24} height={24} alt="P" /> */}
    <nav>
      {links.map(({ href, title }) => (
        <Link key={href} href={href}>
          {title}
        </Link>
      ))}
    </nav>
  </header>
)

export default Header
