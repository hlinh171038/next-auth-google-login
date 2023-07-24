"use client"

const Button =({
    label,
    outline,
    disabled = false,
    onClick
}) =>{
    return (
        <button
            className={`
                rounded-lg
                px-3
                py-2
                hover:shadow-lg
                ${disabled ?"cursor-not-allowed": 'cursor-pointer'}
                ${outline ? 'bg-none' : 'bg-neutral-800'}
                ${outline ? 'text-black' : 'text-white'}
                ${outline ? 'border-[2px]' : 'border-none'}
            `}
        >{label}</button>
    )
}

export default Button