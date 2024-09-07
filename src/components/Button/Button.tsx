import './Button.css'
import { Icon } from '..'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  faIcon?: string
  hideText?: boolean
}

const Button = ({ title, faIcon, hideText, ...rest }: Props) => (
  <button className="cmp-button" title={title} {...rest}>
    {!hideText && title}
    {faIcon && <Icon faIcon={faIcon} />}
  </button>
)

export default Button
