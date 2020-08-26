const initialState = {
  items: []
};

const itemList = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload] // Adds the incoming product to the end of the array 
      }
    default: 
      return state;
  }
    
};

export default itemList;