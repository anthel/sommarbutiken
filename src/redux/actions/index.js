export const addToCart = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}