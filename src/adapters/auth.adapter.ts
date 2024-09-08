import { AuthModel, UserModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const login: {
  input: InputAdapter<AuthModel.LoginData, AuthModel.LoginBody>
  output: OutputAdapter<any, UserModel.Data>
} = {
  input: data => {
    const convertedResource: AuthModel.LoginBody = {
      email: data.email,
      password: data.password,
    }

    return convertedResource
  },
  output: response => {
    const convertedResource: UserModel.Data = {
      id: response.id,
      name: response.name,
      lastName: response.lastname,
      phone: response.phone,
      email: response.email,
      role: response.role,
      profilePhotoUrl: response.profile_photo_url,
      createdAt: response.created_at,
    }

    return convertedResource
  },
}

export const register: {
  input: InputAdapter<UserModel.CreateClientData, UserModel.CreateClientBody>
  output: InputAdapter<any, AuthModel.RegisterData>
} = {
  input: data => {
    const convertedResource: UserModel.CreateClientBody = {
      name: data.name,
      lastname: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
    }

    return convertedResource
  },
  output: response => {
    const { data } = response

    const convertedResource: AuthModel.RegisterData = {
      user: {
        id: data.id,
        name: data.name,
        lastName: data.lastname,
        phone: data.phone,
        email: data.email,
        role: data.role,
        profilePhotoUrl: data.profile_photo_url,
        createdAt: data.created_at,
      },
      token: response.access_token,
    }

    return convertedResource
  },
}
