import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavBar = () => {
  return (
<nav className='flex justify-between text-white bg-black w-full h-20 items-center p-5'>
  <div className="izquierda">Pizzeria Mamma Mia!</div>
  <div className="flex justify-around sm:w20 w-60 centro">
    <div><NavLink>Home</NavLink></div>
    <div><NavLink>Home</NavLink></div>
  </div>
  <div className="derecha"><i class="fa-solid fa-cart-shopping"></i></div>
</nav>
  )
}

export default MyNavBar