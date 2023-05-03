import React from 'react'
import Link from 'next/link'
import Product from '@/models/Product'
import mongoose from 'mongoose'

function Mice({ products }) {
  return (
    <div>
      <section className='text-white body-font bg-razer-gray'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {/* Product Card */}
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className='lg:w-1/4 md:w-1/2 p-4 w-full '
                >
                  {/* Image container */}
                  <div className='bg-razer-black'>
                    <Link
                      href={`/product/${product.slug}`}
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
                      Mice
                    </h3>
                    <Link href='/product/p1'>
                      {' '}
                      <h2 className='text-white title-font text-xl font-medium'>
                        {product.title}
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
    </div>
  )
}

export default Mice

// Backend Code
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'mice' })
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}
