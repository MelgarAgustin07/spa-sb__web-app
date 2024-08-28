'use client'

import './SignUpForm.css'
import { Button, Input } from '@/components'
import { FormEventHandler } from 'react'

const SignUpForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    // TODO: comprobar que las contraseñas sean iguales

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string
  }

  return (
    <form className="cmp-sign-up-form" onSubmit={handleSubmit}>
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
      <Input id="password" title="Contraseña" required type="password" />
      <Input
        id="confirmPassword"
        title="Confirmar contraseña"
        required
        type="password"
      />
      <Button title="Registrarse" />
    </form>
  )
}

export default SignUpForm
