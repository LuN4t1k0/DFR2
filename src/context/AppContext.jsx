import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const data = useFetch("/pizzas.json");

  const cleanCart =() => {
    setCart([])
  }


  return (<AppContext.Provider value={{ data }}>
    {children}
    </AppContext.Provider>);
};

export default AppProvider;
