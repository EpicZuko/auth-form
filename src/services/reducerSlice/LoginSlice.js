import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../utills/helpers/helpers'

export const authPost = createAsyncThunk(
   'login/getUserOrAdmin',
   // eslint-disable-next-line consistent-return
   async (props, { rejectWithValue }) => {
      try {
         const response = await ApiFetch({
            url: 'authentication/register/',
            method: 'POST',
            body: props.auth,
         })
         showSuccessMessage('Вы успешно авторизовались!')
         return response
      } catch (error) {
         showErrorMessage('Ошибка авторизации. Пожалуйста, попробуйте еще раз.')
         return rejectWithValue(error)
      }
   }
)

const initialState = {
   status: null,
   error: null,
   modal: false,
}

const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(authPost.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(authPost.fulfilled, (state) => {
            state.status = 'success'
         })
         .addCase(authPost.rejected, (state) => {
            state.status = 'error'
         })
   },
})

export const { closemodal, clearLogin } = loginSlice.actions
export default loginSlice.reducer
