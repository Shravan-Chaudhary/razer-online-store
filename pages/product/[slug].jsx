import { useRouter } from 'next/router'
import Product from '@/models/Product'
import mongoose from 'mongoose'

export default function Page({ addToCart, product }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <section className='text-white body-font overflow-hidden'>
        <div className='container px-5 py-16 mx-auto'>
          {/* Image Container */}
          <div className='w-full mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-3/5 w-full lg:h-auto h-64 object-cover object-center '
              src={product.image}
            />

            {/* Title */}
            <div className='lg:w-2/6 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h1 className='text-razer-green text-3xl title-font font-medium mb-1'>
                {product.title}
              </h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-indigo-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <span className='text-gray-600 ml-3'>4 Reviews</span>
                </span>
              </div>

              {/* Description */}
              <p className='leading-relaxed text-md md:text-lg'>
                {product.description}
              </p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3'>Color</span>
                  <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-razer-green rounded-full w-6 h-6 focus:outline-none'></button>
                </div>
                <div className='flex ml-6 items-center'>
                  <span className='mr-3'>Size</span>
                  <div className='relative'>
                    <select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-white'>
                  ₹{product.price}
                </span>
                <button
                  className='flex ml-auto text-black tracking-wider font-bold bg-razer-green border-0 py-4 px-10 focus:outline-none hover:bg-razer-light-green rounded'
                  onClick={() => addToCart({ product })}
                >
                  Add to Cart
                </button>
              </div>
              {/* Pincode Container */}
              <div className='flex mt-6 space-x-4 w-full mx-auto'>
                <input
                  type='text'
                  className='text-black px-3 border-2 rounded '
                />
                <button className='flex ml-auto text-black tracking-wider font-bold bg-razer-green border-0 py-4 px-10 focus:outline-none hover:bg-razer-light-green rounded'>
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Backend Code
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  try {
    const { slug } = context.query
    const product = await Product.findOne({ slug })

    return {
      props: { product: JSON.parse(JSON.stringify(product)) },
    }
  } catch (error) {
    console.log(error)
    return {
      props: { product: null },
    }
  }
}
