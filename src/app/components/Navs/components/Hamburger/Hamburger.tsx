import './Hamburger.css'
import { classList } from '@/helpers'

interface Props {
  isOpen: boolean
  handleClick: () => void
}

const Hamburger = ({ isOpen, handleClick }: Props) => (
  <button
    className={classList('cmp-hamburger', { open: isOpen })}
    title={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    onClick={handleClick}
  >
    <span className="hamburger-icon">
      <span className="bar top" />
      <span className="bar mid" />
      <span className="bar bot" />
    </span>
    <span className="x-icon">
      <span className="bar a" />
      <span className="bar b" />
    </span>
  </button>
)

export default Hamburger
