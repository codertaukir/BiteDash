import React from 'react'
import { food_items } from '../food.js'

import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/cartSlice.js';
import { toast } from 'react-toastify';

const Card = ({ image, name, price, type, id }) => {

    const dispatch = useDispatch()


    return (
        <>

            <div className=' shadow-md  h-[340px] w-[250px] transition-all bg-white rounded-xl hover:border-1 border-green-300' style={{ padding: "10px", marginTop: "30" }}>
                <div className="rounded-xl w-[100%] h-[60%] overflow-hidden">
                    <img src={image} className='h-[100%] w-[100%] rounded-xl object-cover' alt="" />
                </div>
                <div className='flex gap-4 flex-col'>
                    <div className='text-lg font-semibold' style={{ paddingTop: "10px" }}>{name}</div>
                    <div className="text-green-500 font-semibold flex justify-between items-center">Rs {price} /-   <div className="flex justify-center items-center gap-3">{type === "veg" ? <LuVegan /> : <GiChickenOven />}<span>{type}</span></div></div>
                    <button className='bg-green-500 w-full h-8 rounded-md transition-all duration-300 text-white cursor-pointer hover:bg-green-400' onClick={() => { dispatch(addCart({ id: id, name: name, image: image, price: price, })); toast.success("Order Added...") }}>Add +</button>
                </div>

            </div>


        </>
    )
}

export default Card