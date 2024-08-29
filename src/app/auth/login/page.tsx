import './page.css'
import { LinkButton, SimpleHero } from '@/components'
import { LoginForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.login

export const metadata: Metadata = {
  title: getTitle(title),
}

const Login = () => (
  <>
    <SimpleHero title={title} />
    <section className="login card">
      <LoginForm />
      <small>¿No tienes una cuenta?</small>
      <LinkButton href="/auth/sign-up" title="Registrarse" />
    </section>
  </>
)

export default Login
