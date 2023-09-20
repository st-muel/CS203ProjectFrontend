import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
const jwt = require('jsonwebtoken')

export const jwtTokenAtom = atomWithStorage<string>('jwt', '')
export const userAtom = atom(
    (get) => {
        try {
            const user = jwt.decode(get(jwtTokenAtom))
            return user
        } catch (e) {
            return null
        }
    }
)
