import React from "react";

const Contact =() => {
    return (
        <>
         <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
         </div>
        <section className="d-flex align-items-center">
        <div  className="container-fluid nav_bg">
        <div className='row'>
        <div className="col-10 mx-auto">

              <div className='row'>

               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                     <div className="container contact_div">
                     <div className="row">
                         <div className="col-md-6 col-10 mx-auto">
                             <form>
                             <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input 
    type="text" 
    className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp"
          placeholder="Enter Your Name"
      />
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input 
    type="email" 
    className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp"
    placeholder="Enter Your Email"
      />
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input 
    type="number" 
    className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp"
          placeholder="Enter Your Number"
      />
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea
     class="form-control"
      id="exampleFormControlTextarea1"
       rows="3"
       placeholder="Enter Your Address"
       ></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
 </form>
         </div>
       </div>
     </div>
 </div>

                      <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66007493954!2d77.35073385808276!3d12.954517011116248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1600256022888!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{border:'0'}}  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                      </div>
                      </div>
               </div>
        </div>
    </div>
  
 </section>
 
        </>
    );
};

export default Contact;