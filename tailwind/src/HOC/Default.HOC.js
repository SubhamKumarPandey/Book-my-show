import React from "react";
import { Route } from "react-router-dom";
import Defaultlayout from "../layouts/default.layout";

const DefaultHOC = ({ component: Component , ...rest }) => {
    return(
       <>
       <Route {...rest}
       component = {(props)=>(
         <Defaultlayout>
             <Component {...props} />
         </Defaultlayout>
       )
    }
       />
       </>

    );
};

export default DefaultHOC;