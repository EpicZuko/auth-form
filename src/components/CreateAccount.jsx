/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authPost } from '../services/reducerSlice/LoginSlice'
import Toastify from './Toastify'
import Button from './UI/Button'
import Input from './UI/Input'

const CreateAccount = () => {
   const [createAccountValue, setCreateAccountValue] = useState({
      email: '',
      username: '',
   })
   const [createPassword, setCreatePassword] = useState({
      password: '',
      password_confirm: '',
   })
   const [errorMessage, setErrorMessage] = useState('')
   const [passwordValidity, setPasswordValidity] = useState({
      length: null,
      lowercaseUppercase: null,
      digit: null,
      specialCharacter: null,
   })
   const [emailValidity, setEmailValidity] = useState(null)
   const [usernameValidity, setUsernameValidity] = useState(null)
   const [isButtonEnabled, setIsButtonEnabled] = useState(false)
   const [isOpticPassword, setIsOpticPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   const dispatch = useDispatch()
   useEffect(() => {
      const isValidPassword =
         passwordValidity.length &&
         passwordValidity.lowercaseUppercase &&
         passwordValidity.digit &&
         passwordValidity.specialCharacter &&
         createPassword.password === createPassword.password_confirm &&
         emailValidity &&
         usernameValidity
      setIsButtonEnabled(isValidPassword)
   }, [createPassword, emailValidity, usernameValidity, passwordValidity])

   const createPasswordHandlerChangeValue = (event) => {
      const { name, value } = event.target

      setCreatePassword((prevPassword) => ({
         ...prevPassword,
         [name]: value,
      }))

      if (name === 'password' || name === 'password_confirm') {
         if (name === 'password_confirm' && value !== createPassword.password) {
            setErrorMessage('Пароли не совпадают')
         } else {
            setErrorMessage('')
         }

         if (name === 'password') {
            const passwordValidityCheck = {
               length: value.length >= 8 && value.length <= 15,
               lowercaseUppercase: /[a-z]/.test(value) && /[A-Z]/.test(value),
               digit: /\d/.test(value),
               specialCharacter: /[!@#$%^&*]/.test(value),
            }

            setPasswordValidity(passwordValidityCheck)
         }
      }
   }

   const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(String(email).toLowerCase())
   }

   const validateUsername = (username) => {
      return username.length >= 3 && username.length <= 20
   }

   const handleEmailChange = (event) => {
      const email = event.target.value
      setCreateAccountValue((prevValue) => ({
         ...prevValue,
         email,
      }))
      setEmailValidity(validateEmail(email) || email === '')
   }

   const handleUsernameChange = (event) => {
      const username = event.target.value
      setCreateAccountValue((prevValue) => ({
         ...prevValue,
         username,
      }))
      setUsernameValidity(validateUsername(username) || username === '')
   }

   const isOpticPasswordHandler = () => {
      setIsOpticPassword((prevState) => !prevState)
   }

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword((prevState) => !prevState)
   }
   const buttonClick = async () => {
      dispatch(
         authPost({
            role: 'register',
            auth: {
               password: createPassword.password,
               password_confirm: createPassword.password_confirm,
               email: createAccountValue.email,
               username: createAccountValue.username,
            },
         })
      )
   }
   return (
      <>
         <Toastify />
         <StyledDiv>
            <StyledH2>Создать аккаунт Lorby</StyledH2>
            <Input
               name="email"
               value={createAccountValue.email}
               onChange={handleEmailChange}
               type="email"
               placeholder="Введи адрес почты"
            />
            {emailValidity === false && (
               <ErrorMessage>Некорректный адрес электронной почты</ErrorMessage>
            )}
            <Input
               name="username"
               value={createAccountValue.username}
               onChange={handleUsernameChange}
               type="text"
               placeholder="Придумай логин"
            />
            {usernameValidity === false && (
               <ErrorMessage>Некорректное имя пользователя</ErrorMessage>
            )}
            <Input
               name="password"
               value={createPassword.password}
               onChange={createPasswordHandlerChangeValue}
               placeholder="Создай пароль"
               variant="optic"
               onClickImgOptic={() => isOpticPasswordHandler()}
               type={isOpticPassword === false ? 'password' : 'text'}
            />
            <StyledUl>
               {' '}
               <li
                  style={{
                     color:
                        passwordValidity.length === null
                           ? 'black'
                           : passwordValidity.length
                             ? 'green'
                             : 'red',
                  }}
               >
                  От 8 до 15 символов
                  {passwordValidity.length === null
                     ? ''
                     : passwordValidity.length
                       ? ' ✅'
                       : ' ❌'}
               </li>
               <li
                  style={{
                     color:
                        passwordValidity.lowercaseUppercase === null
                           ? 'black'
                           : passwordValidity.lowercaseUppercase
                             ? 'green'
                             : 'red',
                  }}
               >
                  Строчные и прописные буквы
                  {passwordValidity.lowercaseUppercase === null
                     ? ''
                     : passwordValidity.lowercaseUppercase
                       ? ' ✅'
                       : ' ❌'}
               </li>
               <li
                  style={{
                     color:
                        passwordValidity.digit === null
                           ? 'black'
                           : passwordValidity.digit
                             ? 'green'
                             : 'red',
                  }}
               >
                  Минимум 1 цифра
                  {passwordValidity.digit === null
                     ? ''
                     : passwordValidity.digit
                       ? ' ✅'
                       : ' ❌'}
               </li>
               <li
                  style={{
                     color:
                        passwordValidity.specialCharacter === null
                           ? 'black'
                           : passwordValidity.specialCharacter
                             ? 'green'
                             : 'red',
                  }}
               >
                  Минимум 1 спецсимвол (!, #, $...)
                  {passwordValidity.specialCharacter === null
                     ? ''
                     : passwordValidity.specialCharacter
                       ? '✅'
                       : ' ❌'}
               </li>
            </StyledUl>
            <Input
               name="password_confirm"
               value={createPassword.password_confirm}
               onChange={createPasswordHandlerChangeValue}
               placeholder="Повтори пароль"
               variant="optic"
               type={showConfirmPassword === false ? 'password' : 'text'}
               onClickImgOptic={toggleConfirmPasswordVisibility}
            />
            <StyledH3>{errorMessage}</StyledH3>
            <StyledDivButton>
               <Button
                  variant={isButtonEnabled ? 'toComeIn' : 'further'}
                  disabled={!isButtonEnabled}
                  onClick={buttonClick}
               >
                  Далее
               </Button>
            </StyledDivButton>
         </StyledDiv>
      </>
   )
}

export default CreateAccount

const StyledDiv = styled.div`
   display: inline-flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   width: 343px;
   gap: 14px;
`

const StyledH2 = styled.h2`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 32px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`

const StyledUl = styled.ul`
   color: var(--Grey-Medium-Dark, #767676);
   font-family: 'Mplus 1p';
   font-size: 12px;
   font-style: normal;
   font-weight: 500;
   line-height: 20px;
   margin-left: -155px;
`

const StyledDivButton = styled.div`
   margin-left: 25px;
`

const StyledH3 = styled.h3`
   color: #ec0000;
   font-family: 'Mplus 1p';
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 25px;
   text-align: start;
   margin-left: -180px;
`

const ErrorMessage = styled.span`
   color: #ec0000;
   font-family: 'Mplus 1p';
   font-size: 12px;
   font-style: normal;
   font-weight: 500;
   line-height: 20px;
`
