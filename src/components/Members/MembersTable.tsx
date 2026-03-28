'use client';

import React, { useState } from 'react';
import { Search, Users, FileSpreadsheet } from 'lucide-react';

interface Props {
  headers: string[];
  data: string[][];
}

export default function MembersTable({ headers, data }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter based on any cell containing the search term
  const filteredData = data.filter(row => 
    row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark pt-28 pb-24 font-sans selection:bg-blue-500/30">
      {/* Header Hero */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">VIP Member Directory</h1>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 font-medium">
                  RAB INFO AND INFRA & RK GROUP (Series A)
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-auto relative max-w-md shrink-0">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search member name, ID, place..."
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium shadow-inner"
              />
              <Search className="w-5 h-5 absolute left-4 top-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 flex justify-between items-center px-4">
          <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
            Active Roster &nbsp;<span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 py-1 px-3 rounded-full text-sm">{filteredData.length} cards</span>
          </h3>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              LIVE SYNC
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredData.map((row, rowIdx) => {
              // try to find important fields dynamically
              const findCell = (keywords: string[]) => {
                const idx = headers.findIndex(h => keywords.some(kw => h.toLowerCase().includes(kw)));
                return idx !== -1 ? { label: headers[idx], value: row[idx], idx } : null;
              };

              const nameField = findCell(['name', 'first', 'full']);
              const idField = findCell(['id', 'coupon', 'number']);
              const statusField = findCell(['status', 'state']);
              const dateField = findCell(['date', 'created', 'time']);
              
              const fieldsToHide = ['amount', 'cel', 'cell', 'valid', 'date', 'created'];
              const prominentIndices = [nameField?.idx, idField?.idx, statusField?.idx, dateField?.idx];
              const otherFields = headers
                .map((h, i) => ({ label: h, value: row[i], idx: i }))
                .filter(f => !prominentIndices.includes(f.idx) && f.value && f.value.trim() !== '' && !fieldsToHide.some(hid => f.label.toLowerCase().includes(hid)));

              const isAvailable = !nameField?.value || nameField.value.trim() === '' || nameField.value.toLowerCase().includes('available');

              return (
                <div key={rowIdx} className="relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-300 via-amber-600 to-yellow-800 shadow-[0_10px_30px_rgba(218,165,32,0.15)] group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(218,165,32,0.3)] transition-all duration-300">
                  <div className="relative rounded-[15px] h-full p-6 bg-[linear-gradient(135deg,#064e3b_0%,#022c22_50%,#000000_100%)] overflow-hidden flex flex-col font-sans">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-10 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px] pointer-events-none z-0"></div>
                    
                    {/* Header: Lucky Coupon Logo */}
                    <div className="flex justify-between items-start mb-6 z-10 relative">
                       <span className="text-[11px] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Lucky Coupon</span>
                       <div className="flex flex-col items-end">
                         <span className="italic font-black text-xl text-emerald-50 tracking-wider">VK Group</span>
                         <span className="text-[8px] text-[#D4AF37] uppercase tracking-widest font-black">Membership</span>
                       </div>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6 z-10 relative"></div>

                    {/* Main ID / Card Number */}
                    <div className="text-3xl md:text-4xl font-black tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-yellow-300 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10 relative text-center">
                       {idField?.value || '#### ####'}
                    </div>

                    {isAvailable ? (
                       <div className="flex-1 flex items-center justify-center my-4 z-10 relative bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 backdrop-blur-sm shadow-inner">
                          <span className="text-yellow-400 font-extrabold uppercase tracking-widest text-sm animate-pulse text-center leading-relaxed drop-shadow-md">Available for<br/>Purchase</span>
                       </div>
                    ) : (
                      <>
                        {/* Name Row */}
                        <div className="flex justify-center items-center gap-4 z-10 relative mb-5">
                           <div className="flex-1 min-w-0 text-center">
                              <div className="text-[9px] text-[#D4AF37] opacity-80 uppercase tracking-[0.2em] mb-1 font-bold">{nameField?.label || 'Cardholder Name'}</div>
                              <div className="font-extrabold text-xl tracking-widest uppercase whitespace-normal break-words leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{nameField?.value || 'UNKNOWN MEMBER'}</div>
                           </div>
                        </div>

                        {/* Status Badge */}
                        {statusField && (
                          <div className="z-10 relative mb-4 text-center">
                            <span className={`inline-block px-4 py-1.5 text-[10px] font-black rounded-lg uppercase tracking-widest shadow-md ${
                              statusField.value?.toLowerCase().includes('active') || statusField.value?.toLowerCase() === 'yes'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            }`}>
                              {statusField.label}: {statusField.value}
                            </span>
                          </div>
                        )}
                      </>
                    )}

                    {/* Other Fields */}
                    {otherFields.length > 0 && (
                      <div className="mt-auto pt-5 border-t border-[#D4AF37]/20 flex flex-wrap justify-center gap-2.5 z-10 relative">
                        {otherFields.map((f, i) => {
                           // Identify S.no, Serial, Place for marble styling
                           const isMarble = f.label.toLowerCase().includes('s.no') || f.label.toLowerCase().includes('serial') || f.label.toLowerCase().includes('place');
                           
                           return (
                             <div key={i} className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 ${isMarble ? 'bg-white/5 border border-white/10 shadow-inner' : 'bg-black/30 border border-[#D4AF37]/20'} transition-colors`}>
                                <span className={`${isMarble ? 'text-[#e0dcd3]' : 'text-[#cfa453]'} opacity-80 uppercase tracking-[0.15em] text-[9px] font-bold`}>
                                  {f.label.length > 15 ? f.label.slice(0,15)+'...' : f.label}:
                                </span> 
                                <span className={`${isMarble ? 'text-white font-serif italic text-sm tracking-wide drop-shadow-md font-medium' : 'text-[#f5d996] font-medium text-xs font-sans'}`}>
                                  {f.value || '-'}
                                </span>
                             </div>
                           );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-16 border border-gray-200 dark:border-gray-800 text-center shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <Search className="w-12 h-12 mb-4 text-gray-300 dark:text-gray-600" />
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">No members matching "<span className="text-gray-700 dark:text-gray-300 font-bold">{searchTerm}</span>" found in the active registry.</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-gray-500 font-medium items-center gap-2">
            <FileSpreadsheet className="w-4 h-4" /> Displaying real-time records safely fetched via Google Sheets Integration
        </div>
      </div>
    </div>
  );
}
