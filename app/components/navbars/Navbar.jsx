"use client"

import {BiLogoAndroid} from 'react-icons/bi'
import Button from '../Button'
import { useCallback, useState } from 'react'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

const Navbar =({
    session
}) =>{
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const handleSignUp =() =>{
        console.log(registerModal.isOpen)
       registerModal.onOpen();
    }

    const handleSignIn = useCallback(()=>{
        console.log(loginModal.isOpen)
        loginModal.onOpen()
    },[loginModal])


    const handleSignOut = useCallback(()=>{
        signOut()
    })
    return (
        <div
            className="flex flex-row justify-between items-center bg-neutral-100 shadow-emerald-200 shadow-neutral-800"
        >
            <BiLogoAndroid size={50} className='text-green-700'/>
            <div
                className='
                    flex
                    flex-row
                    gap-3
                    px-3
                    py-2
                '
            >
                {session?.user ?(
                    <>
                        <Image 
                             src={session?.user?.image ? session?.user?.image: '/avatar.jpg'}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className='rounded-full '
                        />
                        <Button 
                            onClick={handleSignIn}
                            label="my Profile" 
                        />
                        <Button 
                            onClick={handleSignIn}
                            label="my Blog" 
                        />
                        <Button 
                            onClick={handleSignIn}
                            label="my Application" 
                        />
                        <Button 
                        onClick={handleSignOut}
                            label="Sign out"
                            outline
                        />
                    </>
                ):(
                    <>
                        <Button 
                            onClick={handleSignIn}
                            label="Login" 
                        />
                        <Button 
                        onClick={handleSignUp}
                            label="Sign up"
                            outline
                        />
                    </>

                )}

                
            </div>
        </div>
    )
}

export default Navbar