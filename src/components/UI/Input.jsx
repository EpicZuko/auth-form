import React, { forwardRef } from 'react'
import styled from 'styled-components'
import opticIcons from '../../assets/icons/opticIcons.svg'
import opticIconsNone from '../../assets/icons/opticIconsNone.svg'

const Input = forwardRef(function Input(props, ref) {
   return (
      <StyledDiv>
         <StyledInput
            ref={ref}
            variant={props.variant}
            {...props}
            placeholder={props.placeholder}
         />
         {props.variant === 'optic' && (
            <StyledImg
               onClick={props.onClickImgOptic}
               src={props.type === 'text' ? opticIconsNone : opticIcons}
               alt="img"
            />
         )}
      </StyledDiv>
   )
})

export default Input

const StyledDiv = styled.div`
   position: relative;
   width: 343px;
`

const StyledInput = styled.input`
   display: flex;
   width: 343px;
   height: 52px;
   padding: 13px 16px;
   align-items: center;
   gap: 8px;
   border-radius: 12px;
   background: var(--Grey-Extra-Light, #f8f8f8);
   flex-shrink: 0;
   color: var(--Grey-Medium-Dark, #767676);
   font-family: 'Mplus 1p';
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 24px; /* 150% */
   border: none;
   outline: none;
`

const StyledImg = styled.img`
   position: absolute;
   top: 25px;
   right: 0px;
   cursor: pointer;
`
