import { api } from './common.js'

// 식재료 이미지 API
function postIngredients(data) {
  return api.post('ingredients', data)
}

// 영수증 이미지 API
function postReceipt(data) {
  return api.post('receipt', data)
}

export { postIngredients, postReceipt }
