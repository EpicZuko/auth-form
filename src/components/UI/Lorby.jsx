import React from 'react'
import styled from 'styled-components'
import illstration from '../../assets/icons/img/illustration.svg'

const Lorby = () => {
   return (
      <div>
         <img src={illstration} alt="illstration" />
         <StyledH2>Lorby</StyledH2>
         <StyledP>Твой личный репетитор</StyledP>
      </div>
   )
}

export default Lorby
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
   width: 440px;
`
