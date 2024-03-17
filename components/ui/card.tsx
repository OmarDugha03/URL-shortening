import Image from 'next/image'
import { ReactNode } from 'react'
import { FC } from 'react'

interface CardsProps {
  src: string
  heading: string
  desc: string
  className?: ReactNode
}

const Cards: FC<CardsProps> = ({ src, heading, desc, className }) => {
  return (
    <div className={className + ''}>
      <div
        className={
          ' m-5 my-12 flex max-w-md flex-col items-center rounded bg-white  px-1 py-4  text-center lg:my-1 lg:py-2 lg:text-left '
        }
      >
        <div className='mt-[-50px]'>
          <div className='w-fit rounded-full bg-slate-800 p-4 '>
            <Image src={src} alt='icons' className='w-8' />
          </div>
        </div>
        <h2 className='mx-4 py-2 text-xl font-black tracking-tight'>
          {heading}
        </h2>
        <p className='mx-4 py-4 pb-6 text-lg leading-relaxed text-gray-500'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Cards
