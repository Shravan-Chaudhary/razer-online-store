import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  // load cart from local storage
  useEffect(() => {
    const localCart = localStorage.getItem('cart')

    try {
      if (localCart) {
        setCart(JSON.parse(localCart))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  // save cart in local storage
  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
  }

  // Add item to cart and increment if already exists
  const addToCart = ({ product }) => {
    //  check if item is already in cart
    const index = cart.findIndex((cartItem) => cartItem._id === product._id)
    // if not in cart, add it
    const newCart = [...cart]
    if (index === -1) {
      setCart([...cart, { ...product, qty: 1 }])
    }
    // if in cart, increment qty
    else {
      newCart[index].qty++
      setCart(newCart)
    }
    // save cart to local storage
    saveCart(newCart)
  }

  // Remove item from cart
  const removeFromCart = (product) => {
    const newCart = cart.filter((cartItem) => cartItem._id !== product._id)
    setCart(newCart)
    saveCart(newCart)
  }

  // // clear cart
  const clearCart = () => {
    setCart([])
    saveCart([])
  }

  //  calculate subtotal

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} />
      <Component cart={cart} addToCart={addToCart} {...pageProps} />
      <Footer />
    </>
  )
}
