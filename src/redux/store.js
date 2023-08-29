import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './user.js'

export default configureStore({
  reducer: {
    login: loginReducer
  },
})