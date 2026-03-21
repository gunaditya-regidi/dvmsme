'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Play, Calendar, Clock, Monitor, Code, Award,
  Users, CheckCircle, ArrowRight, BookOpen, User,
  PhoneCall, Mail, Terminal, Database, ShieldCheck,
  Briefcase
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';

export default function OnlineClassesContent() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: 'data' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeImageSlide, setActiveImageSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out-cubic',
    });

    // Image cycler for the course cards (0 <-> 1)
    const slideInterval = setInterval(() => {
      setActiveImageSlide(prev => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(slideInterval);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    let toastId = toast.loading('Sending application...');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration request submitted! We will contact you soon.', { id: toastId });
        setFormData({ name: '', phone: '', email: '', course: 'data' });
      } else {
        toast.error('Registration failed. Please try again.', { id: toastId });
      }
    } catch (error) {
      toast.error('Network error. Please try again later.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <Toaster position="top-right" />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
            WebkitMaskImage: `radial-gradient(ellipse at 50% 50%, #000 10%, transparent 80%)`,
            maskImage: `radial-gradient(ellipse at 50% 50%, #000 10%, transparent 80%)`,
          }}
        />

        {/* Colored Glowing Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-[96px]" />
      </div>

      {/* Intro / Header Bar */}
      <div className="relative z-10 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              A
            </div>
            <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              AISOFT
            </h1>
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-200 flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1">
            <span>In collaboration with <span className="text-cyan-400 font-bold">VC Tech</span> & <span className="text-purple-400 font-bold">Talent Computers</span></span>
            <span className="hidden md:inline text-white">•</span>
            <span>Tech Partner: <span className="text-blue-400 font-bold">Digital Videos</span></span>
          </div>
        </div>
      </div>

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Practical Tech Training & Real-World Solutions
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
              Build Industry-Ready <br />
              <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Tech Skills
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Master Full Stack Development or Data Analytics with <span className="text-white font-bold">live training</span>, <span className="text-white font-bold">real projects</span>, and <span className="text-white font-bold">portfolio development</span>. Join the elite batch of 15 students to kickstart your career.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#register" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#courses" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-lg transition-all backdrop-blur-sm shadow-sm">
                Explore Courses
              </a>
            </div>
          </div>
        </section>

        {/* COURSES SECTION */}
        <section id="courses" className="py-20 bg-slate-900/80 border-y border-white/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Elite Training Programs</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">Choose your path and build a highly rewarding career. Our specialized tracks are designed to get you hired.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

              {/* COURSE 1: DATA ANALYTICS */}
              <div className="group rounded-3xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col relative shadow-[0_4px_40px_rgba(0,0,0,0.5)]" data-aos="fade-up" data-aos-delay="100">
                {/* 1:1 Image Slider Top */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-950">
                  <Image
                    src="/images/event/da1.png"
                    alt="Data Analytics Preview 1"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${activeImageSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
                  <Image
                    src="/images/event/da2.png"
                    alt="Data Analytics Preview 2"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${activeImageSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/20 to-transparent opacity-90 z-20" />

                  {/* Floating Icon over Slide */}
                  <div className="absolute top-6 right-6 z-30 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-slate-900/50 p-4 rounded-2xl backdrop-blur-md">
                    <Database className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 flex-grow relative z-30">
                  <h4 className="text-2xl font-bold text-white mb-2">Data Analytics Program</h4>
                  <p className="text-cyan-400 font-medium mb-6">50 Hours (6 Weeks)</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <Monitor className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Mode:</span> Live Online</p>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Weekdays:</span> 8 PM – 9 PM</p>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Weekends:</span> 3-hour lab sessions</p>
                    </div>
                    <div className="flex gap-3">
                      <BookOpen className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Curriculum:</span> Excel, SQL, Python, Data Cleaning, Power BI, Projects</p>
                    </div>
                    <div className="flex gap-3">
                      <Award className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Outcomes:</span> Real-world projects, dashboards, portfolio, interview prep</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-700 flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
                    <div>
                      <p className="text-slate-300 text-sm mb-1 uppercase tracking-wider font-semibold">Fee / Limited Seats</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xl text-slate-400 line-through">₹20,000</span>
                        <span className="text-3xl font-bold text-cyan-400">₹9,999</span>
                        <span className="text-slate-300 text-sm">/ ₹13,000</span>
                      </div>
                    </div>
                    <a href="#register" className="px-5 py-2.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors font-medium text-sm whitespace-nowrap">
                      Select Course
                    </a>
                  </div>
                </div>
              </div>

              {/* COURSE 2: FULL STACK */}
              <div className="group rounded-3xl bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-all overflow-hidden flex flex-col relative shadow-[0_4px_40px_rgba(0,0,0,0.5)]" data-aos="fade-up" data-aos-delay="200">
                {/* 1:1 Image Slider Top */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-950">
                  <Image
                    src="/images/event/fst1.png"
                    alt="Full Stack Preview 1"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${activeImageSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
                  <Image
                    src="/images/event/fst2.png"
                    alt="Full Stack Preview 2"
                    fill
                    className={`object-cover transition-opacity duration-1000 ${activeImageSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/20 to-transparent opacity-90 z-20" />

                  {/* Floating Icon over Slide */}
                  <div className="absolute top-6 right-6 z-30 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-slate-900/50 p-4 rounded-2xl backdrop-blur-md">
                    <Terminal className="w-12 h-12 text-purple-400" />
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 flex-grow relative z-30">
                  <h4 className="text-2xl font-bold text-white mb-2">Full Stack Development</h4>
                  <p className="text-purple-400 font-medium mb-6">80 Hours (10–12 Weeks) • Python-Based</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <Monitor className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Mode:</span> Live Online</p>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Weekdays:</span> 8 PM – 9 PM</p>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="w-5 h-5 text-slate-300 shrink-0" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Weekends:</span> 3-hour lab sessions</p>
                    </div>
                    <div className="flex gap-3">
                      <BookOpen className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Curriculum:</span> HTML, CSS, JS, React, Python, Django/Flask, APIs, DB, Deploy</p>
                    </div>
                    <div className="flex gap-3">
                      <Award className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                      <p className="text-slate-200"><span className="text-white font-semibold">Outcomes:</span> Full-stack apps, live deployment, portfolio, interview prep</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-700 flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
                    <div>
                      <p className="text-slate-300 text-sm mb-1 uppercase tracking-wider font-semibold">Fee / Limited Seats</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xl text-slate-400 line-through">₹30,000</span>
                        <span className="text-3xl font-bold text-purple-400">₹15,999</span>
                        <span className="text-slate-300 text-sm">/ ₹18,999</span>
                      </div>
                    </div>
                    <button onClick={(e) => {
                      const elm = document.getElementById('register');
                      elm?.scrollIntoView({ behavior: 'smooth' });
                      setFormData({ ...formData, course: 'fullstack' });
                    }} className="px-5 py-2.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 transition-colors font-medium text-sm whitespace-nowrap">
                      Select Course
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
              <span className="inline-flex items-center flex-wrap justify-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-sm backdrop-blur-sm shadow-lg text-white">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span><span className="text-white font-bold">Dual Certification:</span> AISOFT + Digital Videos + VC Tech & Talent Computers</span>
              </span>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-4 text-white">Why Choose This Program?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">Accelerate your career with our unique, proven methodology focused on practical skills over theory.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Play, title: 'Live Interactive Sessions', desc: 'Real-time learning with experts, Q&A, and interactive coding.', color: 'text-cyan-400', border: 'hover:border-cyan-500/50', bg: 'bg-cyan-500/20 text-cyan-300' },
              { icon: Briefcase, title: 'Real-World Projects', desc: 'Build practical industry-grade applications to solve actual problems.', color: 'text-blue-400', border: 'hover:border-blue-500/50', bg: 'bg-blue-500/20 text-blue-300' },
              { icon: Users, title: 'Small Batch Size', desc: 'Strictly limited to 15 students for highly personalized attention.', color: 'text-purple-400', border: 'hover:border-purple-500/50', bg: 'bg-purple-500/20 text-purple-300' },
              { icon: Database, title: 'Portfolio Building', desc: 'Create a standout repository of your best deployed work.', color: 'text-pink-400', border: 'hover:border-pink-500/50', bg: 'bg-pink-500/20 text-pink-300' },
              { icon: ShieldCheck, title: 'Interview Preparation', desc: 'Mock interviews, resume building, and placement assistance.', color: 'text-emerald-400', border: 'hover:border-emerald-500/50', bg: 'bg-emerald-500/20 text-emerald-300' },
              { icon: User, title: 'Direct Mentorship', desc: '1-on-1 guidance from seasoned developers and data analysts.', color: 'text-orange-400', border: 'hover:border-orange-500/50', bg: 'bg-orange-500/20 text-orange-300' },
            ].map((feat, idx) => (
              <div key={idx} className={`p-8 rounded-2xl bg-slate-800 border border-slate-700 ${feat.border} transition-colors group flex flex-col shadow-lg`} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className={`w-14 h-14 rounded-xl ${feat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feat.icon className={`w-7 h-7`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feat.title}</h4>
                <p className="text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SCHEDULE SECTION (Timeline) */}
        <section className="py-24 bg-slate-900/80 border-y border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-center mb-16 text-white">Weekly Training Schedule</h3>

            <div className="relative border-l-2 border-slate-600 ml-6 md:ml-12 space-y-12">
              <div className="relative group">
                <div className="absolute -left-[45px] top-6 w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="ml-8 bg-slate-800 border border-slate-600 group-hover:border-cyan-500/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-colors text-white">
                  <h4 className="text-xl font-bold text-white mb-2">Weekdays (Mon - Fri)</h4>
                  <p className="text-cyan-400 text-lg font-bold mb-4">8:00 PM – 9:00 PM</p>
                  <p className="text-slate-200">Intensive live online theory and practical demonstration sessions covering the syllabus topics.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[45px] top-6 w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-8 bg-slate-800 border border-slate-600 group-hover:border-purple-500/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-colors text-white">
                  <h4 className="text-xl font-bold text-white mb-2">Weekends (Sat & Sun)</h4>
                  <p className="text-purple-400 text-lg font-bold mb-4">3-Hour Lab Sessions</p>
                  <p className="text-slate-200">Hands-on practice, mini-projects, doubt clearing, and 1-on-1 mentorship. Put your weekly learnings to the test to build real competence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTRATION & CTA */}
        <section id="register" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-800 border border-slate-600 overflow-hidden shadow-2xl relative" data-aos="zoom-in">
              <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />

              <div className="grid lg:grid-cols-5 h-full">
                <div className="lg:col-span-2 p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-600 bg-slate-900/50 flex flex-col justify-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Secure Your Spot</h3>
                  <p className="text-slate-200 mb-10 text-lg">We strictly restrict batch sizes to ensure quality. Register now to grab your seat.</p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-red-500/10 px-5 py-4 rounded-xl border border-red-500/30">
                      <div className="w-12 h-12 rounded-full bg-red-500/30 flex items-center justify-center text-red-100 font-black text-xl shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        15
                      </div>
                      <div>
                        <p className="text-sm text-red-200 uppercase tracking-widest font-bold mb-1">Availability</p>
                        <p className="font-bold text-white text-lg">Limited to 15 Students</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 px-2 mt-4 text-white">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 border border-cyan-500/30">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-100 mb-1 font-semibold">Direct Contact</p>
                        <a href="tel:9848418582" className="text-xl font-bold text-white hover:text-cyan-300 transition-colors">9848418582</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 px-2 text-white">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 shrink-0 border border-purple-500/30">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-purple-100 mb-1 font-semibold">Support Email</p>
                        <a href="mailto:talentcomputers2013@gmail.com" className="text-lg font-bold text-white hover:text-purple-300 transition-colors">talentcomputers2013@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 relative overflow-hidden bg-slate-900 border-l border-slate-700">
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" />
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px]" />

                  <form onSubmit={handleRegister} className="space-y-6 relative z-10 w-full max-w-lg mx-auto">
                    <h4 className="text-2xl font-bold mb-6 text-white">Registration Application</h4>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-200">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-medium shadow-inner"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-200">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-medium shadow-inner"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-200">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-medium shadow-inner"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-bold text-slate-200">Select Program</label>
                      <div className="relative">
                        <select
                          id="course"
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full bg-slate-800 border border-slate-600 rounded-xl pl-4 pr-10 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium appearance-none shadow-inner"
                        >
                          <option value="data">Data Analytics Program</option>
                          <option value="fullstack">Full Stack Development (Python)</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all transform flex items-center justify-center gap-2 border border-cyan-400 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed font-semibold">
                      By registering, you agree to our terms. No upfront payment required to join the waitlist. Our admissions team will call you to confirm.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-900 py-12 relative z-10 mt-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              A
            </div>
            <h2 className="text-xl font-black tracking-wider text-transparent bg-clip-text inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              AISOFT
            </h2>
          </div>
          <p className="text-slate-300 text-sm text-center max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            Empowering the next generation of tech professionals. In strategic collaboration with <span className="text-cyan-300 font-bold">VC Tech</span>, <span className="text-purple-300 font-bold">Talent Computers</span>, and <span className="text-blue-300 font-bold">Digital Videos</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300 font-bold">
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">Refund Policy</span>
          </div>
          <p className="text-slate-400 text-xs mt-8 font-bold">
            &copy; {new Date().getFullYear()} AISOFT. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50">
        <a href="#register" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-[0_4px_25px_rgba(34,211,238,0.6)] hover:scale-105 transition-transform border border-cyan-400/30">
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Register Now
        </a>
      </div>
    </div>
  );
}
