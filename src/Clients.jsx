import React from "react";
import "./clients.css";
import log1 from "./images/logo1.jpg";
import log2 from "./images/logo2.jpg";
import log3 from "./images/logo3.jpg";
import log4 from "./images/logo4.jpg";


const Clients =() => {

    
    return (
        <>
      
      <section id="clients" className="section-bg">
    <div className="container">
        <div className="section-header">
            <h3 style={{paddingBottom:'10px'}}>Our Clients</h3>
           
        </div>
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log1} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log2} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log3} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log4} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log4} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log3} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log2} className="img-fluid" alt=""/> </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo"> <img src={log1} className="img-fluid" alt=""/> </div>
            </div>
        </div>
    </div>
</section>
</>
    );
};

export default Clients;