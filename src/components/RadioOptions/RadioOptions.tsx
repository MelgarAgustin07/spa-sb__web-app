import './RadioOptions.css'
import { ChangeEventHandler } from 'react'
import { classList } from '@/helpers'

interface Props<T> {
  id: string
  title: string
  options: {
    title: string
    value: T
  }[]
  required?: boolean
  selectedValue?: T
  size?: 'l'
  handleChange?: ChangeEventHandler<HTMLInputElement>
}

const RadioOptions = <T extends string | number>({
  id,
  title,
  options,
  required,
  selectedValue,
  size,
  handleChange,
}: Props<T>) => (
  <fieldset className={classList('cmp-radio-options', size)}>
    <legend>
      {title} {required && <span>*</span>}
    </legend>
    {options.map(({ title, value }) => (
      <label key={value}>
        <input
          name={id}
          type="radio"
          checked={selectedValue === value}
          {...{ value, required }}
          onChange={handleChange}
        />
        {title}
      </label>
    ))}
  </fieldset>
)

export default RadioOptions
