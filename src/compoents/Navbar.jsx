import React, { useContext, useEffect } from 'react'
import { MdFastfood } from 'react-icons/md'
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/Context';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { input, setInput, cate, setCate, setShowcart } = useContext(dataContext)

  const selector = useSelector(state => state.cart)


  useEffect((item) => {

    setCate(food_items.filter((item) => (item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))))
  }, [input])

  return (
    <div className='w-full h-[100px] fixed top-0  flex justify-between items-center ' style={{ paddingInline: "20px" }} >
      <div className='flex items-center justify-center w-[50px] h-[50px] bg-white rounded-md shadow-xl md:w-[70px] md:h-[70px]'>
        <MdFastfood className=' text-green-500 w-[25px] h-[25px] md:w-[40px] h-[40px]' />
      </div>

      <form className='flex justify-center w-[55%] h-[50px] bg-white rounded-sm shadow-xl gap-3.5 items-center md:w-[60%] md:h-[70px]' onSubmit={(e) => { e.preventDefault() }}>
        <FaSearch className=' text-green-500 w-[20px] h-[20px] cursor-pointer' />
        <input type="search" placeholder='Search' className='h-9 w-[70%] outline-none text-md md:h-9 md:w-[90%]' style={{ paddingInline: "14px" }} value={input} onChange={(e) => { setInput(e.target.value) }} />
      </form>
      <div className='flex items-center justify-center w-[50px] h-[50px] bg-white rounded-md shadow-xl md:w-[70px] md:h-[70px] cursor-pointer' onClick={() => setShowcart(true)}>
        <LuShoppingBag className=' text-green-500 w-[25px] h-[25px] md:w-[40px] h-[40px] relative ' /> <span className='absolute text-green-500 font-semibold top-5 right-7 md:top-3 md:right-8'>{selector.length}</span>
      </div>
    </div>
  )
}

export default Navbar