import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { Data as testimonialsData } from "./data.js";

const Testimonials = () => {
    return (
        <section className="section" id='testimonials'>
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">My client says</span>

            <Swiper
                className="container !pb-14"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    576: { slidesPerView: 2, spaceBetween: 24 },
                    768: { slidesPerView: 2, spaceBetween: 32 },
                }}
            >
                {testimonialsData.map(({ id, image, title, description }) => (
                    <SwiperSlide key={id}>
                        <div className="bg-card border border-border px-7 py-9 rounded-2xl text-center flex flex-col items-center h-full shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-primary/30 hoverable max-[576px]:px-5 max-[576px]:py-7">
                            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-primary/30 ring-offset-2 ring-offset-background shrink-0">
                                <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
                            </div>
                            <i className="bx bxs-quote-alt-left text-xl text-primary/30 mb-3 leading-none"></i>
                            <h3 className="text-base font-semibold mb-2">{title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
