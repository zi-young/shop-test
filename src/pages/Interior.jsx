import { AiFillAliwangwang } from "react-icons/ai"; 
import React from 'react';

const interior = () => {
    return (
        <div className='mdpick'>
        <h2>MD pick</h2>
        <div className="mdList">
            <ul>
                <li>
                    <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/interior/img1.jpg'} alt='interiorImg1'/></span>
                    <span className='md-name'>유튜버의 5평 방 꾸미기 (ft. 원목, 투명, 화이트)</span>
                    <span className='md-price'><AiFillAliwangwang />윤경yk</span>
                    <span className='md-price'>스크랩48 &middot; 조회1,852</span>
                </li>
                <li>
                    <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/interior/img2.jpg'} alt='interiorImg2'/></span>
                    <span className='md-name'>러그</span>
                    <span className='md-price'>49000</span>
                </li>
                <li>
                    <span className='md-img'><img src={process.env.PUBLIC_URL + '/img/interior/img3.jpg'} alt='interiorImg3'/></span>
                    <span className='md-name'>포트</span>
                    <span className='md-price'>39000</span>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default interior;