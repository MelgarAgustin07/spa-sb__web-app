import './LinkButton.css'
import Link from 'next/link'
import { Icon } from '..'
import { classList } from '@/helpers'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  faIcon?: string
  href: string
  type?: 'secondary'
  size?: 'l'
}

const LinkButton = ({ title, faIcon, href, type, size, ...rest }: Props) => (
  <Link
    className={classList('cmp-link-button', 'button-look', type, size)}
    href={href}
    {...rest}
  >
    {title}
    {faIcon && <Icon faIcon={faIcon} />}
  </Link>
)

export default LinkButton
