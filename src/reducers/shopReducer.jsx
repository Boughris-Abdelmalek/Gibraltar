export const initialState = {
  total: localStorage.getItem("total") || 0,
  products: JSON.parse(localStorage.getItem("products")) || [],
};

export const shopReducer = (state, action) => {
  const { type, payload } = action;
  let updatedProducts = [];
  let updatedTotal = 0;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      updatedProducts = payload.products;
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      updatedProducts = payload.products;
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      updatedTotal = payload.total;
      localStorage.setItem("total", updatedTotal);

      return {
        ...state,
        total: updatedTotal,
      };
    case "UPDATE_QUANTITY":
      console.log("UPDATE_QUANTITY", payload);
      updatedProducts = payload.products;
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
  }
};
