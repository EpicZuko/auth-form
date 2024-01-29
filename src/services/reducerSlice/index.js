import { configureStore } from '@reduxjs/toolkit'
import LoginSlice, { codeEmailSlice, loginLorbySlice } from './LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice,
      code: codeEmailSlice.reducer,
      loginCode: loginLorbySlice.reducer,
   },
})

export default store
