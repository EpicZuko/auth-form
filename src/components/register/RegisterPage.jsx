import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import illstration from '../../assets/icons/img/illustration.svg'
import CreateAccount from '../CreateAccount'
import Button from '../UI/Button'

const RegisterPage = () => {
   const navigate = useNavigate()

   const navigateButtonLogin = () => {
      navigate('/login')
   }
   return (
      <>
         <StyledDivButton>
            <Button variant="back" onClick={navigateButtonLogin} />{' '}
            <span>Назад</span>
         </StyledDivButton>
         <StyledDiv>
            <div>
               <img src={illstration} alt="illstration" />
               <StyledH2>Lorby</StyledH2>
               <StyledP>Твой личный репетитор</StyledP>
            </div>
            <div>
               <CreateAccount />
            </div>
         </StyledDiv>
      </>
   )
}

export default RegisterPage

const StyledDivButton = styled.div`
   display: flex;
   padding: 4px;
   align-items: center;
   justify-content: center;
   gap: 12px;
   width: 100%;
`
const StyledDiv = styled.div`
   display: flex;
   align-items: center;
   margin-top: 92px;
   justify-content: space-around;
`
const StyledH2 = styled.h2`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 48px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   width: 440px;
`
const StyledP = styled.p`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 28px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`
