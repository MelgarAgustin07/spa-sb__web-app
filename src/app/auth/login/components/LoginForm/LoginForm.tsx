'use client'

import './LoginForm.css'
import { Button, Input } from '@/components'
import { FormEventHandler } from 'react'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string

    console.log(email)
    console.log(password)

    // await signIn('credentials', {
    //   redirect: true,
    //   email,
    //   password,
    // })
  }

  return (
    <form className="cmp-login-form" onSubmit={handleSubmit}>
      <Input id="email" title="Correo electrónico" required type="email" />
      <Input id="password" title="Contraseña" required type="password" />
      <Button title="Iniciar sesión" />
    </form>
  )
}

export default LoginForm
