import React from 'react'
import styles from '../App.css'

const Cards = ({imgsrc,title}) => {
    return (
      
            <div className="col-md-4 col-10 mb-4 gy-4">
            <div className="card" >
             <img src={imgsrc} className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">{title}</h5>
             </div>
                  </div>
            </div>

       
    )
}

export default Cards
