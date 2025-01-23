import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

// axios 공통 설정
export const apiInstance = axios.create({
  baseURL: baseUrl,
  header: {
    'Content-Type': 'application/json',
  },
})

// apiInstance 이용해서 인터셉터 구현 예정

function createInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })
}

export const instance = createInstance()
