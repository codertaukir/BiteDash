import React, { createContext, useState } from 'react'
import { food_items } from '../food'


export const dataContext = createContext()



const Context = ({ children }) => {
  let [cate, setCate] = useState(food_items)
  let [input, setInput] = useState("")
  let [showCart, setShowcart] = useState(false)

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowcart
  }


  return (


    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>

  )
}

export default Context