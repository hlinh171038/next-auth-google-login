"use client"

import {BiLogoAndroid} from 'react-icons/bi'
import Button from '../Button'
import { useCallback } from 'react'

const Modal = (
    isOpen,
    onClose,
    onSubmit,
    disabled,
    title,
    body,
    footer
) =>{

    const handleCloseModal =useCallback(()=>{
        if(disabled){
            return null;
        }
        onClose()
    },[])

    const handleSubmit = useCallback(()=>{
        if(disabled)
        {
            return null;
        }

        onSubmit()
    },[disabled,onSubmit])

    return (
        <div
            className="
                fixed
                bg-neutral-800/60
                h-full
                w-full
                z-50
            "
        >
            <div
                className="
                    relative
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        absolute
                        bg-white
                        w-full
                        sm:w-4/6
                        md:w-3/6
                        lg:w-2/6
                        h-auto
                    "
                >
                    {/* content */}
                    <div>
                        <div 
                            className="
                                flex
                                justify-between
                                items-center
                                px-5 
                                py-3
                            "   
                        >
                            <BiLogoAndroid size={50}/>
                            <span
                                onClick={handleCloseModal}
                            >x</span>
                        </div>
                        <div>
                            {body}
                        </div>
                        <div>
                            <Button 
                                label="Submit"
                                disabled
                                onClick={handleSubmit}
                            />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal