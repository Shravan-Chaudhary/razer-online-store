import Link from 'next/link'
import React from 'react'
import Product from '@/models/Product'
import mongoose from 'mongoose'

function Laptops({ products }) {
  return (
    <section className='text-white body-font bg-razer-gray'>
      {/* Products Cards Container */}
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {/* Product Card */}
          {products.map((product) => {
            return (
              <div key={product._id} className='lg:w-1/4 md:w-1/2 p-4 w-full '>
                {/* Image container */}
                <div className='bg-razer-black'>
                  <Link
                    href={`product/${product.slug}`}
                    className='block relative overflow-hidden'
                  >
                    <img
                      alt='ecommerce'
                      className='m-auto md:m-0 h-[30vh] md:h-[36vh]'
                      src={product.image}
                    />
                  </Link>
                </div>

                {/* Title Price Container */}
                <div className='py-5 md:py-6 bg-black px-6 text-center md:text-left'>
                  <h3 className='text-white text-xs tracking-widest mb-1'>
                    {product.title}
                  </h3>
                  <Link href='/product/p1'>
                    {' '}
                    <h2 className='text-white title-font text-xl font-medium'>
                      The Catalyzer
                    </h2>
                  </Link>
                  <p className='mt-1'>₹{product.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Laptops

// Backend Code
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'laptop' })
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}
