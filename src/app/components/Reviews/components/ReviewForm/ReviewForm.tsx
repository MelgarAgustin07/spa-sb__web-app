import './ReviewForm.css'
import { Button, Icon, TextArea } from '@/components'
import { FormEventHandler, useState } from 'react'
import { ReviewModel } from '@/models'
import { ReviewService } from '@/services'
import jsonData from '@/data.json'

const { placeholder } = jsonData.pages.stable.home.sections.reviews

const ReviewForm = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)
  const [selectedStar, setSelectedStar] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => setHoveredStar(index)
  const handleMouseLeave = () => setHoveredStar(null)
  const handleClick = (index: number) => setSelectedStar(index)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const createData: ReviewModel.CreateData = {
      stars: Number(formData.get('stars')) as ReviewModel.StarRating,
      comment: formData.get('comment') as string,
    }

    const response = await ReviewService.create(createData)
  }

  return (
    <form className="cmp-review-form review" onSubmit={handleSubmit}>
      <header>
        <div className="profile-picture">
          <Icon faIcon="fa-solid fa-user" />
        </div>
        <div className="stars">
          {Array.from({ length: 5 }).map((_, index) => {
            const starIndex = index + 1
            const isFilled = starIndex <= (hoveredStar ?? selectedStar ?? 0)

            return (
              <label
                key={index}
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(starIndex)}
              >
                <Icon
                  faIcon={isFilled ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                />
                <input
                  title={`${starIndex} estrella/s`}
                  name="stars"
                  type="radio"
                  value={starIndex}
                  required
                />
              </label>
            )
          })}
        </div>
        {selectedStar && <small>({selectedStar})</small>}
      </header>
      <div className="comment">
        <TextArea
          id="comment"
          title="Comentarios"
          placeholder={placeholder}
          required
          hideLabel
        />
      </div>
      <Button title="Enviar" />
    </form>
  )
}

export default ReviewForm
