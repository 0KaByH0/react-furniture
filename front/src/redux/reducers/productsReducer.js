let initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        products: [...action.payload],
      };

    case 'FIND_ITEM':
      return {
        products: state.products.filter((el) => el.name.includes(action.payload)),
      };
    case 'ADD_ITEM': {
      return {
        products: [...state.products, action.payload],
      };
    }
    case 'EDIT_ITEM':
      console.log(state.products);
      return {
        products: [
          ...state.products.map((el) => (el.id === action.payload.id ? action.payload : el)),
        ],
      };
    case 'DELETE_ITEM': {
      return {
        products: state.products.filter((el) => el.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
