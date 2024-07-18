export const totalItem = (cart) => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "REMOVE":
      return state.filter((p) => p.id !== action.id);

    case "INCREMENT":
      const indexI = state.findIndex((p) => p.id === action.id);
      state[indexI].quantity += 1;
      return [...state];

    case "DECREMENT":
      const indexD = state.findIndex((p) => p.id === action.id);
      state[indexD].quantity -= 1;
      return [...state];

    default:
      state;
  }
};

export default CartReducer;
