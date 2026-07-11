import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { Data as testimonialsData } from "./data";

const Testimonials = () => {
    return (
        <section className="section">
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
                        <div className="bg-card border border-border px-7 py-9 rounded-2xl text-center flex flex-col items-center h-full shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] max-[576px]:px-5 max-[576px]:py-7">
                            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-border ring-offset-2 ring-offset-background">
                                <img src={image} alt={title} className="w-full h-full object-cover" />
                            </div>
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
