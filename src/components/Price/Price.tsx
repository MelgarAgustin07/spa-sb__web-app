import './Price.css'

interface Props {
  amount: number
}

const Price = ({ amount }: Props) => {
  // Convertir la parte entera a string con separador de miles
  const integer = Math.floor(amount).toLocaleString('es-AR')

  // Obtener los decimales y limitar a dos dígitos
  const decimal = (amount % 1).toFixed(2).slice(2)

  return (
    <span className="cmp-price">
      <span className="currency">$</span>
      <span className="value">
        {integer}
        <span className="decimal">{decimal}</span>
      </span>
    </span>
  )
}

export default Price
