import { UserModel } from '@/models'
import jsonData from '@/data.json'

interface Page {
  page: string
  title: string
}

const { profile, reserve, myAppts, inquiries } = jsonData.pages.dynamic

const PRIVATE_PAGES: Record<UserModel.Role, Page[]> = {
  [UserModel.Role.DEV]: [],
  [UserModel.Role.BOSS]: [inquiries],
  [UserModel.Role.SECRETARY]: [inquiries],
  [UserModel.Role.STAFF]: [],
  [UserModel.Role.CLIENT]: [reserve, myAppts],
}

export const getPrivatePages = (role: UserModel.Role) => PRIVATE_PAGES[role]

export const getAllowedRoles = (page: string) => {
  // Todos los roles tienen acceso a "profile"
  if (page === profile.page) return Object.values(UserModel.Role)

  // Filtrar los roles que tienen acceso a la página solicitada
  return Object.keys(PRIVATE_PAGES).filter(role =>
    PRIVATE_PAGES[role as UserModel.Role].some(
      privatePage => privatePage.page === page
    )
  ) as UserModel.Role[]
}
