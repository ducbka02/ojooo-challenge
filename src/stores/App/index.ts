import { buildSlice } from '@/helpers/redux'
import { changeLanguage } from './action'

const sliceInitialState = {
  language: 'en',
  device_token: '',
  force_update: false,
  need_update: false,
}

export default buildSlice('app', [changeLanguage], sliceInitialState).reducer

export interface AppState {
  language: string | null
  device_token: string | ''
  force_update: boolean
  need_update: boolean
}
