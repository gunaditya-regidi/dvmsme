"use client";

import { useState } from "react";
import Image from "next/image";
import Volunteer from "@/components/SharedComponent/Volunteer";
import TextPart from "@/components/Service/ServiceDetails/textPart";
import type { ServiceType } from "@/app/api/data";

type ServiceDetailsContentProps = {
    item: ServiceType;
};

const ServiceDetailsContent = ({ item }: ServiceDetailsContentProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section className="dark:bg-dark pt-44 py-24">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-9 col-span-12">
                            <div className="flex gap-4 mb-8">
                                <div className="flex flex-col gap-4">
                                    <div
                                        className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                        onClick={() => setSelectedImage(item.image)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                setSelectedImage(item.image);
                                            }
                                        }}
                                        aria-label={`View ${item.title} image`}
                                    />
                                    <div
                                        className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                        onClick={() => setSelectedImage(item.image)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                setSelectedImage(item.image);
                                            }
                                        }}
                                        aria-label={`View ${item.title} image`}
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden flex-1 max-w-[480px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={480}
                                        height={360}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h1 className="text-[40px] leading-tight font-semibold mb-8">
                                {item.title}
                            </h1>
                            <div className="mb-8">
                                <p className="text-lg mb-4">{item.raised}</p>
                                <p className="text-lg mb-4"> Highlights :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    {item.goal.split(",").map((point, index) => (
                                        <li key={index} className="text-base">{point.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                            <TextPart title={item.title} description={item.text} />
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Client Testimonials</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <p className="text-gray-600 dark:text-gray-300 italic">"{item.clc}"</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- {item.cln}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${item.title} enlarged image`}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <Image
                            src={selectedImage}
                            alt={`Enlarged view of ${item.title}`}
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-full rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                            onClick={(event) => {
                                event.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Close enlarged image"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
            <Volunteer />
        </>
    );
};

export default ServiceDetailsContent;

