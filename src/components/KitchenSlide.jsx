import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components'; 

import "swiper/css"; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const CustomPrevIcon = () => (
<div class="scroller__ui__left">
  <svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
    
    <g fill="none">
      <circle cx="20" cy="20" r="20" fill="#FFF" className="swiper-button-prev">
      </circle>
      <path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow">
      </path>
    </g>
  </svg>
  <svg class="active" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
    <g fill="none"><circle cx="20" cy="20" r="20" fill="#ed217c"></circle>
    <path fill="#FFF" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z"></path>
    </g>
  </svg>;
</div>

);

const CustomNextIcon = () => (
  <div class="scroller__ui__right">
    <svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
      <g fill="none" transform="matrix(-1 0 0 1 40 0)">
        <circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle>
        <path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path>
      </g>
    </svg>
    <svg class="active" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
      <g fill="none" transform="matrix(-1 0 0 1 40 0)">
        <circle cx="20" cy="20" r="20" fill="#ed217c">
        </circle>
        <path fill="#FFF" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z">
        </path>
      </g>
    </svg>
  </div>
);

// styled-components를 사용하여 스타일을 생성
const CustomNavigation = styled.div`
  position: relative;
   
  .scroller__ui__left .scroller__ui__right{
  position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: opacity .1s;
    cursor: pointer;
    z-index: 10;

  }
  .scroller__ui__left{
    position: absolute;
    top: -140px;
    left: -20px;
    z-index: 99;
  }
  .scroller__ui__right{
    position: absolute;
    top: -140px;
    right: 20px;
    z-index: 99;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }
  .inactive{
    position: relative;
    opacity:1;
    
  }
  .active{
    position:absolute;
    top:0;
    left:0;
    opacity: 0;
  }


.scroller__ui__left:hover .active {
    opacity: 1;
    transition: .5s;
}
.scroller__ui__right:hover .active {
    opacity: 1;
    transition: .5s;
}

.scroller__ui__left.active {
    position: absolute;
    transition: opacity .1s;
}
.scroller__ui__left.scroller-hide, .scroller__ui__left>.active, .scroller__ui__right.scroller-hide, .scroller__ui__right>.active {
    opacity: 0;
}
.scroller__ui__left>.active, .scroller__ui__left>.inactive, .scroller__ui__right>.active, .scroller__ui__right>.inactive {
    position: absolute;
    transition: opacity .1s;
}


`

const KitchenSlide = () => {
    return (
        <div className='Kitchen-swiperBox'>
            <Swiper className='swiper-wrap'
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // navigation
                navigation={{
                  prevEl: '.scroller__ui__left', // 네비게이션 이전 버튼 클래스명
                  nextEl: '.scroller__ui__right' // 네비게이션 다음 버튼 클래스명
                }}
                CustomNavigation
                style={{
                    "--swiper-pagination-color": "white",
                    "--swiper-pagination-width": "50px",
                    "--swiper-pagination-hight": "50px"

                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            
                loop={true}
            >
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg1.jpg'} alt='kitchenImg'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg2.jpg'} alt='kitchenImg'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg3.jpg'} alt='kitchenImg'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg4.jpg'} alt='kitchenImg'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg5.jpg'} alt='kitchenImg'/></SwiperSlide>
                </Swiper>
      
      {/* CustomNavigation 컴포넌트는 Swiper 컴포넌트 내부에 위치해야 함 */}
      <CustomNavigation>
        {/* <div className="scroller__ui__left"> */}
          <CustomPrevIcon />
        {/* </div> */}
        {/* <div> */}
          <CustomNextIcon />
        {/* </div> */}
      </CustomNavigation>
    </div>
  );
};

export default KitchenSlide;