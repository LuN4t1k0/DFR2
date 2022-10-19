import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  //Crear el Carro de compras
  const [cart, setCart] = useState([]);
  const data = useFetch("/pizzas.json");

  const searchPizza = (e) => {
    e.preventDefault();
    navigate(`pizza/${e.target.id}`);
  };

  const addToCart = (id) => {
    if (isExist(id)) {
      const productoExistente = cart.map((item) =>
        item.id === id ? item.cantidad++ : item
      );
      setCart([productoExistente]);
    } else {
      const producto = { id, cantidad: 1 };
      setCart([...cart, producto]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isExist = (id) => {
    cart.find((item) => item.id === id) ? true : false;
  };

  const removeItem = (id) => {
    const position = cart.findIndex((item) => item.id === id);
    cart.splice(position, 1);
  };
console.log(cart)
  return (
    <AppContext.Provider
      value={{
        data,
        searchPizza,
        cart,
        addToCart,
        clearCart,
        isExist,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
