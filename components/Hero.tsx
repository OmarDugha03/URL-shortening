import Image from 'next/image'
import { FC } from 'react'
import { working } from '@/Images/index'
import Link from 'next/link'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className='flex flex-col items-center gap-y-4 overflow-hidden p-3 lg:flex-row-reverse lg:justify-evenly lg:py-12'>
      <div className='mr-[-70px] lg:mr-[-200px]'>
        <Image src={working} alt='illustration-working' />
      </div>
      <div className='max-w-md py-4 text-center lg:text-left '>
        <h1 className='mx-4 py-2 text-4xl font-black tracking-tight'>
          {' '}
          More than just shorter links
        </h1>
        <p className='my-6 py-4 pb-6 text-lg leading-relaxed text-gray-500'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link
          href='#getStart'
          className='my-6 rounded-full bg-emerald-600 px-12 py-5 font-bold text-white shadow-xl transition-all delay-100 duration-100 ease-linear hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1'
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Hero
