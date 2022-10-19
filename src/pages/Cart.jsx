import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Cart = () => {
 const {cart} = useContext(AppContext)
 console.log(cart)
  return (
  <>
    {cart.map(item => <div></div> )}
  </>
  

  )
}

export default Cart