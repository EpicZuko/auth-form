import React from 'react'
import styled from 'styled-components'

const InputCodeValidation = (props) => {
   return (
      <StyledDiv>
         <StyledInput
            onChange={props.onChange}
            value={props.value}
            {...props}
         />
         {props.value === '' && <StyledSpan />}
      </StyledDiv>
   )
}

export default InputCodeValidation

const StyledDiv = styled.div`
   position: relative;
`
const StyledInput = styled.input`
   display: flex;
   width: 56px;
   height: 64px;
   padding: 13px 16px;
   text-align: center;
   justify-content: center;
   align-items: center;
   gap: 8px;
   color: var(--Grey-Extra-Dark, #212121);
   font-family: 'Mplus 1p';
   font-size: 50px;
   font-style: normal;
   font-weight: 500;
   line-height: 24px;
   &[type='number']::-webkit-inner-spin-button,
   &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   &[type='number'] {
      -moz-appearance: textfield;
   }
   background: var(--Grey-Extra-Light, #f4f4f4);
   border-radius: 12px;
   border: none;
`
const StyledSpan = styled.span`
   position: absolute;
   text-align: center;
   top: 70px;
   left: 35px;
   border-bottom: 5px solid var(--Grey-Extra-Dark, #212121);
   width: 24px;
`
