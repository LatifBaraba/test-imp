import axios from 'axios'

export const middleware = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})
