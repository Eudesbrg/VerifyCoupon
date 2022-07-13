import React from "react"

const Button = ({mode,title,onClick})=>{
    return(
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-md duration-150 active:shadow-lg ${mode === "fill" ? "text-white bg-indigo-600 hover:bg-indigo-700" : "text-gray-700 border border-indigo-600"}`}>
                {title}
        </button>
    )
}

export default Button