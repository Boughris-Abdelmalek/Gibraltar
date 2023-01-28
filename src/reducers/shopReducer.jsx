export const initialState = {
  total: 0,
  products: [],
};

export const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);

      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);

      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);

      return {
        ...state,
        total: payload.total,
      };
    case "UPDATE_QUANTITY":
      console.log("UPDATE_QUANTITY", payload);
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer`);
  }
};
