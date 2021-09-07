import React from "react";

const Poster=(props)=>{
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-full w-full py-7">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-2xl" />
            </div>
            <h3
            className={'text-lg font-bold $ {props.isDark ? "text-white" : "text-gray-700"} '}> {props.title}</h3>
            <p className={'text-sm font-bold $ {props.isDark ? "text-white" : "text-gray-700"} '}
            >{props.subtitle}</p>
            <button>
                {props.resgister}</button>
        </div>
        </>
    )
};
export default Poster;