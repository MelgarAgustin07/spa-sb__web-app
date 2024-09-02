import './page.css'
import { LinkButton, SimpleHero } from '@/components'
import { LoginForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.login

export const metadata: Metadata = {
  title: getTitle(title),
}

const Login = () => (
  <>
    <SimpleHero title={title} />
    <section className="login section-form">
      hola
      <div className="card">
        <LoginForm />
        <small>¿No tienes una cuenta?</small>
        <LinkButton href="/auth/sign-up" title="Registrarse" />
      </div>
    </section>
  </>
)

export default Login
