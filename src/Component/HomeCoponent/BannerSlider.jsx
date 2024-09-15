import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import {  Navigation, Pagination } from 'swiper/modules';
const BannerSlider = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}


                    pagination={{
                        clickable: true,
                        
                    }}
                    navigation={true}
                    modules={[ Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="banner  overflow-hidden relative">
                            <div className="banner-bg"></div>
                            <div className="overlay"></div>
                            <div className="banner-content">
                                <div className="">
                                    <div className="">
                                        <p className=' md:text-3xl text-white text-xl'><span className='font-bold'>WECONVERT</span> <br /> <span className='text-[#d36724] font-bold'>IMAGINATION </span><span className='font-extralight'>INTOREALITY</span> </p>
                                    </div>
                                    <p className="mb-5 mt-5 text-white w-full lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    <div className='uppercase flex gap-10'>
                                        <p className='text-white bg-[#d36724] text-xs lg:text-lg md:px-10  px-3 py-2'>custom order</p>
                                        <p className='bg-white text-[#d36724] text-xs lg:text-lg md:px-8 py-2 px-3 '>service details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner h-[800px] overflow-hidden relative">
                            <div className="banner-bg"></div>
                            <div className="overlay"></div>
                            <div className="banner-content">
                                <div className="">
                                    <div className="">
                                        <p className=' md:text-3xl text-white text-xl'><span className='font-bold'>WECONVERT</span> <br /> <span className='text-[#d36724] font-bold'>IMAGINATION </span><span className='font-extralight'>INTOREALITY</span> </p>
                                    </div>
                                    <p className="mb-5 mt-5 text-white w-full lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    <div className='uppercase flex gap-10'>
                                        <p className='text-white bg-[#d36724] text-sm lg:text-lg md:px-10  px-3 py-2'>custom order</p>
                                        <p className='bg-white text-[#d36724] md:px-8 py-2 px-3 '>service details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div
                            className='w-full rounded-lg bg-center bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${img2})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                        Enter Our Realm of Infinite Possibilities
                                    </h1>
                                    <br />
                                    <button className='w-full px-5 py-4 mt-4 text-sm font-bold bg-[#a8ec9f] capitalize transition-colors duration-300 transform  rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                        Our Book Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}

                </Swiper>
            </>
        </div>
    );
};

export default BannerSlider;