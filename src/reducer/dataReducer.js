export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        savedItems: state.savedItems.filter(
          (product) => product.id !== payload.id
        ),
      };

    case "INCREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== payload),
      };

    case "ADD_TO_SAVE_LATER":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== payload.id
        ),
        savedItems: state.savedItems.concat(payload),
      };

    case "REMOVE_FROM_SAVED":
      return {
        ...state,
        savedItems: state.savedItems.filter(
          (product) => product.id !== payload
        ),
      };

    default:
      return state;
  }
};
