import { ClientModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getOne: {
  output: OutputAdapter<any, ClientModel.RemainingData>
} = {
  output: response => {
    const convertedResource: ClientModel.RemainingData = {
      lastName: response.lastName,
      email: response.email,
      phone: response.phone,
    }

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<ClientModel.CreateData, ClientModel.CreateBody>
} = {
  input: data => {
    const convertedResource: ClientModel.CreateBody = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    }

    return convertedResource
  },
}
