import React, { type ReactNode } from 'react'


interface ButtonProps {
    onClick?: () => void
    disabled?: boolean
    children: ReactNode
    isLoading?: boolean
}

const ButtonComponent = ({
    onClick,
    children,
    disabled,
    isLoading
}: ButtonProps) => {
    return (
        <button className="btn" disabled={disabled} onClick={onClick}>

            {!isLoading ? children :
                <span className="loading loading-bars loading-md" />
            }
        </button>
    )
}

export default ButtonComponent  
