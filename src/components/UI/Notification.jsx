import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
   const style = {
      height: '54px',
      width: '343px',
      color: '#EC0000',
      backgroundColor: '#FFFFFF',
      border: '1px solid #EC0000',
   }

   return (
      <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         theme="colored"
         pauseOnFocusLoss
         draggable
         pauseOnHover
         style={{ width: '500px', height: '54px' }}
         toastStyle={style}
      />
   )
}

export default Notification
