import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'
import { SocialNet } from '@/components'
import { Section } from './components'
import { reassemble } from '@/helpers'
import jsonData from '@/data.json'

const { socialNets, footer, pages } = jsonData
const { services } = jsonData.pages

const { sections, copyright, madeBy } = footer

const links = reassemble(pages, (_, { page, title }) => ({
  href: `/${page}`,
  title,
}))

const Footer = () => (
  <footer className="cmp-footer full-background">
    <div className="main">
      <Image
        className="logo"
        src="/logo.svg"
        width={128}
        height={128}
        alt="P"
      />
      <div className="sections">
        <Section title={sections[0]}>
          {links.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </Section>
        <Section title={sections[1]}>
          {services.sections.map(({ sectionKey, title }) => (
            <Link key={sectionKey} href={`/services#${sectionKey}`}>
              {title}
            </Link>
          ))}
        </Section>
        <Section title={sections[2]}>
          {socialNets.items.map(({ name, url, faIcon }) => (
            <SocialNet
              key={name}
              url={url}
              title={`${socialNets.title} ${name}`}
              faIcon={`fa-brands fa-${faIcon}`}
            />
          ))}
        </Section>
      </div>
    </div>
    <div className="bot">
      <small className="text">{copyright}</small>
      <small className="text">
        {madeBy.text}{' '}
        <a href={madeBy.link.url} target="_blank" rel="noopener">
          {madeBy.link.title}
        </a>
      </small>
    </div>
  </footer>
)

export default Footer
