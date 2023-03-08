import { middleware } from '@/utils/axios'

export const getList = () => middleware.get('/posts').then(res => res?.data)
