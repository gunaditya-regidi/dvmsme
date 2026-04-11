"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  mainImage: string;
  galleryImages: string[];
}

export default function ProjectGallery({ mainImage, galleryImages }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = [mainImage, ...(galleryImages || [])].filter(img => img);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[50vh] min-h-[400px]">
        <div 
          className="md:col-span-8 relative rounded-3xl overflow-hidden group h-full w-full cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image 
            src={mainImage} 
            alt="Main Project" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="md:col-span-4 flex flex-col gap-4 h-full w-full">
          {galleryImages && galleryImages.length > 0 ? (
            <div 
              className="flex-1 relative rounded-3xl overflow-hidden group w-full min-h-[190px] cursor-pointer"
              onClick={() => openLightbox(1)}
            >
              <Image 
                src={galleryImages[0]} 
                alt="Detail 1" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ) : (
             <div className="flex-1 relative rounded-3xl overflow-hidden group w-full min-h-[190px] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                 <span className="text-zinc-400">No Image</span>
             </div>
          )}
          
          {galleryImages && galleryImages.length > 1 ? (
            <div 
              className="flex-1 relative rounded-3xl overflow-hidden group w-full min-h-[190px] cursor-pointer"
              onClick={() => openLightbox(2)}
            >
              <Image 
                src={galleryImages[1]} 
                alt="Detail 2" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {galleryImages.length > 2 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold text-lg hover:underline">+ {galleryImages.length - 2} More Photos</span>
                </div>
              )}
            </div>
           ) : (
              <div className="flex-1 relative rounded-3xl overflow-hidden group w-full min-h-[190px] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-400">No Image</span>
              </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101] bg-black/50 p-2 rounded-full"
          >
            <X size={32} />
          </button>
          
          {allImages.length > 1 && (
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[101] bg-black/50 p-3 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="relative w-full h-[80vh] max-w-6xl rounded-lg overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={allImages[currentIndex]} 
              alt={`Gallery Image ${currentIndex + 1}`} 
              fill
              className="object-contain"
            />
          </div>

          {allImages.length > 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[101] bg-black/50 p-3 rounded-full"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
