import { create } from 'zustand'

const useRegisterModal = create((set)=> ({
    isOpen:true,
    onClose: ()=>set({isOpen:false}),
    onOpen:() =>set({isOpen: true})
}));

export default useRegisterModal