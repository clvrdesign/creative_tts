import React from 'react'

type props = {
    children: React.ReactNode
}

type ButtonProps = {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
}

const Button = ({ children, variant = 'primary' }: ButtonProps) => {
    const baseStyles = "px-6 py-3 cursor-pointer font-medium rounded-xl duration-300 shadow-lg";
    const variantStyles = variant === 'primary'
        ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-indigo-500/20"
        : "text-gray-700 bg-gray-200 hover:bg-gray-300 duration-300 shadow-gray-400/20";

    return (
        <button className={`${baseStyles} ${variantStyles}`}>
            {children}
        </button>
    )
}

export default Button