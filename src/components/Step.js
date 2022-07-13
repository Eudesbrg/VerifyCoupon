import React from "react";

function Step({title,content,step,isCurrent}) {

    return(
        <div className={isCurrent ? "flex flex-col md:flex-row md:max-w-xl rounded-xl bg-white shadow-lg cursor-pointer" : "flex flex-col md:flex-row md:max-w-xl rounded-xl bg-white cursor-pointer"}>
            <div className="p-6 flex flex-col justify-start">
                <h5 
                    className="text-gray-900 text-xl font-medium mb-2"
                    style={isCurrent ? {}: {color: "rgba(0,0,0,0.3)"}}
                >
                    {title}
                </h5>
                <p 
                    className="text-gray-700 text-base mb-4"
                    style={isCurrent ? {}: {color: "rgba(0,0,0,0.3)"}}
                >
                    {content}
                </p>
                <p 
                    className="text-gray-600 text-xs"
                    style={isCurrent ? {}: {color: "rgba(0,0,0,0.3)"}}
                >
                    {step}
                </p>
            </div>
        </div>
    )
}

export default Step