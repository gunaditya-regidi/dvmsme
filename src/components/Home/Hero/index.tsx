"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

const carouselImages = [
  "/images/hero/banner-bg.jpg",
  "/images/hero/banner-bg1.jpg",
  "/images/hero/banner-bg2.jpg",
  "/images/hero/banner-bg3.jpg",
  "/images/hero/banner-bg4.jpg",
];

const Hero = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="relative bg-cover text-white md:pt-40 md:pb-28 py-20 bg-no-repeat lg:mt-40 sm:mt-44 mt-20"
        style={{
          backgroundImage: `url('${carouselImages[current]}')`,
          transition: 'background-image 0.5s ease-in-out',
          backgroundPosition: 'center',
        }}
      >
        {/* Carousel indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselImages.map((_, idx) => (
        <button
          key={idx}
          className={`w-3 h-3 rounded-full border-2 border-white ${current === idx ? "bg-white" : "bg-transparent"}`}
          onClick={() => setCurrent(idx)}
          aria-label={`Go to slide ${idx + 1}`}
        />
          ))}
        </div>
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4 grid grid-cols-12">
         <div className="bg-white rounded-md p-10 lg:col-span-5 md:col-span-7 sm:col-span-10 col-span-12 dark:bg-dark" data-aos="fade-right">
      <div className="flex justify-between mb-6">
      <div className="px-4 py-2 rounded-sm flex items-center gap-2"
        style={{
      background: "linear-gradient(90deg, #ff0000 0%, #001e6c 60%, #8f00ff 100%)"
        }}
      >
        <Icon icon="mdi:star" className="text-yellow-400 text-lg" />
        <p className="text-white text-sm font-semibold">
      Welcome to Digital Videos
        </p>
      </div>
      <p className="text-muted dark:text-white/60 text-xs font-medium">ISO 9001:2015 Certified</p>
    </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-3 leading-tight">
        Elevating Brands &amp; Experiences
      </h1>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
        <span className="text-blue-700">Software Development</span> &amp; <span className="text-green-600">Digital Marketing SEO</span>
      </h2>
      <p className="text-lg text-gray-700 dark:text-white/80 mb-6 font-medium">
        Trusted by governments, enterprises, and visionaries for innovative digital solutions.<br />
        We deliver excellence in <span className="font-bold text-blue-700">custom software</span> and <span className="font-bold text-green-600">SEO-driven digital marketing</span> that transforms your ideas into impact.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/services")}
          className="text-white bg-gradient-to-r from-blue-600 to-green-400 px-7 py-3 font-semibold rounded-md shadow hover:from-blue-700 hover:to-green-500 transition"
        >
          Explore Services
        </button>
        
      </div>
    </div>
        </div>
      </section>
    </>
  );
};

export default Hero;