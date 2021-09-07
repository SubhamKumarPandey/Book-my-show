import React from "react";
import EntertainmentCardSlider from "../component/Entertainment/entertainmnet.card";
import Premier from "../component/Premier/premeir.component";
const HomePage = ()=> {
    return (
        <>
        <div className="container mx-auto px-6 py-3 my-3">
            <h1 className="text-2xl font-bold text-gray-800 my-3"> The best of Entertainmnet</h1>


        <EntertainmentCardSlider className="my-3"/>
        </div>
        <div className="bg-navCol-300 py-16">

            <div className="container mx-auto px-4">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RozarPay" className="w-full h-full" />

            </div>
            <Premier />
            </div>
        </div>
         </>
    );
};

export default HomePage;