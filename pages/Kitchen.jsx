import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import "swiper/css"; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Kitchen = () => {
    return (
        <div className='Kitchen-swiperBox'>
             <h2>kitchen</h2>
            <Swiper className='swiper-wrap'
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
    
                style={{
                    "--swiper-pagination-color": "white",
                    "--swiper-pagination-width": "50px",
                    "--swiper-pagination-hight": "50px"

                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            
                loop={true}
            >
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg1.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg2.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg3.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg4.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/kitchen/Kimg5.jpg'} alt='logo image'/></SwiperSlide>
               

            </Swiper>
        </div>
    );
};

export default Kitchen;