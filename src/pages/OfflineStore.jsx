import React from 'react';

import MapComponent from '../components/Map';


const OfflineStore = () => {
    return (
   <>
        <div className='mapBox1'>
            <div className='text'>
               <div className='tbox1'>
                    <strong>&lt; 본점(양재) - store &#62;</strong>
                    <p><br /></p>
                    <p>서울시 강남구 논현로26길 40, 2층 인아워맨션</p>
                    <p>2F, Nonhyun-ro 26-gil 40, Gangnam-gu, Seoul</p>
               </div>
               <div className='tbox2'>
                    <strong>▪ &nbsp; 오시는 길 </strong>
                    <p>매봉역 4번출구에서 434m (KLAMP GALLERY 맞은편 건물 2층)</p>
                    <p>▫️주차는 불가능합니다.</p>
                    <p>(주변 민영, 공영 주차장을 이용해 주세요)</p>
               </div>
               <div className='tbox3'>
                    <strong>▪ &nbsp; 영업시간</strong>
                    <p>12:00 ~ 19:00</p>
                    <p>매주 월요일 휴무 (공휴일 제외)</p>
                    <p>영업시간 변경 안내는 인스타그램을 통해 안내하고 있습니다.</p>
                    <p>
                        <span style={{color: "rgb(56, 104, 229)", fontWeight: "700", cursor:"pointer"}}>@haru_store</span>
                    </p>
                
               </div>
            </div>
            <div className='map'>
                <MapComponent />
            </div>
        </div>
        <div className='mapBox2'>
            <div className='popup'>
               <div className='tbox1'>
                    <strong>&lt; 다산 Pa9e(페이지) POP-UP STORE  &#62;</strong>
                    <p><br /></p>
                    <p>경기도 남양주시 다산지금로 202 2F, 서점 Pa9e</p>
                    <p>Book Store 2F 202, Dasanjigeum-ro, Namyangju-si, Gyeonggi-do</p>
               </div>
               <div className='tbox2'>
                    <strong>▪ &nbsp; 영업시간 </strong>
                    <p>11:00 ~ 21:00</p>
                    <p>영업시간 변경 안내는 인스타그램을 통해 안내하고 있습니다.</p>
                    <p>
                        <span style={{color: "rgb(56, 104, 229)", fontWeight: "700", cursor:"pointer"}}>@pa9e_official</span>
                    </p>
               </div>
            </div>
            <div className='popupImg'>
            <img src={process.env.PUBLIC_URL + '/img/mapimg1.jpeg'} alt='mapimg1'/>
            <img src={process.env.PUBLIC_URL + '/img/mapimg2.jpg'} alt='mapimg2'/>
            </div>
        </div>
   </>
    
    )
  };
export default OfflineStore;