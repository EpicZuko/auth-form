import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../utills/helpers/helpers'
import { LocalStorageFunction } from '../../utills/helpers/LocalStorageFunction'

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

export const codeEmailPost = createAsyncThunk(
   'codeEmail/codeEmailPost',
   // eslint-disable-next-line consistent-return
   async (props, { rejectWithValue }) => {
      try {
         const response = await ApiFetch({
            url: 'authentication/email-confirm/',
            method: 'POST',
            body: props.code,
         })
         return response
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
const initialStateCodeEmail = {
   status: null,
   error: null,
}
export const codeEmailSlice = createSlice({
   name: 'codeEmail',
   initialState: initialStateCodeEmail,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(codeEmailPost.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(codeEmailPost.fulfilled, (state) => {
            state.status = 'success'
            state.error = false
         })
         .addCase(codeEmailPost.rejected, (state) => {
            state.status = 'error'
            state.error = true
         })
   },
})
export const codeEmailAction = codeEmailSlice.actions

export const loginPost = createAsyncThunk(
   'loginPost/loginPostServer',
   // eslint-disable-next-line consistent-return
   async (props, { rejectWithValue }) => {
      try {
         const response = await ApiFetch({
            url: 'authentication/login/',
            method: 'POST',
            body: props.code,
         })
         LocalStorageFunction({
            type: 'removeItem',
            key: 'login',
         })
         LocalStorageFunction({
            type: 'setItem',
            key: 'login',
            body: {
               refresh: response.refresh,
               access: response.accessF,
            },
         })

         showSuccessMessage('Вы успешно авторизовались!')
         return response
      } catch (error) {
         showErrorMessage('Неверный логин или пароль')
         return rejectWithValue(error)
      }
   }
)

const initialStateLogin = {
   status: null,
   error: null,
   refresh: null,
   access: null,
}

export const loginLorbySlice = createSlice({
   name: 'loginPost',
   initialState: initialStateLogin,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loginPost.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(loginPost.fulfilled, (state, action) => {
            state.status = 'success'
            state.refresh = action.payload.refresh
            state.access = action.payload.access
         })
         .addCase(loginPost.rejected, (state) => {
            state.error = 'error'
         })
   },
})
export const loginAction = loginLorbySlice.actions
