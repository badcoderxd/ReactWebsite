import React from "react";


const Common =(props) => {
    return (
        <>
        <section className="d-flex align-items-center">
        <div  className="container-fluid nav_bg">
        <div className='row'>
        <div className="col-10 mx-auto">

              <div className='row'>

               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h2>Build Your <strong style={{color:"#4fa4ff"}} className="brand-name">Knowldge</strong> To The Next Level</h2>
                      <h6 className="my-2">
                          {props.name}
                      </h6>
                      <div className="mt-2">
                          <a href="" className="btn btn-outline-primary">
                              {props.btn}
                          </a>
                      </div>
                </div>

                      <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.pic} className="img-fluid animated" alt="Photos"/>
                      </div>
                      </div>
               </div>
        </div>
    </div>
 </section>
        </>
    );
};

export default Common;