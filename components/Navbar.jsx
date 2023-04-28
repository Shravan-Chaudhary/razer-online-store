import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  //  Toggle Cart Function
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
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center border-b-2 border-razer-green sticky top-0 z-10 bg-black'>
      {/* Logo Container */}
      <div className='logo mx-8 py-3'>
        <Link href='/'>
          <Image src='/razerLogo.png' alt='logo' height={10} width={50} />
        </Link>
      </div>

      {/* Links Container */}
      <div className='nav'>
        <div className='flex items-center space-x-8 text-md md:text-xl md:ml-4'>
          <Link href='/laptops' className='opacity-75 hover:opacity-100'>
            Laptops
          </Link>
          <Link href='/mice' className='opacity-75 hover:opacity-100'>
            Mice
          </Link>
          <Link href='/keyboards' className='opacity-75 hover:opacity-100'>
            Keyboards
          </Link>
          <Link href='/headsets' className='opacity-75 hover:opacity-100'>
            Headsets{' '}
          </Link>
        </div>
      </div>

      {/* Cart Container */}
      <div className='cart absolute right-0 top-6 mx-5 ' onClick={toggleCart}>
        <AiOutlineShoppingCart className='cursor-pointer text-2xl md:text-3xl opacity-75 hover:opacity-100 ' />
      </div>

      {/* SideBar */}
      <div
        ref={ref}
        className='z-30 w-72 md:w-80 sidebar absolute top-0 right-0 border border-gray-500 bg-razer-light-gray rounded-lg px-8 py-10 transform transition-transform translate-x-full'
      >
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        {/* Close Button */}
        <span
          className='absolute top-4 right-4 md:top-5 md:right-5 cursor-pointer text-xl md:text-2xl'
          onClick={toggleCart}
        >
          <GrClose />
        </span>

        {/* Items */}
        <ul>
          {Object.keys(cart).length == 0 && (
            <div className='my-4 font-semibold text-center text-2xl text-razer-black'>
              Your Cart is Empty
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className='flex flex-col space-y-1 my-6'>
                  <div className='w-2/3 text-xl font-medium'>
                    {cart[k].name}
                  </div>
                  <div className='w-1/3 text-gray-400 text-lg'>
                    x{cart[k].qty}
                  </div>
                </div>
                <hr class='h-px border-0 bg-gray-500' />
              </li>
            )
          })}
        </ul>

        {/* Checkout and Clear Buttons Container */}
        <div className='flex flex-col mt-16 space-y-5'>
          <Link href='/checkout'>
            <button
              class='flex mx-auto  text-black font-semibold tracking-wider bg-razer-green border-0 py-2 px-8 md:py-3 md:px-14 focus:outline-none hover:bg-razer-light-green rounded text-lg uppercase'
              onClick={toggleCart}
            >
              Checkout
            </button>
          </Link>
          {/* <button class='flex mx-auto text-black font-semibold tracking-wider bg-razer-green border-0 py-3 px-14 focus:outline-none hover:bg-razer-light-green rounded text-md uppercase'>
            Clear Cart
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
