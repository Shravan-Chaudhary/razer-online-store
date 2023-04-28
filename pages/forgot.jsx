import Link from 'next/link'

function Forgot() {
  return (
    <div>
      <div className='w-full m-auto'>
        <div className='mx-auto w-11/12 md:w-1/3 bg-razer-black mb-10 mt-10 md:mb-14 md:mt-14'>
          <div className='m-auto py-12 px-6 sm:p-20 :w-10/12'>
            <div className='space-y-4'>
              <p className='font-medium text-center drop-shadow-md text-2xl md:text-4xl text-off-white'>
                Forgot Password?
              </p>
            </div>
            <div className='space-y-4 mt-5 md:mt-8'>
              <p className='font-light tracking-wider text-center drop-shadow-md text-md md:text-lg text-off-white'>
                Enter Email to Reset Password
              </p>
            </div>

            <form action='' className='space-y-6 py-6 mb-10'>
              <div>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required
                  className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>

              <div>
                <button className='w-full px-6 py-3 rounded-md bg-razer-green transition hover:bg-razer-light-green focus:bg-razer-light-green active:bg-razer-green'>
                  <span className='font-semibold text-black text-lg md:text-xl tracking-wider uppercase'>
                    Continue
                  </span>
                </button>

                <Link href='/login' type='reset' className='w-max p-3 -ml-3'>
                  <span>Or </span>
                  <span className='text-sm tracking-wide text-razer-green hover:text-razer-green md:text-md'>
                    Log In
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgot
