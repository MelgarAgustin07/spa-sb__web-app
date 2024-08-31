import './TextArea.css'
import { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hideLabel?: boolean
}

const TextArea = ({
  id,
  title,
  hideLabel = false,
  required,
  ...rest
}: Props) => {
  const textareaTitle = required ? `${title} (Requerido)` : title

  return (
    <div className="cmp-text-area control">
      {!hideLabel && (
        <label htmlFor={id}>
          {title}
          {required && <span>*</span>}
        </label>
      )}
      <textarea
        className="text"
        id={id}
        name={id}
        title={textareaTitle}
        required={required}
        {...rest}
      />
    </div>
  )
}

export default TextArea
