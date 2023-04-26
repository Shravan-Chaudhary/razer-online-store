'use client'
import Link from 'next/link'
import { useCart } from '../hooks/useCart'

function CartSidebar() {
  const { cartItems, total, removeFromCart } = useCart()

  return (
    <aside className='bg-gray-900 text-white w-64 py-6'>
      <h3 className='text-lg font-medium mb-4'>Shopping Cart</h3>
      {cartItems.length > 0 ? (
        <ul className='text-gray-400'>
          {cartItems.map((item) => (
            <li
              className='flex justify-between items-center mb-4'
              key={item.id}
            >
              <div className='flex items-center'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-16 h-16 object-contain mr-4'
                />
                <div>
                  <h4 className='font-medium'>{item.title}</h4>
                  <p className='text-sm'>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className='text-gray-400 hover:text-white'
                onClick={() => removeFromCart(item.id)}
              >
                <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm4.95 12.677c.293.292.293.767 0 1.06a.75.75 0 0 1-1.06 0L10 11.06l-3.89 3.677a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L8.94 10 5.05 6.323a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0L10 8.94l3.89-3.677a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06L11.06 10l3.89 3.677z'
                  />
                </svg>
              </button>
            </li>
          ))}
          <li className='flex justify-between items-center mt-4'>
            <p className='font-medium'>Total:</p>
            <p>${total.toFixed(2)}</p>
          </li>
          <li className='mt-4'>
            <Link
              href='/checkout'
              className='inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200'
            >
              Checkout
            </Link>
          </li>
        </ul>
      ) : (
        <p className='text-gray-400'>Your cart is empty</p>
      )}
    </aside>
  )
}

export default CartSidebar
