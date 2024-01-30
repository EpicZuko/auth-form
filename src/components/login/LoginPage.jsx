import React from 'react'
import styled from 'styled-components'
import Login from '../Login'
import Lorby from '../UI/Lorby'

const LoginPage = () => {
   return (
      <div>
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

const StyledDiv = styled.div`
   display: flex;
   align-items: center;
   margin-top: 92px;
   justify-content: space-around;
`
