"use client"

import {BiLogoAndroid} from 'react-icons/bi'
import Button from '../Button'

const Navbar =() =>{
    return (
        <div
            className="flex flex-row justify-between items-center bg-neutral-100 shadow-emerald-200"
        >
            <BiLogoAndroid size={50} className='bg-green-700'/>
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
                    label="Sign up"
                    outline
                />
            </div>
        </div>
    )
}

export default Navbar