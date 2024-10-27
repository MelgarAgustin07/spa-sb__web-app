'use client'

import './Appointment.css'
import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useActionState } from '@/hooks'
import { Icon, LinkButton, SecureHoldButton, Separator } from '@/components'
import { AppError, classList } from '@/helpers'
import { AppointmentModel } from '@/models'
import { AppointmentService } from '@/services'
import { format } from '@formkit/tempo'
import jsonData from '@/data.json'

const { sections } = jsonData.pages.stable.services

const treatments = sections.flatMap(section => section.treatments)

const stateMatcher: Record<AppointmentModel.State, string> = {
  pending: 'Pendiente',
  paid: 'Pagado',
  cancelled: 'Cancelado',
  completed: 'Completado',
}

interface Props {
  confirmCancel: () => void
}

const Appointment = ({
  id,
  idTreatment,
  date,
  hour,
  comments,
  state,
  createdAt,
  confirmCancel,
}: AppointmentModel.Data & Props) => {
  const pathname = usePathname()
  const { actionState, setLoading, setError, setSuccess } = useActionState()

  const handleCancel = useCallback(async () => {
    await setLoading()
    const answerResponse = await AppointmentService.cancel({ id })

    if (!answerResponse || answerResponse instanceof AppError) {
      await setError()
    } else {
      await setSuccess()
      confirmCancel()
    }
  }, [])

  const infoLabels = [
    {
      title: 'Tratamiento',
      value: treatments[idTreatment - 1].title,
      highlight: true,
    },
    {
      title: 'Fecha de solicitud',
      value: format(createdAt, { date: 'short', time: 'short' }),
    },
  ]

  return (
    <li className="appointment">
      <small className={state}>{stateMatcher[state]}</small>
      <div className="content">
        <header>
          <div className="group">
            <Icon faIcon="fa-regular fa-calendar" />
            <h2 className="text">
              {format(`${date}T${hour}`, { date: 'medium', time: 'short' })}
            </h2>
          </div>
          <div className="actions">
            {(state === AppointmentModel.State.PENDING ||
              state === AppointmentModel.State.PAID) && (
              <SecureHoldButton
                text="Cancelar"
                title="Cancelar este turno"
                actionState={actionState}
                type="secondary"
                action={handleCancel}
              />
            )}
            {state === AppointmentModel.State.PENDING && (
              <LinkButton
                title="Pagar"
                faIcon="fa-solid fa-credit-card"
                href={`${pathname}/pay/${id}`}
              />
            )}
          </div>
        </header>
        <Separator />
        <div className="info">
          {infoLabels.map(({ title, value, highlight = false }) => (
            <div className={classList('item', { highlight })} key={title}>
              <small>{title}:</small>
              <small className="value">{value}</small>
            </div>
          ))}
        </div>
        {comments && (
          <div className="comments">
            <small>Comentario enviado:</small>
            <p className="text">{comments}</p>
          </div>
        )}
      </div>
    </li>
  )
}

export default Appointment
