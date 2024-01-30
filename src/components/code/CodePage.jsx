import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../../services/reducerSlice/LoginSlice'
import EnterTheCode from '../EnterTheCode'
import Button from '../UI/Button'
import Lorby from '../UI/Lorby'

const CodePage = () => {
   const dispatch = useDispatch()
   const state = useSelector((state) => state.code)
   const navigate = useNavigate()

   const navigateHome = () => {
      navigate('/', { replace: true }) // Перенаправляем на главную страницу
      dispatch(logout({ status: false }))
   }

   React.useEffect(() => {
      // Проверяем состояние state.success и перенаправляем в соответствии с ним
      if (state.status === 'success') {
         navigate('/welcome') // Перенаправляем на страницу приветствия в случае успеха
      }
   }, [state.status, navigate])

   return (
      <div>
         <StyledDivButton>
            <Button variant="back" onClick={navigateHome} />
            {/* Изменен onClick */}
            <span>Назад</span>
         </StyledDivButton>
         <StyledDiv>
            <div>
               <Lorby />
            </div>
            <div>
               <EnterTheCode />
            </div>
         </StyledDiv>
      </div>
   )
}

export default CodePage

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
