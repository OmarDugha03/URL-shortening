import Image from 'next/image'
import { shrotDes, shrotMob } from '@/Images/index'
import Linkinputs from './Linkinputs'
import DeleteLink from './DeleteLink'
import Link from 'next/link'
import LinkComponent from './URL'

type Link = {
  _id: string
  link: string
}
const getLinks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/link', {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }
    return res.json()
  } catch (error) {
    console.log('Error loading topics: ', error)
  }
}

const Shorting = async ({}) => {
  const { links } = await getLinks()

  return (
    <>
      <div
        id='getStart'
        className='relative mx-4 h-full rounded bg-slate-700 p-4 lg:p-8'
      >
        <Image
          src={shrotDes}
          className='-z-10 hidden lg:absolute lg:right-1'
          alt='svg'
        />
        <Image
          src={shrotMob}
          className='absolute right-0 top-0 -z-10 lg:hidden'
          alt='svg'
        />
        <Linkinputs />
      </div>
      <div className='my-1 mb-12 w-full pb-12'>
        {links.map((i: Link) => (
          <div
            className='container z-20 mx-auto mt-4 flex items-center justify-between rounded-md bg-slate-200 p-6'
            key={i._id}
          >
            <Link
              href={`${i.link}`}
              target='_blank'
              className='text-blue-600 visited:text-purple-700'
            >
              <LinkComponent url={i.link} />
            </Link>
            <DeleteLink id={i._id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Shorting
