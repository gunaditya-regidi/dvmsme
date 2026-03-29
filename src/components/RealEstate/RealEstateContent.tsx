"use client";

import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { translations, Language } from './translations';
import {
  Building2,
  MapPin,
  Leaf,
  Users,
  TrendingUp,
  Ticket,
  Gift,
  Tags,
  Target,
  Sparkles,
  ShieldCheck,
  Smile,
  PhoneCall,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  FileSpreadsheet,
  Minimize2,
  Maximize2,
  Scissors
} from 'lucide-react';

export default function RealEstateContent() {
  const [lang, setLang] = useState<Language>('en');
  const [showBuyers, setShowBuyers] = useState(true);
  const [searchMember, setSearchMember] = useState("");
  const [membershipHeaders, setMembershipHeaders] = useState<string[]>([]);
  const [membershipData, setMembershipData] = useState<string[][]>([]);
  const [isLoadingMembers, setIsLoadingMembers] = useState(true);
  const [showPromoVideo, setShowPromoVideo] = useState(true);
  const [isVideoMinimized, setIsVideoMinimized] = useState(false);

  React.useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/14nbQR_uyB99sGpB3D3Pt42CRJVf3laTibFKBI7Z0zpM/export?format=csv")
      .then(res => res.text())
      .then(csvText => {
        const rows: string[][] = [];
        let currentRow: string[] = [];
        let currentCell = '';
        let inQuotes = false;
        
        for (let i = 0; i < csvText.length; i++) {
          const char = csvText[i];
          if (char === '"' && csvText[i+1] === '"') {
            currentCell += '"'; i++;
          } else if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            currentRow.push(currentCell.trim()); currentCell = '';
          } else if (char === '\n' && !inQuotes) {
            currentRow.push(currentCell.trim());
            if (currentRow.some(c => c)) rows.push(currentRow);
            currentRow = []; currentCell = '';
          } else if (char !== '\r') {
            currentCell += char;
          }
        }
        currentRow.push(currentCell.trim());
        if (currentRow.some(c => c)) rows.push(currentRow);
        
        const rawHeaders = rows.length > 2 ? rows[2] : [];
        let lastValidIdx = rawHeaders.length - 1;
        while(lastValidIdx >= 0 && !rawHeaders[lastValidIdx]) lastValidIdx--;
        
        let headers = rawHeaders.slice(0, lastValidIdx + 1);
        let data = rows.slice(3)
          .map(r => r.slice(0, lastValidIdx + 1))
          .filter(r => r[0] && r[0].length > 0);
          
        const forbiddenCols = ["cell", "refer", "amount", "valid", "date"];
        const allowedIndices = headers.map((h, i) => !forbiddenCols.some(f => h.toLowerCase().includes(f)) ? i : -1).filter(i => i !== -1);
        
        headers = allowedIndices.map(i => headers[i]);
        data = data.map(r => allowedIndices.map(i => r[i]));
          
        setMembershipHeaders(headers);
        setMembershipData(data);
        setIsLoadingMembers(false);
      });
  }, []);

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white text-emerald-950 p-3 rounded-full shadow-xl transition-all hover:scale-110"
        onClick={onClick}
      >
        <ChevronRight className="w-6 h-6" />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-white text-emerald-950 p-3 rounded-full shadow-xl transition-all hover:scale-110"
        onClick={onClick}
      >
        <ChevronLeft className="w-6 h-6" />
      </div>
    );
  };

  const t = translations[lang];



  return (
    <main className="w-full bg-slate-50 min-h-screen text-slate-800 font-sans">

      {/* BRANDING LOGO TOP LEFT */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-emerald-100">
        <img
          src="/images/background/rablog.png"
          alt="RAB Group Logo"
          className="h-10 w-auto md:h-12 object-contain"
        />
        <div className="font-black text-emerald-950 text-xs md:text-sm tracking-widest uppercase leading-tight">
          RAB GROUP<br />
          <span className="text-amber-600 font-bold text-[10px] md:text-xs">INFO & INFRA</span>
        </div>
      </div>

      {/* LANGUAGE TOGGLE STICKY */}
      <div className="fixed top-24 right-4 z-50">
        <div className="bg-white rounded-full shadow-xl border border-slate-200 p-1 flex">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-amber-600 text-white' : 'text-slate-500 hover:text-slate-800'}`}
          >
            English
          </button>
          <button
            onClick={() => setLang('te')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${lang === 'te' ? 'bg-amber-600 text-white' : 'text-slate-500 hover:text-slate-800'}`}
          >
            తెలుగు
          </button>
        </div>
      </div>

      {/* Global CSS for Marquee */}
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes image-marquee {
          0% { background-position: 0 0; }
          100% { background-position: -200% 0; }
        }
        .animate-text-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee-horizontal 50s linear infinite;
        }
      `}</style>

      {/* TEXT MARQUEE */}
      <div className="bg-amber-500 text-emerald-950 font-bold text-center py-2 overflow-hidden border-b border-amber-600">
        <div className="animate-text-marquee">
          {t.recentMarqueeText} &nbsp;&bull;&nbsp; {t.recentMarqueeText} &nbsp;&bull;&nbsp; {t.recentMarqueeText}
        </div>
      </div>

      {/* NEW: GOLDEN BUMPER OFFER */}
      <div className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 text-red-700 font-extrabold text-center py-3 px-4 flex items-center justify-center gap-3 animate-pulse border-b-4 border-amber-600 shadow-[0_0_20px_rgba(251,191,36,0.5)] relative z-40">
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
        <span className="text-[14px] md:text-xl tracking-wider uppercase drop-shadow-sm">
          Golden Bumper Offer! Don't Miss Out!
        </span>
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
      </div>

      {/* 1. HERO SECTION WITH IMAGE MARQUEE BACKGROUND */}
      <section className="relative w-full py-24 px-4 overflow-hidden bg-emerald-900 border-b-[8px] border-amber-500 flex items-center justify-center min-h-[85vh]">

        {/* Animated Background */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/hero/banner-bg.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat-x",
            animation: "image-marquee 60s linear infinite"
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-emerald-800/60 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8 mt-16">
          <div className="inline-block animate-bounce bg-amber-500 text-emerald-950 px-6 py-2 rounded-full font-extrabold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(245,158,11,0.5)]">
            {t.limitedBadge}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight filter drop-shadow-md">
            {t.heroHeadline}
          </h1>
          <p className="text-lg md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed">
            {t.heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="tel:9848418582" className="bg-amber-500 hover:bg-amber-400 text-emerald-950 text-lg font-bold px-10 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-amber-500/30 flex items-center justify-center gap-2">
              {t.becomeMember} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:9848418582" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              {t.callNow} <PhoneCall className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. VENTURE OVERVIEW */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-white rounded-3xl -mt-16 relative z-20 shadow-2xl border border-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm">
              <MapPin className="w-4 h-4" /> Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t.overviewTitle}</h2>
            <p className="text-xl text-slate-600 border-l-4 border-amber-500 pl-4 py-2 italic bg-slate-50">
              {t.overviewLocation}
            </p>
            <div className="flex items-center gap-3 text-lg font-medium text-emerald-800">
              <Building2 className="w-6 h-6 text-emerald-600" /> {t.overviewConcept}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: t.overviewNature },
              { icon: Users, text: t.overviewFamily },
              { icon: Target, text: t.overviewAsset },
              { icon: TrendingUp, text: t.overviewIncome },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <item.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 IMAGE SLIDESHOW */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30 relative">
            <Slider
              dots={true}
              infinite={true}
              speed={800}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3500}
              arrows={true}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {[
                "/images/rab/1.jpeg",
                "/images/rab/2.jpeg",
                "/images/rab/3.jpeg",
                "/images/rab/4.jpeg",
                "/images/rab/5.jpeg",
                "/images/rab/6.jpeg"
              ].map((imgSrc, idx) => (
                <div key={idx} className="outline-none aspect-video relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${imgSrc}')` }}
                  />
                  <div className="absolute inset-0 bg-emerald-900/10"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* NEW: FLOATING / INLINE VIDEO - Above membership in mobile, floating right in desktop */}
      {showPromoVideo && (
        <div className={`mx-auto my-8 md:my-0 md:fixed md:z-[60] group flex justify-center bg-emerald-950 shadow-[0_0_25px_rgba(0,0,0,0.3)] border-[3px] border-amber-400 overflow-hidden transition-all duration-300 ease-in-out ${isVideoMinimized ? 'w-16 h-16 rounded-full bottom-4 right-4 fixed md:bottom-28' : 'w-full max-w-[280px] aspect-[9/16] rounded-2xl md:w-64 md:bottom-28 md:right-4 flex-col'}`}>
          {!isVideoMinimized ? (
            <>
              <div className="absolute top-2 left-2 z-20 flex gap-2">
                <button 
                  onClick={() => setIsVideoMinimized(true)}
                  className="bg-black/60 hover:bg-black/90 text-white p-1.5 rounded-full transition-colors border border-white/20"
                  title="Minimize video"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-black px-2 py-1 rounded shadow-md animate-pulse z-10">
                LIVE
              </div>
              <video 
                src="/images/verti/promo-video.mp4" 
                autoPlay 
                loop 
                controls
                playsInline
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </>
          ) : (
            <button 
              onClick={() => setIsVideoMinimized(false)}
              className="w-full h-full bg-emerald-700 hover:bg-emerald-600 flex items-center justify-center text-amber-300 transition-colors"
              title="Maximize promotional video"
            >
              <Maximize2 className="w-6 h-6 animate-pulse" />
            </button>
          )}
        </div>
      )}

      {/* 3. MEMBERSHIP OFFER */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">{t.membershipTitle}</h2>
          <div className="inline-block bg-emerald-900 text-amber-400 px-8 py-3 rounded-2xl text-2xl font-black shadow-xl shadow-emerald-900/20 transform -rotate-2">
            {t.membershipFee}
          </div>
          <p className="mt-8 text-xl font-bold text-amber-600 tracking-wider">★ {t.membershipEmphasize} ★</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Ticket, title: t.benefit1, color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Gift, title: t.benefit2, color: "text-rose-500", bg: "bg-rose-50" },
            { icon: Tags, title: t.benefit3, color: "text-emerald-500", bg: "bg-emerald-50" }
          ].map((benefit, i) => (
            <div key={i} className={`p-8 rounded-3xl ${benefit.bg} border border-white shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <benefit.icon className={`w-32 h-32 ${benefit.color}`} />
              </div>
              <benefit.icon className={`w-12 h-12 ${benefit.color} mb-6 relative z-10`} />
              <h3 className="text-2xl font-bold text-slate-800 relative z-10 leading-tight">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: MOBILE VIEW IMAGE SECTION */}
      <section className="px-4 pb-12 w-full max-w-sm mx-auto block md:hidden">
        <div className="rounded-3xl overflow-hidden shadow-xl border-[3px] border-amber-400/80 aspect-[9/16] flex justify-center items-center bg-emerald-950">
          <img 
            src="/images/verti/promo-image.jpg" 
            alt="Membership Special" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3.1 VIEW MEMBERSHIP BUYERS (LIVE INTEGRATION) */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <button
          onClick={() => setShowBuyers(!showBuyers)}
          className="bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-colors shadow-lg flex items-center justify-center gap-3 mx-auto"
        >
          {t.viewBuyersBtn} {showBuyers ? '▲' : '▼'}
          {showBuyers && <span className="flex items-center gap-1 text-xs bg-emerald-500 text-emerald-950 px-2 py-1 rounded-full animate-pulse tracking-widest font-black"><FileSpreadsheet className="w-3 h-3"/> LIVE</span>}
        </button>

        {showBuyers && (
          <div className="mt-8 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-4 md:p-6 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
               <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2"><Users className="w-6 h-6 text-emerald-600"/> Live Membership Roster</h3>
               <div className="relative w-full md:w-72">
                 <input 
                   type="text" 
                   value={searchMember}
                   onChange={(e) => setSearchMember(e.target.value)}
                   placeholder="Search members..."
                   className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                 />
                 <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
               </div>
            </div>

            <div className="max-h-[600px] overflow-y-auto w-full">
              {isLoadingMembers ? (
                <div className="py-20 text-slate-500 font-semibold flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  Loading secure fast live sheet...
                </div>
              ) : (
                <div className="overflow-x-hidden pb-8 flex justify-center">
                  <div className="flex flex-col gap-6 text-left p-2 md:p-6 bg-slate-100/50 w-full min-w-[340px] max-w-[1000px] mx-auto">
                    {membershipData
                      .filter(row => row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes(searchMember.toLowerCase())))
                      .map((row, rowIdx) => {
                          const findCell = (keywords: string[]) => {
                            const idx = membershipHeaders.findIndex(h => keywords.some(kw => h.toLowerCase().includes(kw)));
                            return idx !== -1 ? { label: membershipHeaders[idx], value: row[idx], idx } : null;
                          };
            
                          const nameField = findCell(['name', 'first', 'full']);
                          const idField = findCell(['id', 'coupon', 'number']);
                          const statusField = findCell(['status', 'state']);
                          
                          // collect remaining fields
                          const fieldsToHide = ['amount', 'cel', 'cell', 'valid', 'date', 'created'];
                          const prominentIndices = [nameField?.idx, idField?.idx, statusField?.idx];
                          const otherFields = membershipHeaders
                            .map((h, i) => ({ label: h, value: row[i], idx: i }))
                            .filter(f => !prominentIndices.includes(f.idx) && f.value && f.value.trim() !== '' && !fieldsToHide.some(hid => f.label.toLowerCase().includes(hid)));
            
                          const isAvailable = !nameField?.value || nameField.value.trim() === '' || nameField.value.toLowerCase().includes('available');
            
                          return (
                            <div key={rowIdx} className="w-full min-h-[100px] md:min-h-[160px] flex flex-row rounded-lg overflow-hidden shadow-xl group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 font-sans border-2 border-yellow-400 shrink-0">
  
                              {/* Left Section (Green) */}
                              <div className="flex-1 bg-[#127242] p-1 md:p-2 relative flex flex-col justify-between overflow-hidden">
                                {/* Background Pattern/Flourishes */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16 z-0 pointer-events-none"></div>

                                {/* Header */}
                                <div className="relative z-10 w-full mb-0.5">
                                  <div className="flex justify-between items-start">
                                    <div className="font-bold text-white text-[6px] md:text-[10px] uppercase leading-tight whitespace-nowrap">
                                      VK GROUP <br/> <span className="text-[5px] md:text-[8px] font-normal">PRESENTS</span>
                                    </div>
                                    <div className="flex-1 text-center">
                                      <span className="text-white text-[10px] md:text-xl font-serif italic drop-shadow-md pb-0.5 whitespace-nowrap inline-block">
                                        Sandal Vally Farm Land
                                      </span>
                                    </div>
                                  </div>
                                  
                      <div className="mt-0.5 text-yellow-400 font-black text-[10px] md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide whitespace-nowrap flex items-baseline gap-1 md:gap-2">
                        <span>PAY RS. 10000/- ONLY</span>
                      </div>
                    </div>

                    {/* Body with Form Fields */}
                    <div className="flex flex-row gap-1 md:gap-2 relative z-10 w-full items-center my-1 justify-between">
                      {/* Left Block: Gift Coupon & Blue Box */}
                      <div className="flex flex-col items-start gap-1 shrink-0">
                        <span className="text-pink-400 font-black text-[10px] md:text-xl lg:text-2xl uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-none">Gift Coupon</span>
                        <div className="flex flex-col items-center justify-center border md:border-2 border-blue-600 bg-blue-900 w-[50px] md:w-[80px] lg:w-[100px] rounded md:rounded-lg p-0.5 md:p-1 shadow-xl">
                           <span className="text-yellow-400 font-extrabold text-[5px] md:text-xs uppercase md:mb-[-4px]">Free</span>
                           <span className="text-yellow-400 font-black text-[14px] md:text-3xl leading-none drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] md:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">100</span>
                           <span className="text-white text-[4px] md:text-[8px] uppercase text-center font-bold leading-tight mt-0.5 md:mt-1 whitespace-nowrap">SY.YDS FARM LAND</span>
                           <span className="text-yellow-300 text-[3px] md:text-[6px] uppercase font-bold text-center leading-tight mt-0.5 whitespace-nowrap shadow-black drop-shadow-md">A chance to win...</span>
                        </div>
                      </div>

                      {/* Middle Block: Be a member text & Name */}
                      <div className="flex flex-col items-center justify-center flex-1 mx-1 md:mx-2 gap-1 md:gap-2 overflow-hidden">
                        <span className="text-white font-black text-[6px] md:text-sm lg:text-lg uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center whitespace-nowrap">Be a member - win a site</span>
                        <div className="flex items-center justify-center w-full mt-0.5 md:mt-1">
                           <label className="text-white text-[8px] md:text-xl font-black mr-1 md:mr-2 drop-shadow-md shrink-0 whitespace-nowrap">Name:</label>
                           <div className="bg-white text-black font-black px-1.5 md:px-4 py-0.5 md:py-1.5 rounded-sm text-[6px] md:text-sm lg:text-lg uppercase shadow-inner min-w-[60px] md:min-w-[160px] w-full text-center flex-1 break-words whitespace-normal leading-tight">
                              {!isAvailable ? (nameField?.value || 'UNKNOWN MEMBER') : <span className="text-slate-400">AVAILABLE</span>}
                           </div>
                        </div>
                      </div>

                      {/* Right Block: Image */}
                      <div className="flex flex-col items-center justify-center flex-shrink-0">
                         <div className="w-12 h-8 md:w-24 md:h-16 lg:w-32 lg:h-20 bg-green-900 border md:border-2 border-white/30 rounded-md md:rounded-lg overflow-hidden relative shadow-inner">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                            <img src="/images/rab/1.jpeg" alt="Farm" className="w-full h-full object-cover opacity-80" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                         </div>
                      </div>
                    </div>

                                {/* Footer */}
                                <div className="flex flex-row justify-between items-end mt-auto relative z-10 gap-1 whitespace-nowrap border-t border-white/20 pt-1 md:pt-1.5">
                                  <div className="text-white text-[4px] md:text-[8px] space-y-0.5 md:space-y-1 font-medium shrink-0 flex flex-col justify-end pb-0.5 pl-1 max-w-[45%] md:max-w-[50%]">
                                     <p>1. GET A FREE GIFT WORTH RS.2500/- FOR EVERY COUPON.</p>
                                     <p>2. GET A FREE REDEEM COUPON WORTH RS. 10000/-</p>
                                  </div>
                                  <div className="flex items-center text-white shrink-0 pr-0.5 md:pr-1 pb-0.5 md:pb-1 gap-1 md:gap-3">
                                     {statusField?.value && statusField.value.trim() !== '' && (
                                        <span className={`px-1 md:px-2 py-0.5 md:py-1 rounded-sm text-[5px] md:text-[10px] font-black uppercase tracking-wider shadow-sm border border-white/20 ${
                                           statusField.value.toLowerCase().includes('available') ? 'bg-blue-600 text-white' :
                                           statusField.value.toLowerCase().includes('hold') ? 'bg-amber-500 text-black' :
                                           'bg-red-600 text-white'
                                        }`}>
                                           {statusField.value}
                                        </span>
                                     )}
                                     <div className="flex items-center">
                                        <span className="font-black text-[6px] md:text-[12px] mr-1 md:mr-2 drop-shadow-md">TKT NO:</span> 
                                        <span className="bg-green-300 text-green-950 px-2 md:px-5 py-0.5 md:py-1.5 rounded-full font-black text-[8px] md:text-base text-center shadow-inner inline-block min-w-[40px] md:min-w-[80px]">
                                          {idField?.value || '####'}
                                        </span>
                                     </div>
                                  </div>
                                </div>
                              </div>

                              {/* Separator */}
                              <div className="w-2 md:w-8 shrink-0 bg-yellow-400 flex flex-col items-center justify-center border-x-[1px] md:border-x-[2px] border-dashed border-black">
                                <Scissors className="w-2 h-2 md:w-4 md:h-4 text-black" />
                              </div>

                              {/* Right Section (Blue/Purple) */}
                              <div className="w-[100px] md:w-[150px] lg:w-[190px] bg-[#291ba8] p-1 md:p-3 flex flex-col justify-between text-white shrink-0 border-l border-white/20 relative z-10 overflow-hidden">
                                <div className="text-center space-y-0.5 relative z-10">
                                  <div className="font-bold text-white text-[5px] md:text-[8px] lg:text-[10px] uppercase leading-tight">
                                    VK GROUP <br/> <span className="text-[4px] md:text-[6px] lg:text-[8px] font-normal tracking-widest">PRESENTS</span>
                                  </div>
                                  <div className="text-white text-[5px] md:text-[8px] lg:text-[10px] font-serif italic drop-shadow-md whitespace-nowrap mt-0.5 md:mt-1">
                                    Sandal Vally Farm Land
                                  </div>
                                  <div className="text-yellow-400 font-extrabold text-[6px] md:text-[10px] lg:text-[12px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight mt-0.5 whitespace-nowrap">
                                    PAY RS. 10000/- ONLY
                                  </div>
                                  <div className="text-white text-[4px] md:text-[6px] lg:text-[8px] font-bold uppercase flex flex-col items-center mt-0.5">
                                    <span>Be a member - win a site</span>
                                    <span className="text-pink-400 text-[5px] md:text-[8px] lg:text-[10px] mt-0.5 font-black drop-shadow-md whitespace-nowrap">GIFT COUPON</span>
                                  </div>
                                </div>

                                <div className="bg-pink-400 text-black p-0.5 md:p-1.5 rounded-sm text-[4px] md:text-[6px] lg:text-[8px] font-extrabold space-y-0.5 md:space-y-1.5 leading-tight my-1 md:my-2 shadow-inner relative z-10 whitespace-normal text-left">
                                  <p className="border-b border-black/10 pb-0.5 md:pb-1">1. GET A FREE GIFT WORTH RS.2500/- FOR EVERY COUPON.</p>
                                  <p>2. GET A FREE REDEEM COUPON WORTH RS. 10000/- FOR EACH COUPON</p>
                                </div>

                                <div className="flex items-center font-black text-[5px] md:text-[9px] lg:text-[11px] justify-start mt-0.5 md:mt-1 gap-1 md:gap-2 relative z-10">
                                  <span className="drop-shadow-md shrink-0">TKT NO:</span> 
                                  <span className="bg-white text-gray-800 px-1 md:px-3 py-0.5 md:py-1 rounded-full shadow-inner flex-1 text-center font-black tracking-wider text-[6px] md:text-[10px] lg:text-sm min-w-[30px] md:min-w-[60px]">
                                    {idField?.value || '####'}
                                  </span>
                                </div>

                                {statusField?.value && statusField.value.trim() !== '' && (
                                    <div className="text-center mt-1 md:mt-1.5 relative z-10">
                                       <span className={`px-1 md:px-2 py-[1px] md:py-0.5 rounded text-[4px] md:text-[6px] lg:text-[8px] font-bold uppercase tracking-wider shadow-sm border border-white/20 ${
                                           statusField.value.toLowerCase().includes('available') ? 'bg-blue-600 text-white' :
                                           statusField.value.toLowerCase().includes('hold') ? 'bg-amber-500 text-black' :
                                           'bg-red-600 text-white'
                                       }`}>
                                           {statusField.value}
                                       </span>
                                    </div>
                                )}

                                <div className="text-center mt-1 md:mt-2 relative z-10">
                                   <div className="text-[4px] md:text-[6px] font-bold uppercase opacity-70 text-center tracking-widest border-t border-white/20 pt-1 md:pt-1.5">Terms & Conditions Apply</div>
                                </div>
                              </div>
                            </div>
                          );
                      })}
                      {membershipData.filter(row => row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes(searchMember.toLowerCase()))).length === 0 && (
                        <div className="w-full py-12 text-center text-slate-500 italic">No records found matching "{searchMember}".</div>
                      )}
                </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* 4. LUCKY DRAW & 5. LIFESTYLE (Combined Section) */}
      <section className="bg-emerald-900 py-24 text-white relative overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-emerald-400 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Lucky Draw */}
            <div className="space-y-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-3">
                <Sparkles /> {t.luckyDrawTitle}
              </h2>
              <div className="bg-amber-500 text-emerald-950 p-6 rounded-2xl text-2xl font-black shadow-lg">
                {t.luckyDrawRepeat}
              </div>
              <p className="text-xl font-medium leading-relaxed">
                {t.luckyDrawStatement}
              </p>
              <div className="flex gap-4 pt-6 border-t border-white/10 flex-wrap">
                {[t.trustTransparent, t.trustPeriodic, t.trustCommunity].map((trust, i) => (
                  <span key={i} className="flex items-center gap-2 text-emerald-100 bg-white/10 px-4 py-2 rounded-full text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> {trust}
                  </span>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="space-y-8 p-10">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                {t.lifestyleTitle}
              </h2>
              <p className="text-2xl font-light border-l-2 border-emerald-400 pl-6 rounded-r-xl py-2 bg-gradient-to-r from-emerald-800/50 to-transparent">
                {t.lifestyleResort}
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: Smile, text: t.lifestyleSub1 },
                  { icon: Leaf, text: t.lifestyleSub2 },
                  { icon: Sparkles, text: t.lifestyleSub3 },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-emerald-50">
                    <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SCHEMES */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">{t.schemesTitle}</h2>
          <p className="text-slate-500">{t.schemeRegistrationInfo}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Scheme 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col hover:border-amber-400 transition-colors">
            <div className="bg-slate-100 py-6 text-center border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800">{t.scheme1Title}</h3>
              <p className="text-slate-500 mt-1">{t.scheme1Time}</p>
            </div>
            <div className="p-8 flex-grow space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-500">Advance</span>
                <span className="font-bold text-slate-800">₹1,00,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-500">Duration</span>
                <span className="font-medium text-slate-800">90 Days</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl flex justify-between items-center">
                <span className="font-semibold text-amber-800">Final</span>
                <span className="text-xl font-black text-amber-600">₹5,50,000</span>
              </div>
            </div>
          </div>

          {/* Scheme 2 (Highlighted) */}
          <div className="bg-emerald-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col transform md:-translate-y-4 ring-4 ring-emerald-800 ring-offset-4">
            <div className="bg-amber-500 py-6 text-center shadow-inner">
              <h3 className="text-2xl font-black text-emerald-950">{t.scheme2Title}</h3>
              <p className="text-emerald-900 font-medium mt-1 uppercase tracking-wide">Most Popular • {t.scheme2Time}</p>
            </div>
            <div className="p-8 flex-grow space-y-6 text-emerald-50">
              <div className="flex justify-between items-center pb-4 border-b border-emerald-800/50">
                <span className="text-emerald-200">Advance</span>
                <span className="font-bold">₹1,00,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-emerald-800/50">
                <span className="text-emerald-200">Duration</span>
                <span className="font-medium">12 Months</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-emerald-800/50">
                <span className="text-emerald-200">EMI</span>
                <span className="font-bold">₹25,000 × 12</span>
              </div>
              <div className="bg-emerald-800/50 p-4 rounded-xl flex justify-between items-center border border-emerald-700">
                <span className="font-semibold">Final Load</span>
                <span className="text-xl font-black text-amber-400">₹3,00,000</span>
              </div>
            </div>
          </div>

          {/* Scheme 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col hover:border-amber-400 transition-colors">
            <div className="bg-slate-100 py-6 text-center border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800">{t.scheme3Title}</h3>
              <p className="text-slate-500 mt-1">{t.scheme3Time}</p>
            </div>
            <div className="p-8 flex-grow space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-500">Advance</span>
                <span className="font-bold text-slate-800">₹50,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-500">Duration</span>
                <span className="font-medium text-slate-800">24 Months</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-500">EMI</span>
                <span className="font-bold text-slate-800">₹20,000 × 24</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl flex justify-between items-center">
                <span className="font-semibold text-amber-800">Final Load</span>
                <span className="text-xl font-black text-amber-600">₹2,20,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY JOIN (Value Proposition) */}
      <section className="bg-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">{t.whyJoinTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              t.whyJoinReason1,
              t.whyJoinReason2,
              t.whyJoinReason3,
              t.whyJoinReason4,
              t.whyJoinReason5
            ].map((reason, i) => (
              <span key={i} className="bg-white px-6 py-3 rounded-full shadow border border-amber-100 text-lg font-medium text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> {reason}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION (Conversion Section) */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">{t.ctaHeadline}</h2>
          <div className="inline-block border-4 border-amber-500 rounded-2xl p-6 mb-8 bg-black/20 backdrop-blur">
            <p className="text-2xl md:text-4xl font-bold tracking-widest text-amber-400">
              {t.ctaContact}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:9848418582" className="bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xl font-bold px-12 py-5 rounded-full shadow-2xl transition-transform hover:scale-105 inline-block text-center">
              {t.ctaButton1}
            </a>
            <a href="tel:9848418582" className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-xl font-bold px-12 py-5 rounded-full transition-transform hover:scale-105 inline-block text-center">
              {t.ctaButton2}
            </a>
          </div>
          <p className="pt-12 text-sm text-emerald-300/60 uppercase tracking-widest">
            {t.disclaimer}
          </p>
        </div>
      </section>

      {/* 9. CUSTOM FOOTER SECTION */}


      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden z-50 flex gap-2">
        <a href="tel:9848418582" className="flex-1 bg-amber-500 text-emerald-950 font-bold py-3 rounded-xl flex items-center justify-center text-center">
          {t.becomeMember}
        </a>
        <a href="tel:9848418582" className="bg-emerald-900 text-white p-3 rounded-xl flex items-center justify-center aspect-square">
          <PhoneCall size={24} />
        </a>
      </div>

    </main>
  );
}
