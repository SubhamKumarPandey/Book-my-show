import React from "react";
// components
import Navbar from "../component/Navbar/navbar.component";
import HeroCarousal from "../component/HeroCrouseal/HeroCarousal";
const Defaultlayout=(props)=>{
    return(
        <>
        <Navbar />
        <HeroCarousal />
        {props.children}
        </>
    );
};
export default Defaultlayout;