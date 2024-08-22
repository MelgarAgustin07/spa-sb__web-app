import './not-found.css'
import { Hero } from '@/components'
import jsonData from '@/data.json'

const { sections } = jsonData.pages.services

const NotFound = () => (
  <>
    <Hero title="Home" />
    404
  </>
)

export default NotFound
