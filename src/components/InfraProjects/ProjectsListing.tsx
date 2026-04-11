"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building, ArrowRight, ArrowUpRight, Home } from 'lucide-react';
import Image from 'next/image';

import { Project } from '@/utils/fetchProjects';

export default function ProjectsListing({ initialProjects }: { initialProjects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const displayProjects = initialProjects.length > 0 ? initialProjects : [];

  const filteredProjects = displayProjects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] min-h-screen text-zinc-900 dark:text-zinc-100 relative">
      {/* Back to Home Button */}
      <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg border border-white/20">
        <Home size={18} />
        <span className="hidden sm:inline">Back to Home</span>
      </Link>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white dark:to-[#0a0a0a] z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 pt-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 drop-shadow-lg mb-4">
            RAB INFO and INFRA Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
            Discover our premium portfolio of real estate and infrastructure developments.
          </p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-30 mb-16">
        <div className="max-w-3xl mx-auto bg-white/10 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 p-4 rounded-full shadow-2xl flex items-center gap-4 transition-all focus-within:ring-2 ring-amber-500/50">
          <Search className="text-zinc-500 dark:text-zinc-400 ml-4" size={24} />
          <input
            type="text"
            placeholder="Search by name, location, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 text-lg py-2"
          />
          <button className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
            Search
          </button>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="flex justify-between items-end mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <h2 className="text-3xl font-bold">Latest Projects</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Showing {filteredProjects.length} premium properties</p>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Link href={`/infra-projects/${project.id}`} key={project.id}>
                <div 
                  className="group rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.mainImage}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                      <span className="text-sm font-medium flex items-center gap-1.5 opacity-90"><Building size={14}/> {project.type}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-6 py-2">
                      <MapPin size={16} className="text-amber-500 flex-shrink-0" />
                      <span className="text-sm truncate">{project.address}</span>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div>
                        <p className="text-xs text-zinc-400 mb-0.5 uppercase tracking-wide font-semibold">Starting Price</p>
                        <p className="text-xl font-bold text-amber-500">{project.price}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-6">
              <Search size={32} className="text-zinc-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-zinc-500">Try adjusting your search criteria</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 text-amber-500 font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
