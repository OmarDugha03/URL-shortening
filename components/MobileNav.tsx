'use client'
import { avatar, logo, menu } from '@/public/images'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode, useState } from 'react'

interface MobileNavProps {
  signOut: ReactNode
}

const MobileNav: FC<MobileNavProps> = ({ signOut }) => {
  const { status, data } = useSession()
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
              <Link href='/api/auth/signin' className='my-5'>
                log in{' '}
              </Link>
            ) : (
              <div className='flex items-center'>
                <div className='me-5 flex'>{signOut}</div>

                <Image
                  width={44}
                  height={44}
                  src={data?.user?.image || '../public/images/logo.svg'}
                  alt={`${data?.user?.name}'s Image`}
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

          <div className='flex w-[90%] flex-col items-center border-t text-center '>
            {status === 'unauthenticated' ? (
              <Link href='/api/auth/signin' className='my-5'>
                log in{' '}
              </Link>
            ) : (
              <div className='flex items-center'>
                <span className='mt-4'> {signOut}</span>
                <div className='mx-4 my-4 flex items-center px-2'>
                  <Image
                    width={28}
                    height={28}
                    className='ml-6 rounded-full'
                    src={'../public/images/logo.svg'}
                    alt='avatar'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav
