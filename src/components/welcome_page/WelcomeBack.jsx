import React, { useState } from 'react'
import styled from 'styled-components'
import illstration from '../../assets/icons/img/Illustration (1).svg'
import Modal from '../UI/Modal'

const WelcomeBack = () => {
   const [showIsModal, setShowIsModal] = useState(false)

   const showIsModalHandlerOpen = () => {
      setShowIsModal(true)
   }
   const showIsModalClose = () => {
      setShowIsModal(false)
   }
   return (
      <>
         {showIsModal && <Modal onClose={showIsModalClose} />}
         <StyledDiv>
            <StyledH1>С возвращением!</StyledH1>
            <StyledP>Lorby - твой личный репетитор</StyledP>
            <img src={illstration} alt="illstration" />
            <div>
               <StyledButton onClick={showIsModalHandlerOpen}>
                  Выйти
               </StyledButton>
            </div>
         </StyledDiv>
      </>
   )
}

export default WelcomeBack

const StyledDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   margin-top: 80px;
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
   color: var(--Button-color-Light, #292929);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 24px; /* 150% */
   border-radius: 12px;
   background: #fff;
   display: flex;
   width: 343px;
   padding: 13px 16px;
   justify-content: center;
   align-items: center;
   border: none;
   cursor: pointer;
`
