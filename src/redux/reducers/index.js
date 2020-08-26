import productReducer from './productReducer.js'
import itemList from './itemList.js'
import { combineReducers }from 'redux'

const allReducers = combineReducers({
  productReducer,
  itemList
})

export default allReducers;