'use client'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRef } from 'react'

function CartIcon() {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='cart absolute right-0 top-6 mx-5 ' onClick={toggleCart}>
      <AiOutlineShoppingCart className='cursor-pointer text-2xl md:text-3xl opacity-75 hover:opacity-100 ' />
    </div>
  )
}

export default CartIcon
