import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

//for mobile screen
const NavSm = () =>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold">
                    It all start's here
                </h1>
                <span className="text-gray-400 text-xs flex items-center ">
                    Bhuneshwar <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};

//for medium screen i.e ipad and all
const NavMd = () =>{
    return(
        <>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus: outline-none " placeholder="search for events, activities, sports and movies"/>

        </div>
        </>
    )
};


//for large screen i.e desktop and all
const NavLg = () =>{
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
            <div className="w-30 h-10">
             <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full"/>
           </div>
        <div className="w-full h-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
<BiSearch />
<input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, sports and activities" />
        </div>
        </div>
        <div className="flex items-center gap-4">
        <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                    Bhuneshwar <BiChevronDown />
                </span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
                 Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>

        </div>
    </div>
        </>
    )

};





const Navbar = ()=>{
    return(
        <>
        <nav className="bg-navCol-700 px-4 py-2">
            <div className="md:hidden">{
                <NavSm />
            }

            </div>
            <div className="hidden lg:hidden md:flex">{
<NavMd />
            }

            </div>
            <div className="hidden lg:flex">{
                <NavLg />

            }

            </div>
        </nav>
        </>
    )
};
export default Navbar;