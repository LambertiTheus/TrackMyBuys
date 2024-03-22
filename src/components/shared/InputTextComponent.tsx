import React, { type ReactNode } from 'react'

interface InputTextProps {
    children: ReactNode
    placeholder?: string
}

const InputTextComponent = ({
    children,
    placeholder,
}: InputTextProps) => {
    return (
        <label className="input input-bordered flex items-center gap-2">
            {children}
            <input type="text" className="grow" placeholder={placeholder} />
        </label>
    )
}

export default InputTextComponent  
