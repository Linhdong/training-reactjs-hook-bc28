import { configureStore } from '@reduxjs/toolkit'

import FacebookReducer from './reducers/FacebookReducer'
import NumberReducer from './reducers/NumberReducer'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    facebookReducer: FacebookReducer,
    productReducer: productReducer,
    userReducer: userReducer
  },
})