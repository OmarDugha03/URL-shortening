'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { avatar, logo, menu } from '@/Images/index'
import Link from 'next/link'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [toggle, setToggle] = useState(false)
  const list = [{ id: 'Features' }, { id: 'Pricing' }, { id: 'Resources' }]

  return (
    <>
      <nav className='  z-10 flex items-center justify-between overflow-hidden border-b-[0.5px]  bg-white  p-4'>
        <Image src={logo} alt='logo' />
        <Image
          src={menu}
          alt='menu'
          onClick={() => setToggle(prev => !prev)}
          className='lg:hidden'
        />
        <div className='hidden px-4 lg:flex lg:items-center'>
          {list.map(i => (
            <Link className='hidden px-6 lg:flex ' href='#' key={i.id}>
              {i.id}
            </Link>
          ))}
          <div className='flex w-[90%] flex-col items-center justify-center '>
            {status === 'unauthenticated' ? (
              <Link href='/login' className='my-5'>
                log in{' '}
              </Link>
            ) : (
              <div className='mx-4 flex items-center px-2'>
                <button onClick={() => {}}>log out </button>
                <Image
                  width={28}
                  height={28}
                  className='ml-6 rounded-full'
                  src={avatar}
                  alt='avatar'
                />
              </div>
            )}
          </div>
        </div>
      </nav>
      {toggle && (
        <div className='absolute z-10 mx-4 my-3 flex  w-[90%] flex-col items-center rounded-md bg-slate-100 py-4 lg:hidden'>
          {toggle &&
            list.map(item => (
              <Link
                className='m-1 p-2 font-medium tracking-wide '
                key={item.id}
                href='#'
              >
                {item.id}
              </Link>
            ))}

          <div className='flex w-[90%] flex-col items-center border-t '>
            {status === 'unauthenticated' ? (
              <Link href='/login' className='my-5'>
                log in{' '}
              </Link>
            ) : (
              <div className='mx-4 my-4 flex items-center px-2'>
                <button onClick={() => {}}>log out </button>
                <Image
                  width={28}
                  height={28}
                  className='ml-6 rounded-full'
                  src={'../public/images/logo.svg'}
                  alt='avatar'
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
