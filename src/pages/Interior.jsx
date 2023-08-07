import { AiOutlineReddit } from "react-icons/ai"; 
import { AiOutlineGithub } from "react-icons/ai"; 
import { AiOutlineFrown } from "react-icons/ai"; 
import { AiFillMeh } from "react-icons/ai"; 
import { AiFillAndroid } from "react-icons/ai"; 
import { AiFillAliwangwang } from "react-icons/ai"; 
import React from 'react';

const interior = () => {
    return (
        <div className='Housewarming'>
        <h2>Housewarming</h2>
        <div className="interiorList1 interior">
            <ul>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img1.jpg'} alt='interiorImg1'/></span>
                    <span className='house-text'>유튜버의 5평 방 꾸미기 (ft. 원목, 투명, 화이트)</span>
                    <span className='house-name'><AiFillAliwangwang />윤경yk</span>
                    <span className='house-scrap'>스크랩48 &middot; 조회1,852</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img2.jpg'} alt='interiorImg2'/></span>
                    <span className='house-text'>리모델링 없이 깔끔하게! 내추럴 우드톤의 30평 신혼집</span>
                    <span className='house-name'><AiFillAndroid />뿌꾸뿌꾸빵빠</span>
                    <span className='house-scrap'>스크랩13 &middot; 조회1,435</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img3.jpg'} alt='interiorImg3'/></span>
                    <span className='house-text'>어서 오세요, 노을빛이 예쁜 산꼭대기 작은 집에</span>
                    <span className='house-name'><AiFillMeh />yesther_</span>
                    <span className='house-scrap'>스크랩32 &middot; 조회1,059</span>
                </li>
            </ul>
        </div>
        <div className="interiorList2 interior">
            <ul>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img4.jpg'} alt='interiorImg1'/></span>
                    <span className='house-text'>애교냥이와 함께 사는 32평 미드센추리 하우스</span>
                    <span className='house-name'><AiOutlineFrown />outziyoung</span>
                    <span className='house-scrap'>스크랩21 &middot; 조회1,934</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img5.jpg'} alt='interiorImg2'/></span>
                    <span className='house-text'>취향에 따라 변합니다. 우리와 닮아가는 집</span>
                    <span className='house-name'><AiOutlineGithub />끼룩끼룰</span>
                    <span className='house-scrap'>스크랩13 &middot; 조회1,435</span>
                </li>
                <li>
                    <span className='house-img'><img src={process.env.PUBLIC_URL + '/img/interior/img6.jpg'} alt='interiorImg3'/></span>
                    <span className='house-text'>하얀 바탕에 귀여운 포인트가 있는! 32평 신혼집</span>
                    <span className='house-name'><AiOutlineReddit />눈누난나</span>
                    <span className='house-scrap'>스크랩32 &middot; 조회1,059</span>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default interior;