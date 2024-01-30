'use client';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideOne from "@/components/SlideOne";
import SlideTwo from "@/components/SlideTwo";
import SlideThree from "@/components/SlideThree";

export default function Home() {
    return (
        <div className=''>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    keyboard={{enabled: true}}
                    style={{
                        "--swiper-pagination-color": "#55EE00",
                        "--swiper-navigation-color": "#55EE00",
                    }}
            >
                <SwiperSlide><SlideOne/></SwiperSlide>
                <SwiperSlide><SlideTwo/></SwiperSlide>
                <SwiperSlide><SlideThree/></SwiperSlide>
            </Swiper>
        </div>
    );
}