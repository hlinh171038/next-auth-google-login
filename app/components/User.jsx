'use client'

import { useSession } from 'next-auth/react'
import Header from './Header'
import Image from 'next/image'

export default function User() {
    const { data: session } = useSession()
  return (
    <div 
      className='
        flex
        justify-center

        '
    >
       {session?.user &&(
          <div
          className='
            
            bg-neutral-50
            border-[1px]
            rounded-md
            w-6/12
            px-4
            py-3
          '
          >
             <Header 
              title="Take Session In Client"
              center
            />
              <Image
                 src={session?.user?.image ? session?.user?.image: '/avatar.jpg'}
                width={50}
                height={50}
                alt="Avatar"
                className='rounded-full '
            />
            <div>
              <span>Username:</span>
              <span>{session?.user?.name}</span>
            </div>
            <div>
              <span>Email:</span>
              <span>{session?.user?.email}</span>
            </div>
           
          </div>
        )}
    </div>
  )
}
