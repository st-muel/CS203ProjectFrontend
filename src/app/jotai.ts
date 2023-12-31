import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
const jwt = require('jsonwebtoken')

export const userAtom = atomWithStorage<User | null>('user', null)
