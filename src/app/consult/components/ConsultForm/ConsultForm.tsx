'use client'

import './ConsultForm.css'
import { Button, Input, TextArea } from '@/components'
import { FormEventHandler } from 'react'

const ConsultForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    // TODO: comprobar que las contraseñas sean iguales

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string
  }

  return (
    <form className="cmp-consult-form" onSubmit={handleSubmit}>
      <Input id="firstName" title="Nombre" required />
      <Input id="lastName" title="Apellido" required />
      <Input
        id="phone"
        title="Teléfono"
        type="tel"
        // TODO: test del formato
        pattern="\+54[0-9]{11}"
        placeholder="+54___________"
      />
      <Input id="email" title="Correo electrónico" required type="email" />
      <TextArea id="text" title="Comentarios" required />
      <Button title="Consultar" />
    </form>
  )
}

export default ConsultForm
