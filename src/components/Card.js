import React from "react"
import CheckIcon from "./checkIcon"

const Card = ({photo,name,isChecked})=>{
    return(
        <div className={`rounded-lg shadow-[0px_0px_15px_3px_rgba(0,0,0,0.1)] cursor-pointer ${isChecked ? "shadow-indigo-200 bg-indigo-200 border-2 border-indigo-600" : "bg-white"}  `}>
        <div className="flex justify-end px-3 pt-3">
            <div className="shrink-0 text-white bg-">
              <CheckIcon className={`${isChecked ? "h-5 w-5 text-indigo-600" : "h-5 w-5"}`}/>
            </div>
        </div>
        <div className="flex flex-col items-center pb-3">
            <img className="w-44 h-10 scale-90" src={photo} alt="transcash"/>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h5>
        </div>
    </div>
    )
}

export default Card