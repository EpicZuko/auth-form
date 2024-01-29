import React from 'react'
import styled from 'styled-components'
import Login from '../Login'
import Button from '../UI/Button'
import Lorby from '../UI/Lorby'

const LoginPage = () => {
   return (
      <div>
         <StyledDivButton>
            <Button variant="back" /> <span>Назад</span>
         </StyledDivButton>
         <StyledDiv>
            <div>
               <Lorby />
            </div>
            <div>
               <Login />
            </div>
         </StyledDiv>
      </div>
   )
}

export default LoginPage

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
