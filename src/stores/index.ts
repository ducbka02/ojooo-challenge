import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import createDebugger from 'redux-flipper'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

import theme from './Theme'
import app from './App'

import { questionApi } from './Query'

const reducers = combineReducers({
  [questionApi.reducerPath]: questionApi.reducer,
  app,
  theme,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'app'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(questionApi.middleware)

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const reduxFlipperDebugger = createDebugger()
      middlewares.push(reduxFlipperDebugger)
    }

    return middlewares
  },
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export { store, persistor }
