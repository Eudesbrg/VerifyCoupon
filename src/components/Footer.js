import React from "react";

function Footer({title,content,step}) {
    return(
        <footer className=" border-t-2 border-gray-200 text-center lg:text-left">
            <div className="text-gray-700 text-center p-4">
                © 2021 Copyright:
                <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
            </div>
        </footer>
    )
}

export default Footer