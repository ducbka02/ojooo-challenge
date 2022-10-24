import { createAction } from '@reduxjs/toolkit'
import { AppState } from '.'

interface PayloadInterface {
  payload: Partial<AppState>
}

export const changeLanguage = {
  initialState: {},
  action: createAction<Partial<AppState>>('app/changeLang'),
  reducers(state: AppState, { payload }: PayloadInterface) {
    if (typeof payload.language !== 'undefined' && state.language) {
      state.language = payload.language
    }
  },
}
