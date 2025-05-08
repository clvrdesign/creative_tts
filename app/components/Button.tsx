import React from 'react'

type props = {
    children: React.ReactNode
}

const Button = ({children}:props) => {
    return (
        <button className="px-6 py-3 cursor-pointer font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
            {children}
        </button>
    )
}

export default Button