import React from 'react'
import {data} from './data'
import Cards from'./Cards'
import Slide from 'react-reveal/Slide';


const Services = () => {
    console.log(data)
    return (
        <div className="container-fluid">
        <div className='text-center mt-5'>
        <Slide top cascade>
          <h1>Services</h1>
        </Slide>
           </div>
           <div className="row">
               <div className="col-10  mx-auto">
                   <div className="row mt-5">
                   {
                       data.map((val,index)=>{
                           return(
                               <Cards title={val.title}
                               imgsrc={val.imgsrc}
                                key={index} />
                           )
                       })
                   }
               </div>
           </div>
           </div>
                  
               
           </div>
       

    )
}

export default Services
