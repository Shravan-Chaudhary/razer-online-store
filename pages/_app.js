import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)

  // load cart from local storage
  useEffect(() => {
    console.log('loading cart')
    const cart = localStorage.getItem('cart')

    try {
      if (cart) {
        setCart(JSON.parse(cart))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  // save cart in local storage
  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))

    let subT = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubtotal(subT)
  }

  // Add item to cart and increment if already exists
  const addToCart = (itemCode, qty, price, name) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty += qty
    } else {
      newCart[itemCode] = { qty: 1, price, name }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  // Remove item from cart
  const removeFromCart = (itemCode, qty, price, name) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty -= qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  // clear cart
  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </>
  )
}
