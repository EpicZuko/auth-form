import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { codeEmailPost } from '../services/reducerSlice/LoginSlice'
import Button from './UI/Button'
import InputCodeValidation from './UI/InputCodeValidation'

const EnterTheCode = () => {
   const [codeInput, setCodeInput] = useState({
      codeEmailOne: '',
      codeEmailTo: '',
      codeEmailScree: '',
      codeEmailFo: '',
   })
   const [startedTyping, setStartedTyping] = useState(false)
   const dispatch = useDispatch()
   const { error } = useSelector((state) => state.code)
   const allFieldsFilled = () => {
      const { codeEmailOne, codeEmailTo, codeEmailScree, codeEmailFo } =
         codeInput
      return codeEmailOne && codeEmailTo && codeEmailScree && codeEmailFo
   }

   const codeEmailHandlerChangeValue = (event) => {
      const { name, value } = event.target
      if (/^\d$/.test(value)) {
         setCodeInput((prevState) => ({
            ...prevState,
            [name]: value,
         }))
         setStartedTyping(true)
      } else {
         setCodeInput((prevState) => ({
            ...prevState,
            [name]: '',
         }))
      }
   }

   const clickButton = () => {
      const { codeEmailOne, codeEmailTo, codeEmailScree, codeEmailFo } =
         codeInput
      const code = `${codeEmailOne}${codeEmailTo}${codeEmailScree}${codeEmailFo}`

      dispatch(codeEmailPost({ code: { code } }))
   }

   return (
      <>
         <StyledH3>Введи 4-значный код, высланный на @gmail.com</StyledH3>

         <StyledDiv>
            <InputCodeValidation
               name="codeEmailOne"
               type="number"
               value={codeInput.codeEmailOne}
               onChange={codeEmailHandlerChangeValue}
               maxLength="1"
            />
            <InputCodeValidation
               name="codeEmailTo"
               type="number"
               value={codeInput.codeEmailTo}
               onChange={codeEmailHandlerChangeValue}
               maxLength="1"
            />
            <InputCodeValidation
               name="codeEmailScree"
               type="number"
               value={codeInput.codeEmailScree}
               onChange={codeEmailHandlerChangeValue}
               maxLength="1"
            />
            <InputCodeValidation
               name="codeEmailFo"
               type="number"
               value={codeInput.codeEmailFo}
               onChange={codeEmailHandlerChangeValue}
               maxLength="1"
            />
         </StyledDiv>
         {error && startedTyping && <ErrorText>Неверный код</ErrorText>}
         <StyledDivButton>
            <Button
               variant={allFieldsFilled() ? 'toComeIn' : 'further'}
               onClick={clickButton}
               disabled={!allFieldsFilled()}
            >
               Подтвердить
            </Button>
            <StyledP>Выслать код повторно</StyledP>
         </StyledDivButton>
      </>
   )
}

export default EnterTheCode

const StyledH3 = styled.h3`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   width: 343px;
`

const StyledDiv = styled.div`
   display: flex;
   gap: 12px;
`
const StyledDivButton = styled.div`
   margin-top: 46px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 390px;
`
const StyledP = styled.p`
   color: var(--Button-color-Light, #292929);
   font-family: 'Mplus 1p';
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
   line-height: 22px;
`
const ErrorText = styled.p`
   color: red;
   text-align: center;
   width: 390px;
`
