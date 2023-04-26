import Link from 'next/link'
import React from 'react'

function Laptops() {
  return (
    <section className='text-white body-font bg-razer-gray'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {/* Product Card */}
          <div className='lg:w-1/4 md:w-1/2 p-4 w-full '>
            {/* Image container */}
            <div className='bg-razer-black'>
              <Link
                href='/product/p1'
                className='block relative overflow-hidden'
              >
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </Link>
            </div>

            {/* Title Price Container */}
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest mb-1'>
                Laptop
              </h3>
              <Link href='/product/p1'>
                {' '}
                <h2 className='text-white title-font text-xl font-medium'>
                  The Catalyzer
                </h2>
              </Link>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                Shooting Stars
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                Neptune
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                The 400 Blows
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                The Catalyzer
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                Shooting Stars
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                Neptune
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>

          <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
            <div className='bg-razer-black'>
              <a className='block relative overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                  src='/razerLaptop1.png'
                />
              </a>
            </div>
            <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
              <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                CATEGORY
              </h3>
              <h2 className='text-white title-font text-lg font-medium'>
                The 400 Blows
              </h2>
              <p className='mt-1'>₹200000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Laptops
