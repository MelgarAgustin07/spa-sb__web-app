'use client'

import './Reviews.css'
import { ReviewModel } from '@/models'
import { ReviewService } from '@/services'
import { Separator } from '@/components'
import { Review, ReviewForm } from './components'
import { useEffect, useState } from 'react'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { reviews } = jsonData.pages.stable.home.sections

const Reviews = () => {
  const [bestReviews, setBestReviews] = useState<ReviewModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const bestReviewsData = await ReviewService.getTheBest()

      if (!bestReviewsData || bestReviewsData instanceof AppError) {
      } else setBestReviews(bestReviewsData)
    }

    fetchAsync()
  }, [])

  return (
    <section className="reviews">
      <h2>{reviews.title}</h2>
      {bestReviews ? (
        <ul>
          {bestReviews.map(review => (
            <Review key={review.id} {...review} />
          ))}
        </ul>
      ) : (
        <p>Nada por aquí</p>
      )}
      <Separator />
      <article>
        <h3>{reviews.subtitle}</h3>
        <ReviewForm />
      </article>
    </section>
  )
}

export default Reviews
