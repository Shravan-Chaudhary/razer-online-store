import Link from 'next/link'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

function Checkout({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  return (
    <div className='container m-auto w-full'>
      <h1 className='font-bold my-8 text-3xl md:text-5xl text-center text-off-white'>
        Checkout
      </h1>

      {/* Form and Cart Preview Container */}
      <div className='flex flex-col md:flex-row w-full justify-between'>
        {/* Form Container */}
        <form className='flex flex-col w-full px-6 md:px-0 md:w-1/2 mb-8 md:mr-12'>
          <h2 className='text-2xl md:text-4xl text-off-white'>
            Delivery Details
          </h2>

          {/* Name Input */}
          <div className='mt-5 md:mt-8 space-y-1'>
            <label htmlFor='name' className='leading-7 text-md md:text-xl'>
              Full Name
            </label>
            <input
              type='name'
              id='name'
              name='name'
              required
              className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>

          {/* Email Input */}
          <div className='mt-5 md:mt-8 space-y-1'>
            <label htmlFor='email' className='leading-7 text-md md:text-xl'>
              E-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>

          {/* Address Input */}
          <div className=' mt-5 md:mt-8 space-y-1'>
            <label htmlFor='address' className='leading-7 text-md md:text-xl'>
              Address
            </label>
            <input
              type='address'
              id='address'
              name='address'
              required
              className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>

          {/* Phone and ZipCode */}
          <div className='flex w-full justify-between'>
            {/* Phone */}
            <div className='w-1/2 mr-2 md:mr-4 mt-5 md:mt-8 space-y-1'>
              <label htmlFor='Phone' className='leading-7 text-md md:text-xl'>
                Phone
              </label>
              <input
                type='Phone'
                id='Phone'
                name='Phone'
                required
                className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            {/* Zip */}
            <div className='w-1/2 ml-2 md:ml-4 mt-5 md:mt-8 space-y-1'>
              <label htmlFor='zipcode' className='leading-7 text-md md:text-xl'>
                Zipcode
              </label>
              <input
                type='zipcode'
                id='zipcode'
                name='zipcode'
                required
                className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>

          {/* Town and State */}
          <div className='flex w-full justify-between'>
            {/* Town */}
            <div className='w-1/2 mr-2 md:mr-4 mt-5 md:mt-8 space-y-1'>
              <label htmlFor='city' className='leading-7 text-md md:text-xl'>
                City
              </label>
              <input
                type='city'
                id='city'
                name='city'
                required
                className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            {/* State */}
            <div className='w-1/2 ml-2 md:ml-4 mt-5 md:mt-8 space-y-1'>
              <label htmlFor='state' className='leading-7 text-md md:text-xl'>
                State
              </label>
              <input
                type='state'
                id='state'
                name='state'
                required
                className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
          </div>
        </form>

        {/* Cart Preview Container */}
        <div className='w-11/12 md:min-h-80vh md:w-1/2 pb-10 md:pb-0 mt-8 md:ml-12 mx-auto'>
          <div className=' bg-razer-light-gray px-10 py-12 '>
            <h2 className='font-semibold text-2xl md:text-3xl text-center text-off-white'>
              Your Cart
            </h2>

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
                    <div className='flex flex-col space-x-2 md:space-y-5 my-8'>
                      <div className='w-2/3 text-lg md:text-xl font-medium'>
                        {cart[k].name}
                      </div>
                      <div className='flex flex-row w-1/3 text-gray-400 text-md md:text-lg'>
                        <button onClick={removeFromCart}>
                          <FaMinus className='mt-1.5 mr-2 md:mr-3' />
                        </button>
                        x{cart[k].qty}
                        <button onClick={addToCart}>
                          <FaPlus className='mt-1 ml-2 md:ml-3' />
                        </button>
                      </div>
                    </div>
                    <hr class='h-px border-0 bg-off-white' />
                  </li>
                )
              })}
            </ul>

            {/* Total  */}
            <div className='flex w-full justify-between text-off-white text-xl md:text-3xl my-8 md:my-12'>
              <div>Total</div>
              <div>INR₹100000</div>
            </div>

            {/* Checkout and Clear Buttons Container */}
            <div className='flex flex-col mt-16 space-y-5'>
              <Link href='/checkout'>
                <button class='flex mx-auto  text-black font-semibold tracking-wider bg-razer-green border-0 py-3 px-14 focus:outline-none hover:bg-razer-light-green rounded text-lg uppercase'>
                  Pay Now
                </button>
              </Link>
              {/* <button class='flex mx-auto text-black font-semibold tracking-wider bg-razer-green border-0 py-3 px-14 focus:outline-none hover:bg-razer-light-green rounded text-md uppercase'>
            Clear Cart
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
