import { configureStore } from '@reduxjs/toolkit'
import LoginSlice, { codeEmailSlice } from './LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice,
      code: codeEmailSlice.reducer,
   },
})

export default store
