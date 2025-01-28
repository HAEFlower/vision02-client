import axios from 'axios'

function createInstance() {
  const instace = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  })

  return setInterceptor(instace)
}

export function setInterceptor(instance) {
  // request
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => Promise.reject(error),
  )

  // response
  instance.interceptors.response.use(
    function (response) {
      console.log('response::', response)
      return response
    },
    async (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

export const api = createInstance()
