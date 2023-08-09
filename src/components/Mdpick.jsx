import React from 'react';

const Mdpick = () => {
    return (
        <div className='mdpick'>
            <h3>MD pick</h3>
            <div className="mdList">
                <ul>
                    <li>
                        <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/products/product01_table.jpg'} alt='product'/></span>
                        <span className='md-name'>테이블</span>
                        <span className='md-price'>59000</span>
                        <div className='bg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste voluptatum culpa unde, labore sint dolore neque ipsam! Maiores voluptas architecto, quos laudantium ipsa eius fugit cupiditate ullam aut unde.</div>
                    </li>
                    <li>
                        <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/products/product04_rug.jpg'} alt='product'/></span>
                        <span className='md-name'>러그</span>
                        <span className='md-price'>49000</span>
                        <div className='bg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste voluptatum culpa unde, labore sint dolore neque ipsam! Maiores voluptas architecto, quos laudantium ipsa eius fugit cupiditate ullam aut unde.</div>
                    </li>
                    <li>
                        <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/products/product06_pot.jpg'} alt='product'/></span>
                        <span className='md-name'>포트</span>
                        <span className='md-price'>39000</span>
                        <div className='bg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste voluptatum culpa unde, labore sint dolore neque ipsam! Maiores voluptas architecto, quos laudantium ipsa eius fugit cupiditate ullam aut unde.</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mdpick;