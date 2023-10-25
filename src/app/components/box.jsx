import React from 'react'

const Box = ({ value }) => {
    return (
        <div className="mr-3 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br bg-red-400 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {value}
            </span>
        </div>
    )
}

export default Box