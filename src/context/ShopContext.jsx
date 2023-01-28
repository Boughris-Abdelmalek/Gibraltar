import { createContext, useReducer, useContext } from "react";
import { shopReducer, initialState } from "../reducers/shopReducer";

// We create a context and we add the initialState imported
const ShopContext = createContext(initialState);

// creating a provider to allows all its children components to subscribe to the context's changes.
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = [...state.products, product];
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };
  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updateQuantity = (product, newQuantity) => {
    const updatedProducts = state.products.map((currentProduct) => {
      if (currentProduct.name === product.name) {
        return { ...currentProduct, quantity: newQuantity };
      }
      return currentProduct;
    });

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        products: updatedProducts,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
