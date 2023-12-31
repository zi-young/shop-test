import React, { useState } from 'react';
import KitchenSlide from '../components/KitchenSlide';
import 'bootstrap/dist/css/bootstrap.min.css';
import KitchenData from './KitchenData';


function Kitchen() {
    let [kitchen] = useState(KitchenData);
    let [따봉, 따봉변경] = useState([0,13,152,53,104,421,213,53]); 



return (
    <div className='kitchenBox'>
        <KitchenSlide />
        <div className='container'>
            <div className="row">
                {kitchen.map((item, i) => {
                    return (
                        <div className="col-md-3">
                            <img src={item.image} alt={item.image} style={{width: '100%', cursor:'pointer'}} key={item.id} />
                            <div className='priceBox'>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                                <p style={{fontWeight: 'bold', display:'flex', alignItems: 'center'}}>{item.price}</p>
                            </div>
                            <p className='review'>
                                <svg className='icon' style={{width: '20px', height: '20px'}} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                    <path fill="currentColor" fill-rule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"></path>
                                </svg>
                                <strong className='avg'>{item.avg}</strong>
                                <span className='review-num'>&nbsp;&nbsp;{item.review}</span>
                            </p>
                            <span class="badge-list">
                                <svg class="icon" aria-label="무료배송" width="47" height="20" viewBox="0 0 47 20" preserveAspectRatio="xMidYMid meet">
                                    <g fill="none" fill-rule="evenodd">
                                        <rect width="47" height="20" fill="#000" fill-opacity=".1" fill-rule="nonzero" rx="4"></rect>
                                        <path fill="#464444" d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"></path>
                                    </g>
                                </svg>
                                <svg class="icon" aria-label="특가" width="30" height="20" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid meet">
                                    <rect width="30" height="20" fill="#F77" rx="4"></rect>
                                    <path fill="#fff" d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"></path>
                                </svg>
                                <span style={{fontWeight: 'normal', userSelect:'none', fontSize:'17px' ,cursor:'pointer'}} onClick={()=>{ let copy = [...따봉]; copy[i] = copy[i] + 1; 따봉변경(copy) }}> ❤ </span>{따봉[i]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>

 
    </div>
)

 

};


export default Kitchen;