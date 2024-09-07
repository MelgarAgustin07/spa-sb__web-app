import { ReviewAdapter } from '@/adapters'
import { ReviewModel } from '@/models'
import { AppError, privateInstance } from '@/helpers'

const collection = '/review'

export const getBetter = async () => {
  const response = await privateInstance.get(`${collection}/better`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = ReviewAdapter.getBetter.output(response.data)
  return adaptedResponse
}

export const create = async (data: ReviewModel.CreateData) => {
  const adaptedInput = ReviewAdapter.create.input(data)

  const response = await privateInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}
