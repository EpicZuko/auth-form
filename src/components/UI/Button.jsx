import React from 'react'
import styled from 'styled-components'
import backIcon from '../../assets/icons/back.svg'

const Button = ({ children, variant, onClick, disabled }) => {
   return (
      <StyledButton
         onClick={onClick}
         type="button"
         variant={variant}
         disabled={disabled}
      >
         {variant === 'back' ? <img src={backIcon} alt="icons" /> : children}
      </StyledButton>
   )
}

export default Button

const toComeInButton = (props) => {
   return (
      props.variant === 'toComeIn' &&
      'width: 343px;color: var(--Grey-Extra-Light, #F8F8F8);background: var(--Button-color-Light, #292929);'
   )
}

const toFurtherButton = (props) => {
   return (
      props.variant === 'further' &&
      'width: 343px;background: var(--Button-color-Light, #D7D7D7);color: var(--Grey-Medium-Dark, #767676);'
   )
}

const yesExactlyButton = (props) => {
   return (
      props.variant === 'yesExactly' &&
      'width: 311px; color: var(--Grey-Extra-Light, #F8F8F8);background: var(--Button-color-Light, #292929);'
   )
}

const noStayButton = (props) => {
   return (
      props.variant === 'noStay' &&
      ';width: 311px;color: var(--Button-color-Light, #292929);background: #FFF;'
   )
}
const goOutButton = (props) => {
   return (
      props.variant === 'goOut' &&
      'width: 311px;color: var(--Button-color-Light, #292929);background: #FFF;'
   )
}
const backButton = (props) => {
   return (
      props.variant === 'back' &&
      'border-radius:100%; width: 24px;height: 24px;'
   )
}

const StyledButton = styled.button`
   display: flex;
   padding: 13px 16px;
   justify-content: center;
   align-items: center;
   border-radius: 12px;
   border: none;
   text-align: center;
   font-family: 'Mplus 1p';
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 24px;
   cursor: pointer;
   ${toComeInButton}
   ${toFurtherButton}
   ${yesExactlyButton}
   ${noStayButton}
   ${goOutButton}
   ${backButton}
`
