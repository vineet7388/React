import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import React from "react"
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }
    const cartItems = useSelector(
        (store)=>store.cart.items
    )
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="m-2 p-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button> 
        {cartItems.length>0 ? <ItemList items={cartItems}></ItemList> : <div>Add Items to Cart</div>}
            
        </div>
        
        </div>
  )
}

export default Cart