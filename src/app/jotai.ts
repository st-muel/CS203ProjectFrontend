import { atom } from 'jotai'
import { getCookie } from './utils/common'

const userCookie = getCookie('user')
const user = userCookie ? JSON.parse(userCookie) : null
export const userAtom = atom(user)