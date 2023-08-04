import { AiFillAliwangwang } from "react-icons/ai"; 
import React from 'react';

const interior = () => {
    return (
        <div className='Housewarming'>
        <h2>Housewarming</h2>
        <div className="interiorList">
            <ul>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img1.jpg'} alt='interiorImg1'/></span>
                    <span className='house-text'>유튜버의 5평 방 꾸미기 (ft. 원목, 투명, 화이트)</span>
                    <span className='house-name'><AiFillAliwangwang />윤경yk</span>
                    <span className='house-scrap'>스크랩48 &middot; 조회1,852</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img2.jpg'} alt='interiorImg2'/></span>
                    <span className='house-text'>유튜버의 5평 방 꾸미기 (ft. 원목, 투명, 화이트)</span>
                    <span className='house-name'><AiFillAliwangwang />윤경yk</span>
                    <span className='house-scrap'>스크랩48 &middot; 조회1,852</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img3.jpg'} alt='interiorImg3'/></span>
                    <span className='house-text'>유튜버의 5평 방 꾸미기 (ft. 원목, 투명, 화이트)</span>
                    <span className='house-name'><AiFillAliwangwang />윤경yk</span>
                    <span className='house-scrap'>스크랩48 &middot; 조회1,852</span>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default interior;