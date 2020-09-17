import React from "react";

import Carddata from "./Carddata";
import Cards from "./Cards";

const Products =() => {
    return (
        <>
      <div className="my-4">
        <h1 className="text-center">Products</h1>
         </div>
         <div  className="container-fluid mb-5">
        <div className='row'>
        <div className="col-10 mx-auto">
        <div className='row gy-4'>
              
                {
                    Carddata.map((val,ind) =>{
                        return <Cards pic={val.imgsrc} title={val.title}/>
                    }
                    
                    )
                }
              </div>
         </div>
         </div>
         </div>
         
      
   
        </>
    );
};

export default Products;