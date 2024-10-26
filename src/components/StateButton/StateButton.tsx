import './StateButton.css'
import { Icon, Loader } from '..'
import { ActionState } from '@/hooks'
import { classList } from '@/helpers'

interface Props {
  text?: string
  title: string
  faIcon?: string
  actionState: ActionState
}

const StateButton = ({
  text,
  title,
  faIcon = 'fa-solid fa-arrow-right',
  actionState,
}: Props) => (
  <button
    className="cmp-state-button button-look"
    title={title}
    disabled={actionState !== 'ready'}
  >
    <Loader handlingClass={classList({ active: actionState === 'loading' })} />
    <Icon
      faIcon="fa-solid fa-xmark"
      handlingClass={classList({ active: actionState === 'error' })}
    />
    <Icon
      faIcon="fa-solid fa-check"
      handlingClass={classList({ active: actionState === 'success' })}
    />
    <div className={classList('body', { active: actionState === 'ready' })}>
      {text}
      <Icon faIcon={faIcon} />
    </div>
  </button>
)

export default StateButton
