import React from "react";
import EntertainmentCardSlider from "../component/Entertainment/entertainmnet.card";
import PosterSlider from "../component/PosterSlider/posterslider.componenet";
import Premier from "../component/Premier/premeir.component";
import TempPosters from "../config/TempPoster.config";
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
            <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
            </div>
        </div>
        <div className="container mx-auto px-4">
  <PosterSlider
  images={TempPosters}
  title="Online Streaming Events"
  isDark={false}
  />
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
  images={TempPosters}
  title="Outdoor Events"
  isDark={false}
  />
  </div>
         </>
    );
};

export default HomePage;