'use client'

import './PayForm.css'
import { ChangeEventHandler, useCallback, useMemo, useState } from 'react'
import { useSubmitAction, useShowBanner } from '@/hooks'
import { Banner, Input, Price, RadioOptions, StateButton } from '@/components'
import { AppointmentModel } from '@/models'
import { AppointmentService } from '@/services'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { stable, dynamic } = jsonData.pages
const { sections } = stable.services
const { form, thanks } = dynamic.myAppts.pages.pay
const { title, button } = form

const treatments = sections.flatMap(section => section.treatments)

type InstallmentCount = 1 | 3 | 6 | 12

interface Props {
  id: number
  idTreatment: number
}

const PayForm = ({ id, idTreatment }: Props) => {
  const amount = useMemo(() => treatments[idTreatment].price, [])

  const [cardType, setCardType] = useState(AppointmentModel.CardType.DEBIT)

  const handleCardTypeChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      const { value } = event.target

      setCardType(value as AppointmentModel.CardType)
    }, [])

  const cardOptions = useMemo(
    () => [
      { title: 'Débito', value: AppointmentModel.CardType.DEBIT },
      { title: 'Crédito', value: AppointmentModel.CardType.CREDIT },
    ],
    []
  )

  const [installmentCount, setInstallmentCount] = useState<InstallmentCount>(1)

  const handleInstallmentCountChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      const { value } = event.target

      setInstallmentCount(Number(value) as InstallmentCount)
    }, [])

  const installmentOptions = useMemo(() => {
    const installments: InstallmentCount[] = [1, 3, 6, 12]

    return installments.map(number => ({
      title: String(number),
      value: number,
    }))
  }, [])

  const { actionState, handleSubmit } = useSubmitAction(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const lastCardDigits = Number(formData.get('card-number')?.slice(-4))

      const createResponse = await AppointmentService.pay({
        id,
        cardType,
        lastCardDigits,
        amount,
      })

      if (!createResponse || createResponse instanceof AppError) {
        await setError()
      } else {
        await setSuccess()
      }
    }
  )

  const { showBanner } = useShowBanner(actionState)

  return showBanner ? (
    <Banner text={thanks} />
  ) : (
    <div className="cmp-pay-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <RadioOptions
          id="card-type"
          title="Tipo de tarjeta"
          options={cardOptions}
          required
          selectedValue={cardType}
          size="l"
          handleChange={handleCardTypeChange}
        />
        <Input title="Titular de la tarjeta" required />
        <Input title="DNI" type="number" required />
        <Input
          id="card-number"
          title="Número de tarjeta"
          type="number"
          required
        />
        <Input title="Vencimiento" type="month" required />
        <Input title="Código de seguridad" type="number" required />
        {cardType === AppointmentModel.CardType.CREDIT && (
          <RadioOptions
            id="installment-count"
            title="Cantidad de cuotas"
            options={installmentOptions}
            required
            selectedValue={installmentCount}
            handleChange={handleInstallmentCountChange}
          />
        )}
        <div className="resume">
          <small>Pagás</small>
          {cardType === AppointmentModel.CardType.DEBIT ? (
            <Price amount={amount} />
          ) : (
            <span className="in-installments">
              <span className="count">{installmentCount}</span>
              <span className="multi">x</span>
              <Price amount={amount / installmentCount} />
            </span>
          )}
        </div>
        <StateButton text={button} title={button} actionState={actionState} />
      </form>
    </div>
  )
}

export default PayForm
