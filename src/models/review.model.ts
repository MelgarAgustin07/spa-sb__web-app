export type Stars = 1 | 2 | 3 | 4 | 5

export interface Data {
  id: number
  stars: Stars
  comment: string
}

export interface CreateData {
  stars: Stars
  comment: string
}

export interface CreateBody {
  star: Stars
  comment: string
}
