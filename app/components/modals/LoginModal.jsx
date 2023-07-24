"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler,FieldValues } from "react-hook-form"
import {toast} from 'react-hot-toast'
import axios from "axios";
import Modal from "./Modal";
import { useState,useEffect ,useCallback} from "react";
import Button from "../Button";
import { BiLogoAndroid } from "react-icons/bi";
import {ImCross} from 'react-icons/im'
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal =()=>{
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading,setIsLoading] = useState (false);
    const router = useRouter();
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues:{
            email:"",
            name:"",
            password:""
        }
      })
    
      const onSubmit = (data) =>{
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(()=>{
                toast.success("You are register to ...")
                router.refresh();
                loginModal.onClose();
            })
            .catch(()=>{
                toast.error("Something went wrong");

            }).finally(()=>{
                setIsLoading(false)
            })
      }


    const handleCloseModal =()=>{
        if(isLoading){
            return null;
        }
      
       loginModal.onClose()
    }
    
    useEffect(()=>{
        loginModal.isOpen
    },[])
    
    if(!loginModal.isOpen)
        {
            return null;
        }
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
                    rounded-lg
                    shadow-lg
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
                        <BiLogoAndroid size={50} className="text-green-800"/>
                        <span
                            onClick={handleCloseModal}
                            className
                        >
                            <ImCross />
                        </span>
                    </div>
                    <div
                        className="
                            px-3 
                            py-4
                        "
                    >
                        <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-3"
                    >
                        {/* register your input into the hook by invoking the "register" function */}
                        <input defaultValue="email" {...register("email",{required:true})} type="email" placeholder="email" className="rounded-lg "/>
                        <input defaultValue="name" {...register("name",{required:true})} type="text" placeholder="name" className="rounded-lg "/>
                        <input defaultValue="password" {...register("password",{required:true})} type="password" placeholder="password" className="rounded-lg "/>

                        <input type="submit" className="bg-green-600 rounded-lg px-2 py-1"/>
                     </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default RegisterModal