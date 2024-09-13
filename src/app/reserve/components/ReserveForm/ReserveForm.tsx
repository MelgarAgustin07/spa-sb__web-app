'use client'

import './ReserveForm.css'
import { ChangeEventHandler, useState, useMemo } from 'react'
import { Input, StateButton, TextArea } from '@/components'
import { AvailableAppts } from './components'
import { useFetchState } from '@/hooks'
import jsonData from '@/data.json'

const { stable, dynamic } = jsonData.pages
const { sections } = stable.services
const { title, button } = dynamic.reserve.form

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

  return (
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
