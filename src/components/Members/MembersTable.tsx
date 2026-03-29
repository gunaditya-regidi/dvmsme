'use client';

import React, { useState } from 'react';
import { Search, Users, FileSpreadsheet, Scissors } from 'lucide-react';

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
        <div className="overflow-x-hidden pb-8 flex justify-center">
          <div className="flex flex-col gap-6 w-full min-w-[340px] max-w-[1000px]">
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
                           <label className="text-white text-[8px] md:text-xl font-black mr-1 md:mr-2 drop-shadow-md">Name:</label>
                           <div className="bg-white text-black font-black px-1.5 md:px-4 py-0.5 md:py-1.5 rounded-sm text-[6px] md:text-sm lg:text-lg truncate uppercase shadow-inner min-w-[60px] md:min-w-[160px] max-w-[120px] md:max-w-[200px] text-center flex-1">
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
