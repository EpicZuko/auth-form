import React, { forwardRef } from 'react'
import styled from 'styled-components'
import cleaningIcons from '../../assets/icons/cleaning.svg'
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
         {props.value === ''
            ? ''
            : props.variant === 'cleaning' && (
                 <StyledImgCleaning
                    onClick={props.handleClickCleaning}
                    src={props.value && cleaningIcons}
                    alt="cleaning img"
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
   line-height: 24px;
   border: none;
   outline: none;
`

const StyledImg = styled.img`
   cursor: pointer;
   position: absolute;
   z-index: 2;
   border-radius: 12px;
   background: var(--Grey-Extra-Light, #f8f8f8);
   right: -20px;
   top: 25px;
   opacity: 4;
`
const StyledImgCleaning = styled.img`
   cursor: pointer;
   position: absolute;
   z-index: 2;
   border-radius: 12px;
   background: var(--Grey-Extra-Light, #f8f8f8);
   right: -20px;
   top: 25px;
   opacity: 4;
`
