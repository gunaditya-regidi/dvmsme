"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building, ArrowRight, ArrowUpRight, Home, X } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

import { Project } from '@/utils/fetchProjects';

const categories = ["All", "Villas", "Apartments", "Open Plots", "Farm Lands", "VMRDA Sites", "Commercial", "Residential"];

export default function ProjectsListing({ initialProjects }: { initialProjects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isSubmittingList, setIsSubmittingList] = useState(false);

  const displayProjects = initialProjects.length > 0 ? initialProjects : [];

  const filteredProjects = displayProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || 
                            project.type.toLowerCase().includes(selectedCategory.toLowerCase()) || 
                            project.name.toLowerCase().includes(selectedCategory.toLowerCase());
                            
    return matchesSearch && matchesCategory;
  });

  const handleListSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingList(true);
    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      _subject: `New Property Listing Request from ${formData.get('name')}`,
      message: `A new user wants to list their property for ₹2999/3 Months.\n\nName: ${formData.get('name')}\nPhone Number: ${formData.get('phone')}`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/talentcomputers2013@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if(response.ok) {
        toast.success("Request sent successfully! Our team will contact you shortly.");
        setIsListModalOpen(false);
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmittingList(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] min-h-screen text-zinc-900 dark:text-zinc-100 relative">
      {/* Back to Home Button */}
      <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg border border-white/20">
        <Home size={18} />
        <span className="hidden sm:inline">Back to Home</span>
      </Link>
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white dark:to-[#0a0a0a] z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 pt-24 pb-20 flex flex-col items-center justify-center" data-aos="fade-up">
          {/* Replaced Text Title with Custom Logo/Title Image Placeholder */}
          <div className="relative w-full max-w-4xl h-32 md:h-56 mb-4 mt-4">
            <Image 
              src="/images/logo/titleinf.jpeg" 
              alt="బలే మంచి చౌకబేరం REAL ESTATE & PROPERTIES" 
              fill
              className="object-contain drop-shadow-2xl"
              priority
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
                document.getElementById('fallback-title')!.style.display = 'block';
              }}
            />
            <h1 id="fallback-title" className="hidden text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 drop-shadow-lg leading-tight">
              RAB INFO & INFRA Projects
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-amber-50 font-medium max-w-2xl mx-auto drop-shadow-md mb-10">
            Discover our premium portfolio of real estate and infrastructure developments.
          </p>
          
          <div className="relative z-30 inline-block pointer-events-auto">
            <button 
              onClick={() => setIsListModalOpen(true)}
              className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_rgba(245,158,11,0.7)] ring-4 ring-amber-500/30 hover:-translate-y-1"
            >
              List Your Property - ₹2999 / 3 Months
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar & Filters Section */}
      <div className="container mx-auto px-4 -mt-14 relative z-30 mb-16">
        <div className="max-w-4xl mx-auto bg-white/10 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 p-6 rounded-3xl shadow-2xl transition-all focus-within:ring-2 ring-amber-500/50">
          <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 mb-6 border border-white/10 dark:border-zinc-700/30">
            <Search className="text-zinc-400" size={24} />
            <input
              type="text"
              placeholder="Search by name, location, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-400 text-lg py-3"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hidden sm:block my-2">
              Search
            </button>
          </div>
          
          {/* Categories */}
          <div className="flex overflow-x-auto items-center gap-2 lg:gap-3 md:justify-center w-full pb-2 md:pb-0 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-white shadow-md shadow-amber-500/20 border border-transparent'
                    : 'bg-zinc-100 text-black dark:bg-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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

      {/* List Property Modal */}
      {isListModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-sm">
          <div 
            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-zinc-200 dark:border-zinc-800"
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            <button 
              onClick={() => setIsListModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="pr-8">
              <h3 className="text-2xl font-bold mb-1 text-zinc-900 dark:text-zinc-100">List Your Property</h3>
              <p className="text-amber-600 dark:text-amber-500 font-extrabold text-lg mb-4">₹2999 <span className="text-sm font-medium text-zinc-500">for 3 Months</span></p>
            </div>
            
            <div className="bg-amber-50/50 dark:bg-amber-900/10 p-4 rounded-2xl mb-6 border border-amber-100 dark:border-amber-900/30">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                Our professional team will visit your property, take high-quality pictures, and collect all necessary data for uploading and marketing. <strong className="text-zinc-900 dark:text-zinc-100">Let us handle the hassle!</strong>
              </p>
            </div>
            
            <form onSubmit={handleListSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-amber-500/20 transition-all dark:text-white outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-amber-500/20 transition-all dark:text-white outline-none"
                  placeholder="+91 9876543210"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmittingList}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 mt-4 text-lg disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmittingList ? 'Sending...' : 'Request Callback'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
