import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = { email, password }
    let res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    let response = await res.json()
    let success = response.success
    let error = response.error
    notify(success, error)
    setEmail('')
    setPassword('')
    if (success) {
      setInterval(() => {
        router.push('/')
      }, 1000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const notify = (success, error) => {
    if (success) {
      toast.success(success, {
        position: 'top-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      toast.error(error, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  return (
    <div>
      <ToastContainer
        position='top-left'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='w-full m-auto'>
        <div className='mx-auto w-11/12 md:w-1/3 bg-razer-black mb-10 mt-10 md:mb-14 md:mt-14'>
          <div className='m-auto py-12 px-6 sm:p-20 :w-10/12'>
            <div className='space-y-4'>
              <p className='font-medium text-center drop-shadow-md text-4xl md:text-5xl text-off-white'>
                Welcome Back !
              </p>
            </div>

            <div className='mt-12 grid gap-6 sm:grid-cols-2'>
              <button className='py-3 px-6 rounded-md bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200'>
                <div className='flex gap-4 justify-center'>
                  <img src='/google.svg' className='w-5' alt='' />
                  <span className='block w-max font-medium tracking-wide text-sm text-razer-light-gray hover:text-razer-green md:text-md'>
                    with Google
                  </span>
                </div>
              </button>
              <button className='py-3 px-6 rounded-md bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700'>
                <div className='flex gap-4 items-center justify-center text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='w-5'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                  </svg>
                  <span className='block w-max font-medium tracking-wide text-sm text-white'>
                    with Github
                  </span>
                </div>
              </button>
            </div>

            <div role='hidden' className='mt-12 border-t text-off-white'>
              <span className='block w-max mx-auto -mt-3 px-4 text-center text-razer-light-gray bg-off-white'>
                Or
              </span>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6 py-6 mb-10'>
              <div>
                <input
                  onChange={handleChange}
                  value={email}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required
                  className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>

              <div className='flex flex-col items-end'>
                <input
                  onChange={handleChange}
                  value={password}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  required
                  className='w-full bg-black rounded border border-gray-400 focus:border-razer-green focus:ring-2 focus:ring-razer-green text-base outline-none text-white py-1 md:py-2 px-2 md:px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                <Link href='/forgot'>
                  <button type='reset' className='w-max p-3 -mr-3'>
                    <span className='text-sm tracking-wide text-off-white hover:text-razer-green md:text-md'>
                      Forgot password ?
                    </span>
                  </button>
                </Link>
              </div>

              <div>
                <button className='w-full px-6 py-3 rounded-md bg-razer-green transition hover:bg-razer-light-green focus:bg-razer-light-green active:bg-razer-green'>
                  <span className='font-semibold text-black text-lg md:text-xl tracking-wider uppercase'>
                    Log In
                  </span>
                </button>

                <Link href='/signup' type='reset' className='w-max p-3 -ml-3'>
                  <span>Don&#39;t have and account? </span>
                  <span className='text-sm tracking-wide text-razer-green hover:text-razer-green md:text-md'>
                    Create new account
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

export default Login
