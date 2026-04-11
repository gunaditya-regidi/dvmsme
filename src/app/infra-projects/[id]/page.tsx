
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Building, CheckCircle2, PhoneCall, Calendar, Ruler, Download } from 'lucide-react';
import { fetchProjects } from '@/utils/fetchProjects';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/InfraProjects/ProjectGallery';
import CallbackForm from '@/components/InfraProjects/CallbackForm';
export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projects = await fetchProjects();
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    return notFound();
  }
  
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] min-h-screen pt-20 pb-24 text-zinc-900 dark:text-zinc-100">
      <div className="container mx-auto px-4">
        <Link href="/infra-projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors font-medium">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
        
        {/* Header Section */}
        <div className="lg:flex justify-between items-start mb-8 gap-8">
          <div>
            <div className="flex gap-3 mb-3">
              <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Project
              </span>
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.name}</h1>
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-lg">
              <MapPin className="text-amber-500" />
              <span>{project.address}</span>
            </div>
          </div>
          
          <div className="mt-6 lg:mt-0 lg:text-right hidden sm:block">
            <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider mb-1">Price</p>
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{project.price}</p>
          </div>
        </div>

        {/* Gallery Section */}
        <ProjectGallery mainImage={project.mainImage} galleryImages={project.galleryImages} />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-6">About the Property</h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Building, label: "Type", value: project.type },
                { icon: Ruler, label: "Area", value: project.areaSize },
                { icon: Calendar, label: "Possession", value: project.possessionDate },
                { icon: MapPin, label: "Status", value: project.status }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl items-center text-center bg-white dark:bg-zinc-900 shadow-sm">
                  <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-500 mb-3">
                    <item.icon size={24} />
                  </div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.amenities && project.amenities.length > 0 ? (
                project.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} />
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">{amenity}</span>
                  </div>
                ))
              ) : (
                <span className="text-zinc-500">No amenities listed.</span>
              )}
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] block">
              <h3 className="text-xl font-bold mb-2">Interested in this property?</h3>
              <p className="text-zinc-500 mb-8">Drop your details and our property experts will get back to you.</p>
              
              <CallbackForm project={project} />

              <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
                <Link href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full border border-zinc-200 dark:border-zinc-700 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-semibold">
                  <PhoneCall size={20} className="text-amber-500" />
                  Call Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
