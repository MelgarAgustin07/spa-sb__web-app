import jsonData from '@/data.json'

const { title } = jsonData.documentInfo
const { base, separator } = title

export const getTitle = (subtitle?: string) => {
  let fullTitle = base

  if (subtitle) fullTitle += ` ${separator} ${subtitle}`

  return fullTitle
}
