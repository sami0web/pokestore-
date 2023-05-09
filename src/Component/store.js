import { configureStore } from '@reduxjs/toolkit'
import shoppingSlice from './Slice'

const store = configureStore({
  reducer: shoppingSlice,
})

export default store

