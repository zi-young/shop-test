import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import { Autoplay } from 'swiper/modules';

const Magazine = () => {
    return (
        <div className='magazine'>
            <div className="container">
                <div className='titleWrap'><h3>Magazine</h3></div>
                <div className="magazineList">
                    <div className="magazine-box">
                            <span className='a1'>A</span>
                            <span className='a-1'>A</span>
                            <span className='m'>M</span>
                            <span className='m1'>M</span>
                            <span className='a2'>A</span>
                            <span className='a-2'>A</span>
                            <span className='g'>G</span>
                            <span className='g1'>G</span>
                            <span className='i'>I</span>
                            
                            
                            <span className='i-2'>I</span>
                            <span className='z'>Z</span>
                            <span className='z1'>Z</span>
                            
                            <span className='n'>N</span>
                            <span className='n-2'>N</span>
                            <span className='e'>E</span>
                            <span className='e-2'>E</span>
                            <span className='hyphen'>-</span>
                            <span className='hyphen1'>-</span>
                    </div>
                    <Swiper className='swiper-wrap'
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            768: {
                            slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img1.jpg'} alt='logo image'/></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img2.jpg'} alt='logo image'/></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img3.jpg'} alt='logo image'/></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img4.jpg'} alt='logo image'/></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img5.jpg'} alt='logo image'/></SwiperSlide>
                        <SwiperSlide className='mg-img'><img src={process.env.PUBLIC_URL + '/img/magazine/img6.jpg'} alt='logo image'/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );

};

export default Magazine;