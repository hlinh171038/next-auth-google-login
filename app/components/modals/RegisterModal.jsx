"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal"

const RegisterModal =()=>{

    const registerModal = useRegisterModal()
    return (
        <Modal 
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={()=>{}}
        />
    )
}
export default RegisterModal