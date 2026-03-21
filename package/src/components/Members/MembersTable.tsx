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
    <div className="min-h-screen bg-gray-50 dark:bg-dark/95 pt-28 pb-24 font-sans selection:bg-blue-500/30">
      {/* Header Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-200 dark:border-gray-800 relative">
          
          <div className="px-6 py-4 bg-gray-50/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">Active Roster &nbsp;<span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 py-1 px-3 rounded-full text-sm">{filteredData.length} records</span></h3>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                LIVE SYNC
            </div>
          </div>

          <div className="overflow-x-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx} className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      {header.replace(/ *\n */g, " ").trim() || `Column ${idx + 1}`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
                {filteredData.length > 0 ? (
                  filteredData.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group">
                      {headers.map((header, colIdx) => {
                        const isMainColumn = colIdx === 1 || colIdx === 3; // Typically Name or ID columns are bolder
                        return (
                          <td key={colIdx} className={`px-6 py-4 text-sm ${isMainColumn ? 'font-bold text-gray-900 dark:text-gray-100' : 'font-medium text-gray-600 dark:text-gray-400'}`}>
                             {row[colIdx] ? row[colIdx].trim() : <span className="text-gray-300 dark:text-gray-700">-</span>}
                          </td>
                        )
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                     <td colSpan={headers.length} className="px-6 py-16 text-center text-gray-500 dark:text-gray-400 italic">
                        <div className="flex flex-col items-center justify-center">
                          <Search className="w-10 h-10 mb-3 text-gray-300 dark:text-gray-600" />
                          No members matching "<span className="font-semibold text-gray-700 dark:text-gray-300">{searchTerm}</span>" found in the active registry.
                        </div>
                     </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-center text-xs text-gray-400 dark:text-gray-500 font-medium items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-gray-400" /> Displaying real-time records safely fetched via Google Sheets Integration
        </div>
      </div>
    </div>
  );
}
