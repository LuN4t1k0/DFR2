import React, { createContext, useState } from 'react'
export const AppContext = createContext()

const AppProvider = ({children}) => {
  const [carro, setCarro] = useState([])
  const [ingrediente, setIngrediente] = useState([])
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider