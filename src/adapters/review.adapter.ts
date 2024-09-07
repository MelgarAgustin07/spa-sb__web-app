import { ReviewModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getBetter: {
  output: OutputAdapter<any, ReviewModel.Data>
} = {
  output: response => {
    const convertedResource: ReviewModel.Data = {
      id: response.id,
      stars: response.star,
      comment: response.comment,
    }

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<ReviewModel.CreateData, ReviewModel.CreateBody>
} = {
  input: data => {
    const convertedResource: ReviewModel.CreateBody = {
      star: data.stars,
      comment: data.comment,
    }
    return convertedResource
  },
}
