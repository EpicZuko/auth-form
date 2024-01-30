import { Routes, Route } from 'react-router-dom'
import CodePage from '../components/code/CodePage'
import LoginPage from '../components/login/LoginPage'
import RegisterPage from '../components/register/RegisterPage'

const Protected = () => {
   return (
      <Routes>
         <Route path="/" element={<RegisterPage />} />
         <Route path="/codepage" element={<CodePage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
   )
}

export default Protected
