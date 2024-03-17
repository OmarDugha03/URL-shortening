import { FC } from 'react'
import Cards from './ui/card'
import { customizable, brandIcon, detailed } from '@/Images/index'
interface AdvancedProps {}

const Advanced: FC<AdvancedProps> = ({}) => {
  return (
    <div className='bg-slate-200 pt-20'>
      <div className='mx-4 flex flex-col items-center'>
        <h2 className='py-2 text-3xl font-black tracking-tight'>
          Advanced Statistics
        </h2>
        <p className='py-4 pb-6 text-lg leading-relaxed text-gray-500'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className='relative flex flex-col items-center py-8 lg:grid lg:grid-cols-3 lg:grid-rows-3'>
        <Cards
          src={brandIcon}
          heading={'Brand Recognition'}
          desc={
            'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
          }
        />
        <div className='xs:top-[728px] ls:hidden s:h-[63px] s:top-[326px] absolute h-2 w-2  bg-emerald-500 md:top-[296px] md:block lg:left-[430px] lg:top-52 lg:block lg:h-2 lg:w-[40px]  2xl:hidden' />

        <Cards
          className='lg:row-span-2'
          src={detailed}
          heading={'Detailed Records'}
          desc={
            'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
          }
        />

        <Cards
          className='lg:row-span-3'
          src={customizable}
          heading={'Fully Customizable'}
          desc={
            'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
          }
        />
        <div className='xs:top-[728px] s:h-[63px] s:top-[668px] ls:hidden absolute h-[64px] w-2 bg-emerald-500 md:top-[612px] md:block lg:left-[880px] lg:top-80 lg:block lg:h-2 lg:w-[40px]   2xl:hidden' />
      </div>
    </div>
  )
}

export default Advanced
