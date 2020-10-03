export const addToCart = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}