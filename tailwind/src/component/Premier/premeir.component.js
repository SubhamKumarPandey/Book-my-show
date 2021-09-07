import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";

export const Premier= ()=>{
    const settingMd ={
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        InitialSlide: 0
    };
    const settingSm ={
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        InitialSlide: 0
    };
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        InitialSlide: 0
    };
    const PremierImage = [
        {
       src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
       alt: "Events",
       title: "The Conjuring",
       subtitle: "Horro/Thriller",
       resgister: "Registration Closed"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
            alt: "Events",
            title: "The Conjuring",
            subtitle: "Horro/Thriller"
             },
             {
                src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                alt: "Events",
                title: "The Conjuring",
                subtitle: "Horro/Thriller"
                 },
                 {
                    src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                    alt: "Events",
                    title: "The Conjuring",
                    subtitle: "Horro/Thriller"
                     },
                     {
                        src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                        alt: "Events",
                        title: "The Conjuring",
                        subtitle: "Horro/Thriller"
                         },
                         {
                            src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                            alt: "Events",
                            title: "The Conjuring",
                            subtitle: "Horro/Thriller"
                             },
                             {
                                src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                                alt: "Events",
                                title: "The Conjuring",
                                subtitle: "Horro/Thriller"
                                 },
    ]
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