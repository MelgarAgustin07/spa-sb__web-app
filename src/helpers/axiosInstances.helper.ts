import axios from 'axios'

const baseURL = process.env.API_URL

export const publicInstance = axios.create({ baseURL })
export const privateInstance = axios.create({ baseURL })
