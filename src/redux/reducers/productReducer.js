const initialState = {
  products: ['testitem']
};

const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload] // Adds the incoming product to the end of the array 
      }
    default: 
      return state;
  }
    
};

export default productReducer;