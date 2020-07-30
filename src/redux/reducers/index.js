import productReducer from './productReducer.js'
import { combineReducers }from 'redux'

const allReducers = combineReducers({
  productReducer
})

export default allReducers;