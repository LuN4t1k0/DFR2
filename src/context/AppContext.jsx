import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const data = useFetch("/pizzas.json");
  const navigate = useNavigate();
  //button
  const searchPizza = (e) => {
    e.preventDefault();
    navigate(`pizza/${e.target.id}`);

    console.log(e.target.id);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        searchPizza,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
