import React, { useState } from 'react';
import KitchenSlide from '../components/KitchenSlide';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Kitchen() {

    let [brand, setBrand] = useState('므어므어');
    let [priceRate, setPriceRate] = useState(29);
    let [price, setPrice] = useState('15,400원');
    let [따봉, 따봉변경] = useState(0);


        return (
             <div>
                <KitchenSlide />
                    <div className='cardBox'>
                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='cardimg' variant="top" src={process.env.PUBLIC_URL + '/img/kitchen/listimg1.jpg'} alt='list image' />
                            <Card.Body className='cardBody'>
                                <Card.Title className='header__brand'>{brand}</Card.Title>
                                <Card.Text className='header__name'>
                                네이버 1등 리뷰/국내최초 특허받은 원조 므어므어 키친타올걸이 마그넷홀더
                                </Card.Text>
                                <div className='priceBox'>
                                    <span className='item-price'>
                                        <span className='item-price__rate'>{priceRate}</span>
                                        <span className='percentage'>%</span>
                                        <span className='price__price'>{price}</span>
                                    </span>
                                    <span className='delivery-badge' >
                                        <img src={process.env.PUBLIC_URL + '/img/kitchen/delivery-badge.png'} alt='deliveryBadge' /> 
                                        <span style={{userSelect:'none',cursor:'pointer'}} onClick={()=> { 따봉변경(따봉+1) }}>  ❤</span>{따봉}
                                    </span>
                                </div>
                                <Button variant="danger">구매</Button>{' '}
                            </Card.Body>
                        </Card>
                        {/* <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img className='cardimg' variant="top" src={process.env.PUBLIC_URL + '/img/kitchen/listimg1.jpg'} alt='list image' />
                            <Card.Body className='cardBody'>
                                <Card.Title className='header__brand'>{brand}</Card.Title>
                                <Card.Text className='header__name'>
                                네이버 1등 리뷰/국내최초 특허받은 원조 므어므어 키친타올걸이 마그넷홀더
                                </Card.Text>
                                <div className='priceBox'>
                                    <span className='item-price'>
                                        <span className='item-price__rate'>{priceRate}</span>
                                        <span className='percentage'>%</span>
                                        <span className='price__price'>{price}</span>
                                    </span>
                                    <span className='delivery-badge' >
                                        <img src={process.env.PUBLIC_URL + '/img/kitchen/delivery-badge.png'} alt='deliveryBadge' />
                                    </span>
                                </div>
                                <Button variant="danger">특가</Button>{' '}
                            </Card.Body>
                        </Card> */}
                        
                    </div>
                    
            </div>
        )
};

export default Kitchen;