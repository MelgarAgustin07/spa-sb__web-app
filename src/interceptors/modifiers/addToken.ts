import { InternalAxiosRequestConfig } from 'axios'

export const addToken = (config: InternalAxiosRequestConfig<any>) => {
  // Obtener el token de autenticación
  // TODO: obtener desde NextAuth
  const tokenValue = ''

  /*
    Si existe un token de autenticación, agregarlo al encabezado de la
    solicitud.
  */
  if (tokenValue) config.headers['Authorization'] = `Bearer ${tokenValue}`

  return config
}
