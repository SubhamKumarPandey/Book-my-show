import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";
import settings from "../../config/Postercrousear.config";
import PremierImage from "../../config/TempPoster.config";

export const Premier= ()=>{
    return (
        <>
        <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm"> Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
            {PremierImage.map((image)=>(
                <div className="">
                   <Poster {...image} isDark />
                </div>

            ))}

        </Slider>
        </>
    );
};

export default Premier;