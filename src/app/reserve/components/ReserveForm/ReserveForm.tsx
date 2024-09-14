'use client'

import './ReserveForm.css'
import { ChangeEventHandler, useState, useMemo } from 'react'
import { Banner, Input, StateButton, TextArea } from '@/components'
import { AvailableAppts } from './components'
import { useFetchState, useShowBanner } from '@/hooks'
import jsonData from '@/data.json'

const { stable, dynamic } = jsonData.pages
const { sections } = stable.services
const { form, thanks } = dynamic.reserve
const { title, button } = form

const formatDate = (date: Date) => date.toISOString().slice(0, 10)

const ReserveForm = () => {
  const today = useMemo(() => new Date(), [])
  const todayFormatted = useMemo(() => formatDate(today), [today])

  const [date, setDate] = useState(todayFormatted)

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target
    setDate(value)
  }

  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      const response = {
        treatment: formData.get('treatment') as string,
        date: formData.get('date') as string,
        comment: formData.get('comment') as string,
      }

      console.log(response)

      // await setLoading()
      // const signInResponse = await signIn('credentials', {
      //   redirect: false,
      //   email: formData.get('email') as string,
      //   password: formData.get('password') as string,
      // })
      // if (signInResponse?.error) {
      //   await setError()
      //   console.log(signInResponse.error)
      // } else {
      //   router.push(`/${profile.page}`)
      //   await setSuccess()
      // }
    }
  )

  const { showBanner } = useShowBanner(fetchState)

  return showBanner ? (
    <Banner text={thanks} />
  ) : (
    <div className="cmp-reserve-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="treatments">
          {sections.map(({ title, treatments, serviceKey }) => (
            <fieldset key={serviceKey}>
              <legend>{title}</legend>
              {treatments.map((treatment, index) => {
                const key = [serviceKey, index].join('_')

                return (
                  <label key={key} className="text">
                    <input type="radio" name="treatment" value={key} required />
                    {treatment.title}
                  </label>
                )
              })}
            </fieldset>
          ))}
        </div>
        <Input
          id="date"
          title="Fecha"
          type="date"
          required
          value={date}
          min={todayFormatted}
          onChange={handleDateChange}
        />
        <AvailableAppts date={date} />
        <TextArea id="comment" title="Comentarios" />
        <StateButton text={button} title={button} fetchState={fetchState} />
      </form>
    </div>
  )
}

export default ReserveForm
