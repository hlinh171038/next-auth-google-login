"use client"

const Header = ({
    title,
    subtitle,
    center
}) =>{
    return (
       <>
           <div
                className={`
                    text-semibold
                    text-uppercase
                    text-2xl
                   
                    ${center ?"text-center":'text-start'}
                `}
                
            >
                {title}
                
            </div>
            <div
                className={`
                    text-muted
                    text-sm
                  text-neutral-500
                  mb-4
                  ${center ?"text-center":'text-start'}
                `}
            >
                {subtitle}
            </div>
       </>
    )
}

export default Header