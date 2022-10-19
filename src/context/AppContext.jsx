import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    const request = await fetch("./pizzas.json");
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    totalPrice(), countItemIntoCart();
  }, [cart]);

  const addToCart = (id) => {
    let update;
    const obj = data.find((item) => item.id == id);
    isExist(id)
      ? ((update = cart.map((element) =>
          element.id === id ? (element.cantidad++, element) : element
        )),
        setCart(update))
      : setCart([...cart, { ...obj, cantidad: 1 }]);
  };

  const removeItem = (id) => {
    const itemToRemove = cart.findIndex((item) => item.id === id);
    const { cantidad } = cart[itemToRemove];
    if (cantidad > 1) {
      cart[itemToRemove].cantidad--;
    } else {
      cart.splice(itemToRemove, 1);
    }
    setCart([...cart]);
  };

  const deleteItem = (id) => {
    if (isExist(id)) {
      const deleteElement = cart.findIndex((item) => item.id === id);
      cart.splice(deleteElement, 1);
      setCart([...cart]);
    } else {
      alert("No existen elementos ");
    }
  };

  const countItemIntoCart = () => {
    setCount(cart.reduce((a, b) => a + b.cantidad, 0));
  };

  const totalPrice = () => {
    setTotal(cart.reduce((a, { cantidad, price }) => a + cantidad * price, 0));
  };

  const isExist = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  const emptyCart = () => {
    setCart([])
  }

  const searchPizza = (e) => {
    e.preventDefault();
    navigate(`pizza/${e.target.id}`);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        addToCart,
        removeItem,
        deleteItem,
        count,
        countItemIntoCart,
        total,
        emptyCart,
        searchPizza,
        cart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
