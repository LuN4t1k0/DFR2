import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Cart = () => {
 const {cart} = useContext(AppContext)
  return (
    <div>Cart</div>
  )
}

export default Cart