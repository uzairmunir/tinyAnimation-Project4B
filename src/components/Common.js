import React from 'react'
import styles from './home.css'
import animation from './imges/animation2.gif'
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import Swing from 'react-reveal/Swing';


const Common = ({name,imgsrc,btn}) => {
    return (
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> 
                       
                       <Swing>
                           <h1>
                               {name}
                               <strong className="brand-name"> CodingHub</strong>
                           </h1>
                           </Swing>
                         <Typing className="my-3"> 
                        <Typing.Delay ms={1000} />
                             
                              <h2>  We are the team of talented developer making websites</h2>
                            
                       </Typing>
                           <div className="mt-3">
                               <Link to="/services" >
                               <button className="btn-primary" id="btn">{btn}</button>
                               </Link>
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
