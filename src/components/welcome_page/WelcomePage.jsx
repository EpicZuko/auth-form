import React, { useState } from 'react'
import styled from 'styled-components'
import illistration from '../../assets/icons/img/Illustration (1).svg'
import Modal from '../UI/Modal'

const WelcomePage = () => {
   const [isModal, setIsModal] = useState(false)

   const isModalHandlerOpen = () => {
      setIsModal(true)
   }

   const isModalHandlerClose = () => {
      setIsModal(false)
   }
   return (
      <>
         {isModal && <Modal onClose={isModalHandlerClose} />}
         <StyledDiv>
            <StyledH1>Добро пожаловать!</StyledH1>
            <StyledP>Lorby - твой личный репетитор</StyledP>
            <img src={illistration} alt="illistration" />
            <div>
               <StyledButton onClick={isModalHandlerOpen}>Выйти</StyledButton>
            </div>
         </StyledDiv>
      </>
   )
}

export default WelcomePage

const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
   margin-top: 100px;
`
const StyledH1 = styled.h1`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 36px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`
const StyledP = styled.p`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`
const StyledButton = styled.button`
   display: flex;
   width: 343px;
   padding: 13px 16px;
   justify-content: center;
   align-items: center;
   border-radius: 12px;
   background: #fff;
   border: none;
   cursor: pointer;
`
