import { GrClose } from 'react-icons/gr'

function Sidebar({ toggleCart }) {
  const toggle = () => {
    toggleCart()
  }

  const style = { color: '#222222' }
  return (
    <div className='sidebar absolute top-0 right-0 border border-gray-400 bg-razer-light-gray rounded-lg p-10 transform transition-transform translate-x-full'>
      <h2 className='font-bold text-xl'>Shopping Cart</h2>
      <span
        className='absolute top-4 right-4 md:top-5 md:right-5 cursor-pointer text-xl md:text-2xl'
        onClick={toggle}
      >
        <GrClose style={style} />
      </span>
      <ul>
        <li>
          <span>Razer 15 Inch</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
