import './Review.css'
import { Icon } from '@/components'

interface Props {
  rating: number
  comment: string
}

const Review = ({ rating, comment }: Props) => (
  <li className="review">
    <header>
      <div className="profile-picture">
        <Icon faIcon="fa-solid fa-user" />
      </div>
      <div className="stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            faIcon={index < rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}
          />
        ))}
      </div>
    </header>
    <p className="text">{'"' + comment + '"'}</p>
  </li>
)

export default Review
