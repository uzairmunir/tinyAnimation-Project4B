import React from 'react'
import {data} from './data'
import Cards from'./Cards'


const Services = () => {
    console.log(data)
    return (
        <div className="container-fluid">
        <div className='text-center mt-5'>
           <h1>Our Services</h1>
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
