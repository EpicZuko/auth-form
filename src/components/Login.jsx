import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loginPost } from '../services/reducerSlice/LoginSlice'
import Toastify from './Toastify'
import Button from './UI/Button'
import Input from './UI/Input'

const Login = () => {
   const [loginValue, setLoginValue] = useState({
      username: '',
      password: '',
   })
   const [showPassword, setShowPassword] = useState(false)
   const toggleConfirmPasswordVisibility = () => {
      setShowPassword((prevState) => !prevState)
   }
   const dispatch = useDispatch()

   const loginValueHandler = (event) => {
      setLoginValue((prevState) => ({
         ...prevState,
         [event.target.name]: event.target.value,
      }))
   }
   const clickButton = () => {
      dispatch(loginPost({ code: loginValue }))
   }
   return (
      <>
         <Toastify />
         <StyledDiv>
            <StyledH1>Вэлком бэк!</StyledH1>
            <Input
               name="username"
               placeholder="Введи логин"
               type="text"
               onChange={loginValueHandler}
               value={loginValue.username}
            />
            <Input
               name="password"
               placeholder="Введи пароль"
               variant="optic"
               type={showPassword === false ? 'password' : 'text'}
               onClickImgOptic={toggleConfirmPasswordVisibility}
               value={loginValue.password}
               onChange={loginValueHandler}
            />
            <StyledDivButton>
               <Button type="button" variant="toComeIn" onClick={clickButton}>
                  Войти
               </Button>
               <StyledP>У меня еще нет аккаунта</StyledP>
            </StyledDivButton>
         </StyledDiv>
      </>
   )
}

export default Login

const StyledH1 = styled.h1`
   width: 274px;
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 32px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`

const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 25px;
   width: 343px;
`
const StyledDivButton = styled.div`
   margin-left: 15px;
`
const StyledP = styled.p`
   color: var(--Button-color-Light, #292929);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 24px; /* 150% */
   width: 311px;
   flex-shrink: 0;
   cursor: pointer;
`
