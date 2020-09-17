import React from "react";



const Cards =(props) => {
    return (
        <>
        
      <div className="col-md-4 col-10 mx-auto" style={{paddingBottom:'20px'}}>
         <div className="card">
             <img src={props.pic} className="card-img-top" alt="name"/>
             <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">
                     some random text jof the random things
                 </p>
                 <a href="#" className="btn btn-primary">
                     Buy Now
                 </a>
             </div>
         </div>
         

      </div>  
   
        </>
    );
};

export default Cards;