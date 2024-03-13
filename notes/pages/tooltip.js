import React from "react"
const Tooltip = ({text,child})=>{
    return(
        <div className="relative inline-block">
            <div className="">
                {child}
            </div>
            {/* <div className="opacity-0 pointer-events-none absolute z-50 bg-black text-white text-xs p-2 rounded whitespace-no-wrap hover:opacity-100 group-hover:pointer-events-auto"> */}
            <div className="hidden group-hover:block bg-black text-white text-center text-xs rounded-md py-1 px-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
                {text}
                <div className="arrow-up"></div>
            </div>
            <p></p>
        </div>
    )
}

export default Tooltip ;