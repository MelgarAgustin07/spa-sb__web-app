import './ProfileSection.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Separator } from '@/components'
import { Label, Props as LabelProps } from './components'
import { signOut, useSession } from 'next-auth/react'
import { UserModel } from '@/models'
import { AuthService } from '@/services'
import { format } from '@formkit/tempo'
import { addIfExist, AppError } from '@/helpers'

const roleMatcher: Record<UserModel.Role, string> = {
  admin: 'Administrador',
  client: 'Cliente',
  staff: 'Staff',
}

const ProfileSection = () => {
  const { data } = useSession()
  const user = data?.user

  const [extendedInfo, setExtendedInfo] = useState<UserModel.Data>()

  useEffect(() => {
    const fetchAsync = async () => {
      const meResponse = await AuthService.me()

      if (meResponse && !(meResponse instanceof AppError))
        setExtendedInfo(meResponse)
    }

    fetchAsync()
  }, [])

  const labels =
    extendedInfo &&
    addIfExist<LabelProps>([
      {
        title: 'Nombre',
        faIcon: 'fa-solid fa-n',
        value: user?.name || extendedInfo.name,
      },
      {
        title: 'Apellido',
        faIcon: 'fa-solid fa-a',
        value: user?.lastName || extendedInfo.name,
      },
      extendedInfo.phone && {
        title: 'Teléfono',
        faIcon: 'fa-solid fa-phone',
        value: extendedInfo.phone,
      },
      {
        title: 'Correo electrónico',
        faIcon: 'fa-solid fa-envelope',
        value: extendedInfo.email,
      },
      {
        title: 'Tipo',
        faIcon: 'fa-solid fa-user',
        value: roleMatcher[user?.role || extendedInfo.role],
      },
      {
        title: 'Creación',
        faIcon: 'fa-regular fa-calendar',
        value: format(extendedInfo.createdAt, { date: 'short', time: 'short' }),
      },
    ])

  return (
    user && (
      <section className="profile-section">
        <header>
          <Image
            src={user.profilePhotoUrl}
            alt={`Foto de perfil de ${user.name} ${user.lastName}`}
            width={128}
            height={128}
          />
          <div className="group">
            <h2 className="text">{user.name}</h2>
            <p className="text">Bienvenido de nuevo</p>
          </div>
          <Button
            title="Cerrar sesión"
            faIcon="fa-solid fa-arrow-right-from-bracket"
            onClick={() => signOut()}
          />
        </header>
        <Separator />
        <div className="labels">
          {labels?.map(item => (
            <Label key={item.title} {...item} />
          ))}
        </div>
      </section>
    )
  )
}

export default ProfileSection
