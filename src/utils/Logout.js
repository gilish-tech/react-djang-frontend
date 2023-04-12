import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context'

export const Logout = () => {
  const {setToken,setUsername} = useContext(CartContext)  
  function logout(){

    localStorage.removeItem("tokens")
    localStorage.removeItem("name")
    setToken(null)
    setUsername(null)
    localStorage.removeItem("item")
    window.location.reload()

  }

  return {logout}
}
