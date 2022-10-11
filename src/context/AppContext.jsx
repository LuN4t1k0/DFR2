import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const data = useFetch("/pizzas.json");
  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export default AppProvider;
