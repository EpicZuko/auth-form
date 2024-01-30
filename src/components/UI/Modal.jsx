import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Button from './Button'

const Backdrop = ({ onClose }) => {
   return <StyledBackdrop onClick={onClose} />
}
const ModalContent = ({ children, variant }) => {
   return <StyledModalContent variant={variant}>{children}</StyledModalContent>
}
const BackdropRoot = document.getElementById('backdrop')
const ModalRoot = document.getElementById('modal')

const Modall = ({ variant, onClose }) => {
   return (
      <div>
         {createPortal(<Backdrop onClose={onClose} />, BackdropRoot)}
         {createPortal(
            <ModalContent variant={variant}>
               <StyledText>Выйти?</StyledText>
               <Button variant="goOut">Точно выйти?</Button>
               <Button variant="yesExactly">Да, точно</Button>
               <Button variant="noStay" onClick={onClose}>
                  Нет, остаться
               </Button>
            </ModalContent>,
            ModalRoot
         )}
      </div>
   )
}

export default Modall

const StyledText = styled.h1`
   color: var(--Grey-Extra-Dark, #212121);
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`

const StyledBackdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 20;
   background: rgba(0, 0, 0, 0.5);
`
const StyledModalContent = styled.div`
   width: 375px;
   height: 274px;
   position: fixed;
   top: 50vh;
   margin-left: 50%;
   transform: ${(props) =>
      props.variant ? 'translate(-50%, 0%)' : 'translate(-50%, -60%)'};
   z-index: 30;
   border-radius: 10px;
   display: inline-flex;
   padding: 20px;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   background-color: #fff;
   @media screen and (max-width: 415px) {
      left: 0;
      transform: translate(-50%, 0%);
   }
`
