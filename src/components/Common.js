import React from 'react'
import styles from './home.css'
import animation from './imges/animation2.gif'
import Typing from 'react-typing-animation';
const Common = ({name,imgsrc,btn}) => {
    return (
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">                           <Typing>
                           <h1>
                               {name}
                               <strong className="brand-name"> CodingHub</strong>
                           </h1></Typing>
                          <Typing className="my-3">
                              <Typing.Delay ms={3000} />
                             <h2>  We are the team of talented developer making websites</h2>
                        </Typing>
                           <div className="mt-3">
                               <button className="btn-primary" id="btn">{btn}</button>
                           </div>
                       </div>
                       <div className="col-lg-6 order-lg-2 order-1">
                           <img src={imgsrc} className="img-fluid" />
                       </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default Common;
