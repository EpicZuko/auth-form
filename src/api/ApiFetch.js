import { InitialUrl } from '../utills/constants/url'

export const injectStore = () => {}

function ApiFetch(props) {
   const requestOptions = {
      method: props.method || 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   }
   if (props.method !== 'GET' && props.body) {
      requestOptions.body = JSON.stringify(props.body)
   }
   const promise = new Promise((resolve, reject) => {
      fetch(InitialUrl + props.url, requestOptions)
         .then((response) => {
            if (response.ok) {
               return response.json()
            }
            throw new Error(response.message)
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error)
         })
   })
   return promise
}

export default ApiFetch
