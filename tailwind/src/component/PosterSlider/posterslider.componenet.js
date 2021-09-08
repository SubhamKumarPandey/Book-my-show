import React from "react";
import Poster from "../Poster/poster.component";
import settings from "../../config/Postercrousear.config";
import Slider from "react-slick";

const PosterSlider=(props)=>{
    return (
        <>
        <div className="flex flex-col items-start">
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
        </div>
        <Slider {...settings}>
            {props.images.map((image)=>(
                <div className="">
                   <Poster {...image} isDark={props.isDark} />
                </div>

            ))}

        </Slider>
        </>
    )
}

export default PosterSlider;