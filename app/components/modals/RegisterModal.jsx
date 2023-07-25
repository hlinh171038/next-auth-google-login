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
import Header from "../Header";
import {AiFillGithub} from 'react-icons';
import {FcGoogle} from 'react-icons';
import { signIn, signOut } from "next-auth/react";

const RegisterModal =()=>{
    const registerModal = useRegisterModal();
   
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
                registerModal.onClose();
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
      
       registerModal.onClose()
    }
    
    useEffect(()=>{
        registerModal.isOpen
    },[])
    
    if(!registerModal.isOpen)
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
                        <Header 
                            title="REGISTER"
                            subtitle="register your account"
                            center
                        />
                        <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-3"
                    >
                        {/* register your input into the hook by invoking the "register" function */}
                        <input defaultValue="email" {...register("email",{required:true})} type="email" placeholder="email" className="rounded-lg "/>
                        <input defaultValue="name" {...register("name",{required:true})} type="text" placeholder="name" className="rounded-lg "/>
                        <input defaultValue="password" {...register("password",{required:true})} type="password" placeholder="password" className="rounded-lg "/>

                        <input type="submit" className="bg-green-600 rounded-lg px-2 py-1"/>
                     </form>
                     <div
                        className="
                            flex
                            flex-col
                            gap-3
                            py-4
                            mt-4
                        "
                     >
                       <Button
                        onClick={()=>signIn('github')}
                        label="Github"
                        icon={AiFillGithub}
                        outline
                       />
                        <Button
                        onClick={() => signIn('google')}
                        label="Google"
                        icon={FcGoogle}
                        outline
                       />
            
                        <p className=" text-center text-sm text-gray-500">
                            Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                        </p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default RegisterModal