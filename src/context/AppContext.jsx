import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const data = useFetch("/pizzas.json");

  //vaciar carro de compras
  const cleanCart = () => {
    setCart([]);
  };

  //existe producto
  const isInCart = (id) => {
    cart.find((item) => item.id === id) ? true : false;
  };

  //remover producto
  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };

  //agregar Producto
  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        })
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        addProduct,
        removeProduct,
        isInCart,
        cleanCart,
        cart,
        setCart,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
