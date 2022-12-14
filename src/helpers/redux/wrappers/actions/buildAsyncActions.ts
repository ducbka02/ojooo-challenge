import { Dispatch } from 'redux'
import {
  createAsyncThunk,
  AsyncThunk,
  AsyncThunkPayloadCreator,
} from '@reduxjs/toolkit'

type AsyncThunkConfig = {
  state?: unknown
  dispatch?: Dispatch
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
}

export function buildAsyncActions<
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = Record<string, unknown>,
>(
  actionName: string,
  service: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
  return createAsyncThunk(actionName, async (args, thunkAPI) => {
    try {
      return await service(args, thunkAPI)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error, error.meta)
    }
  })
}
