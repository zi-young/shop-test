import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import "swiper/css"; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Mainslide = () => {
    return (
        <div className='swiperBox'>
            <Swiper className='swiper-wrap'
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
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
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide1.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide2.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide3.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide4.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide5.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide6.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide7.jpg'} alt='logo image'/></SwiperSlide>
                <SwiperSlide className='slide-img'><img src={process.env.PUBLIC_URL + '/img/mainslide/slide8.jpg'} alt='logo image'/></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Mainslide;