import Axios from 'axios'
import { setupCache as setupCacheDev } from 'axios-cache-interceptor/dev'

// ***************  AXIOS AND CONNECTIVITY CONFIG/SETUP  ***************** //

const configWithoutCorsProps = {
  baseURL: 'https://official-joke-api.appspot.com'
}

// // Adding CORS-related axios props changes nothing about the behavior, as tested thus (and in several combos):
// const configWithCorsProps = {
//   baseURL: 'https://official-joke-api.appspot.com',
//   withCredentials: true,
//   crossOrigin: true,
//   cors: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Content-Type"
//   }
// }


const instance = Axios.create(configWithoutCorsProps)
// const instance = Axios.create(configWithCorsProps)

// Adding cache to the instance results in: 
// axios 'NetworkError', and:
// request status in Chrome's Network tab is 'CORS error'
const instanceWithCache = setupCacheDev(instance, {
  // NOTE: must comment out this declaration if changing exports, as a-c-i augments either way
  debug: console.debug // axios-cache-interceptor options
})


export default instanceWithCache
// export default instance