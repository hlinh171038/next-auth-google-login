import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/User'
import Header from './components/Header'
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section
      
    >
   
        {session?.user ? (
          <>
           <Header
           title="Home Page"
           subtitle="show information data when login"
           center
         />
           <div className='
                 flex
                 justify-center
     
                 '
           >
           <div
             className='
               
               bg-neutral-50
               border-[1px]
               rounded-md
               w-6/12
               px-4
               py-3
               mb-8
             '
           >
             <Header 
               title="Server Side Rendering"
               center
             />
          <div>
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
          </div>
      </div>
      </>
        ):(
          <Header 
            title="You Have not Login"
            subtitle="Login with your google or github"
            center
        />
    
        )}
      
      <User />
    </section>
  )
}
