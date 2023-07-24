"use client"

const Button =({
    label,
    outline,
    disabled = false,
    onClick,
    icon:Icon
}) =>{
    return (
        <button
            onClick={onClick}
            className={`
                rounded-lg
                px-3
                py-2
                hover:border-neutral-600
                transition
                ${disabled ?"cursor-not-allowed": 'cursor-pointer'}
                ${outline ? 'bg-none' : 'bg-neutral-800'}
                ${outline ? 'text-black' : 'text-white'}
                ${outline ? 'border-[2px]' : 'border-none'}
            `}
        >
         {Icon && <Icon />}  
        {label}</button>
    )
}

export default Button