'use client'

import './ProtectPage.css'
import { Loader } from '@/components'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getAllowedRoles } from '@/constants'
import { UserModel } from '@/models'
import jsonData from '@/data.json'

const { login } = jsonData.pages.dynamic

interface Props {
  page: string
  children: ReactNode
}

const ProtectPage = ({ page, children }: Props) => {
  const router = useRouter()
  const allowedRoles = useMemo(() => getAllowedRoles(page), [page])
  const { data: session, status } = useSession()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (status === 'loading') return

    // Si no está autenticado
    if (status === 'unauthenticated') {
      router.push(`/${login.page}`)
      return
    }

    const userRole = session?.user?.role as UserModel.Role

    // Si está autenticado pero el rol no está permitido.
    if (status === 'authenticated' && !allowedRoles.includes(userRole)) {
      router.push('/unauthorized')
      return
    }

    setAuthorized(true)
  }, [status, router, session, allowedRoles])

  return authorized ? (
    children
  ) : (
    <div className="page-loading">
      <Loader />
    </div>
  )
}

export default ProtectPage
