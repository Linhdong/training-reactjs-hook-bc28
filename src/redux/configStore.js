import { configureStore } from '@reduxjs/toolkit'
import FacebookReducer from './reducers/FacebookReducer'
import NumberReducer from './reducers/NumberReducer'

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    facebookReducer: FacebookReducer
  },
})