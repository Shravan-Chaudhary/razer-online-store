import React from 'react'

function Order() {
  return (
    <div>
      <section className='text-off-white body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
              <h1 className='text-off-white text-3xl md:text-5xl title-font font-medium mb-4'>
                Order Placed Successfully
              </h1>
              <h2 className=' text-lg md:text-2xl title-font text-off-white tracking-widest mb-5'>
                Order Id: #123456789
              </h2>
              <p className='leading-relaxed mb-4'>
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy
              </p>
              <div className='flex space-x-3 my-6 md:my-8'>
                <div className='w-1/3'>Image</div>
                <div className='w-2/3 text-xl font-medium'>Razer 15 inch</div>
                <div className='w-1/3 text-gray-400 text-lg'>x2</div>
              </div>
              <hr class='h-px border-0 bg-gray-500' />
              <div className='flex mt-8'>
                <span className='title-font font-medium text-xl md:text-2xl text-off-white mt-2'>
                  Total: $58.00
                </span>
                <button className='flex ml-auto text-razer-black font-semibold tracking-wider uppercase text-lg bg-razer-green border-0 py-2 px-6 md:py-3 md:px-10 focus:outline-none hover:bg-razer-green rounded'>
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src='https://dummyimage.com/400x400'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order
