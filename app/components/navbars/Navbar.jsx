"use client"

import {BiLogoAndroid} from 'react-icons/bi'
import Button from '../Button'
import { useState } from 'react'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'

const Navbar =() =>{
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const handleSignUp =() =>{
        console.log(loginModal.isOpen)
       loginModal.onOpen();
    }
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
                <Button 
                    label="Login" 
                />
                <Button 
                   onClick={handleSignUp}
                    label="Sign up"
                    outline
                />
            </div>
        </div>
    )
}

export default Navbar