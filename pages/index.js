import Image from 'next/image'
import homeImage from '../public/homepage.jpg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='mx-auto h-[80%] md:h-[70%] w-full'>
      <Image
        src={homeImage}
        alt='razermouse'
        className='object-cover object-center overflow-hidden md:object-cover'
      />
    </div>
  )
}
