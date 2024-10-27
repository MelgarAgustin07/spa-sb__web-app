'use client'

import './MyApptsSection.css'
import { useCallback, useEffect, useState } from 'react'
import { Banner } from '@/components'
import { Appointment } from './components'
import { AppointmentModel } from '@/models'
import { AppointmentService } from '@/services'
import { AppError } from '@/helpers'

const MyApptsSection = () => {
  const [appts, setAppts] = useState<AppointmentModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const myApptsResponse = await AppointmentService.myAppts()

      if (myApptsResponse && !(myApptsResponse instanceof AppError))
        setAppts(myApptsResponse)
    }

    fetchAsync()
  }, [])

  const cancelAppt = useCallback(
    (id: number) =>
      setAppts(prevAppts =>
        prevAppts?.map(appt =>
          appt.id === id
            ? { ...appt, state: AppointmentModel.State.CANCELLED }
            : appt
        )
      ),
    []
  )

  return (
    <section className="my-appts-section">
      {!appts || appts.length === 0 ? (
        <Banner type="no-content" text="Nada por aquí ..." />
      ) : (
        <ul>
          {appts.map(item => (
            <Appointment
              key={item.id}
              {...item}
              confirmCancel={() => cancelAppt(item.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default MyApptsSection
