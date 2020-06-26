import productReducer from './addProduct.js'
import { combineReducers }from 'redux'

const allReducers = combineReducers({
  productReducer
})

export default allReducers;