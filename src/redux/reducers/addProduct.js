const initialState = {
  products: []
};

const addProductReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: action.payload.product
      }
    default: 
      return state;
  }
    
};

export default addProductReducer;