"use client";
import React from 'react';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2 group">
      {/* Tooltip on hover */}
      <div className="absolute -top-12 left-0 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max font-semibold text-sm border border-zinc-100 dark:border-zinc-700">
        Call Us Now
        <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white dark:bg-zinc-800 rotate-45 border-b border-r border-zinc-100 dark:border-zinc-700"></div>
      </div>
      
      <Link 
        href="tel:+919876543210" 
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-300 text-white rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] hover:scale-110 transition-all duration-300"
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 w-full h-full bg-amber-400 rounded-full animate-ping opacity-75"></span>
        <PhoneCall size={24} className="relative z-10" />
      </Link>
    </div>
  );
}
