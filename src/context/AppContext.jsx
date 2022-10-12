import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const data = useFetch("/pizzas.json");

  //vaciar carro de compras
  const cleanCart =() => {
    setCart([])
  }

  //existe producto
  const isInCart = (id) => {
    cart.find(item => item.id === id ) ? true : false
  }

  

  return (<AppContext.Provider value={{ data }}>
    {children}
    </AppContext.Provider>);
};

export default AppProvider;
