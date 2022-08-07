import React from 'react'
import {
    Link
  } from "react-router-dom";
import './cards.scss'

function Card({ id, title, description, image, link }) {
    return (
        
        <div className='card'><Link to={link}>
            <div className='card-display'><img src={image} alt={title} />
            <h2>
                {title}
            </h2>
            <h4> {description}</h4>
            <div className='read-more'>
                <h5> READ MORE </h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div> </div></Link>
        </div>
       
    )
}

export default Card