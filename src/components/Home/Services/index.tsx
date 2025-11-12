"use client"

import { ServicesData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const settings = {
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="lg:py-10 py-5 bg-grey dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <h2 className="text-center text-3xl font-medium mb-3" data-aos="fade-left">
                    Our Services
                </h2>
                <p className="text-base text-muted dark:text-white/60 text-center">
                    Comprehensive digital solutions combining technical expertise with creative innovation. <br className="lg:block hidden" /> 
                    From enterprise software to industry certification, we deliver excellence across all digital domains. 
                </p>
                <div className="mt-12">
                    {ServicesData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {ServicesData.map((item, index) => (
                                <div key={index} className="px-4">
                                    <Link href={`/services/${item.slug}`}>
                                        <div className="bg-white group dark:bg-dark rounded-lg overflow-hidden h-[380px] flex flex-col cursor-pointer" data-aos="fade-up" data-aos-delay={`${(index) * 150}`}>
                                            <div className="overflow-hidden h-[180px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={350}
                                                    height={180}
                                                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                                                />
                                            </div>
                                            <div className="px-6 pt-5 pb-4 shadow-service-shadow dark:shadow-darkmd flex-1 flex flex-col">
                                                <h4 className="text-base font-bold dark:text-white group-hover:text-primary mb-3 leading-tight">
                                                    {item.title}
                                                </h4>
                                                <p className="text-muted dark:text-white/60 text-sm line-clamp-3 leading-relaxed">
                                                    {item.text}
                                                </p>
                                                <div className="flex justify-end mt-auto pt-3">
                                                    <span className="text-primary group-hover:text-secondary transition-colors duration-300 text-sm font-medium">
                                                        Learn More →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-muted">No services available</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;