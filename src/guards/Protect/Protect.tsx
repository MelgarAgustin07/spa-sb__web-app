import './Protect.css'
import { Loader } from '@/components'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { UserModel } from '@/models'
import jsonData from '@/data.json'

const { page } = jsonData.pages.dynamic.login

interface Props {
  allowedRoles?: UserModel.Role[]
  children: ReactNode
}

const Protect = ({ allowedRoles, children }: Props) => {
  const router = useRouter()

  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') router.push(`/${page}`)

    const role = data?.user?.role as any

    if (allowedRoles && !allowedRoles.includes(role))
      router.push('/unauthorized')
  }, [status, router, allowedRoles, data])

  return status === 'loading' ? (
    <div className="page-loading">
      <Loader />
    </div>
  ) : (
    children
  )
}

export default Protect
