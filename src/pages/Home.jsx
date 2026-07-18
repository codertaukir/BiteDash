import React, { useContext, useState } from 'react'
import Navbar from '../compoents/Navbar'

import Card from '../compoents/Card'
import { food_items } from '../food'
import Categorys from '../Category'
import { dataContext } from '../context/Context'
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";


//tem for testing

import imageFood from '../assets/image1.avif'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'



const Home = () => {
  let { cate, setCate, input, showCart, setShowcart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    }
    else {
      let updateData = food_items.filter((item) => (item.food_category === category));
      setCate(updateData)
    }
  }
  const selector = useSelector(state => state.cart)
  console.log(selector);

  const dispatch = useDispatch()

  // const subtotal = selector.reduce((total, item) => total + Number(item.price), 0)
  // const deliveryFee = subtotal > 0 ? 20 : 0;
  // const texes = Number((subtotal * 0.01).toFixed(2));
  // const total = Number(deliveryFee + subtotal + texes)

  const subtotal = selector.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 20 : 0;
  const texex = Number((subtotal * 0.05).toFixed(2));
  const total = subtotal + deliveryFee + texex;


  return (
    <div className='flex flex-wrap flex-col gap-10'>
      <div className='w-full flex justify-center items-center flex-wrap ' style={{ marginTop: "100px" }} >
        {
          input ? "" : <div className='flex justify-center items-center gap-5 flex-wrap '  >
            {Categorys.map((item, idx) => (
              <div key={idx} className='  flex justify-center items-center gap-3 cursor-pointer duration-400 hover:bg-green-200 hover:transition-all flex-col w-36 h-36 bg-white rounded-sm shadow-md ' style={{ marginTop: "30px" }} onClick={() => filter(item.name)} >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        }
      </div>
      <div className='w-full flex justify-center items-center gap-6 flex-wrap' style={{ paddingBottom: "30px" }}>
        {
          cate.map((item, idx) => (<Card key={idx} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id} />))
        }
      </div>
      <div className={`md:w-[30%] w-full h-full fixed bg-white top-0 right-0 ${showCart ? "translate-x-0" : "translate-x-full"} transition-all duration-700`}>
        <header className='flex items-center justify-between text-green-500 text-lg' style={{ padding: "10px" }}>
          <span >Order Items</span>
          <IoMdClose className='text-2xl cursor-pointer active:shadow active:bg-gray-300 active:rounded-2xl ' onClick={() => setShowcart(false)} />

        </header>


        <div className='h-[60%] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>

          {selector.map((item, idx) => (
            <div id={idx} className="content flex justify-between shadow-xl gap-2.5 rounded-xl" style={{ padding: "10px", marginInline: "20px" }}>
              <div className='flex gap-7' >
                <div className='img w-30 h-20 rounded-2xl flex items-center  overflow-hidden bg-red-500'>
                  <img src={item.image} alt='' />
                </div>

                <div className='flex flex-col items-center  gap-2'>
                  <span>{item.name}</span>
                  <div className='flex items-center justify-center rounded-xl  h-10 border border-green-500 font-bold w-[100px] overflow-hidden' >
                    <button className=' h-full border-none w-9 flex items-center justify-center text-green-500 hover:bg-gray-100 cursor-pointer' onClick={() => { dispatch(increment(item.id)) }}>+</button>
                    <span className='bg-gray-100 w-9 h-full flex items-center justify-center text-green-500 ' >{item.quantity}</span>
                    <button className=' h-full w-9 border-none  flex items-center justify-center hover:bg-gray-100 text-green-500 font-bold cursor-pointer' onClick={() => { dispatch(decrement(item.id)) }}>-</button>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-end gap-1'>
                <h4 className='text-green-500 font-bold'>Rs {item.price}/-</h4>
                <RiDeleteBin6Line className='text-red-500 w-[20px] h-[30px] cursor-pointer' onClick={() => { dispatch(removeCart(item.id)) }} />

              </div>



            </div>
          ))
          }

        </div>

        {selector.length > 0 ?
          < div className="footer fixed bottom-0 right-0 w-full" style={{ padding: "30px" }}>
            <div className='flex flex-col border-t-2 border-b-2 border-black ' style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <div className='flex justify-between items-center '><span>Subtotal</span> <span className='text-green-500 font-bold'>Rs {subtotal}/-</span></div>
              <div className='flex justify-between items-center'><span>Delivery Fee</span><span className='text-green-500 font-bold'>Rs 20/-</span></div>
              <div className='flex justify-between items-center'><span>Taxes</span><span className='text-green-500 font-bold'>  Rs {texex} /-</span></div>
            </div>
            <div className='flex flex-col' style={{ paddingBottom: "10px" }}>
              <div className='flex justify-between items-center' style={{ paddingTop: "20px", paddingBottom: "10px" }} ><h4 >Total</h4> <h4 className='text-green-500 font-bold'> Rs {total}/-</h4></div>
              <button className='bg-green-500 text-white h-[35px] rounded-md shadow hover:bg-green-400 cursor-pointer' onClick={() => { toast.success("Order Placed...") }}>Place Order</button>
            </div>
          </div> : <div><h3 className='flex justify-center items-center text-green-500 font-bold text-xl '>Empty Cart</h3></div>

        }

      </div>

    </div >
  )
}

export default Home