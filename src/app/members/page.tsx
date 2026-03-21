import React from 'react';
import MembersTable from '../../components/Members/MembersTable';

export const revalidate = 0; // Disable cache so the CSV is always fresh

export const metadata = {
  title: 'Membership Directory | RAB INFO & RK GROUP',
  description: 'Real-time VIP Membership directory.',
};

export default async function MembersPage() {
  const url = "https://docs.google.com/spreadsheets/d/14nbQR_uyB99sGpB3D3Pt42CRJVf3laTibFKBI7Z0zpM/export?format=csv";
  
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch sheet CSV");
    
    const csvText = await res.text();
    
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentCell = '';
    let inQuotes = false;
    
    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      if (char === '"' && csvText[i+1] === '"') {
        currentCell += '"';
        i++;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        currentRow.push(currentCell.trim());
        currentCell = '';
      } else if (char === '\n' && !inQuotes) {
        currentRow.push(currentCell.trim());
        // Only push row if it contains some data
        if (currentRow.some(c => c.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
      } else if (char !== '\r') {
        currentCell += char;
      }
    }
    
    currentRow.push(currentCell.trim());
    if (currentRow.some(c => c.length > 0)) {
      rows.push(currentRow);
    }
    
    // Filter out completely empty trailing columns from the spreadsheet
    const cleanRows = rows.map(r => r.filter((_, idx) => {
       // Keep columns that have at least some data in the header row or look important
       return true; 
    }));

    // In the provided sheet, headers are likely on row index 2
    // We only want non-empty header columns
    const rawHeaders = cleanRows.length > 2 ? cleanRows[2] : [];
    
    // Find the last valid column index to avoid endless trailing commas
    let lastValidIdx = rawHeaders.length - 1;
    while(lastValidIdx >= 0 && !rawHeaders[lastValidIdx]) {
      lastValidIdx--;
    }
    
    const headers = rawHeaders.slice(0, lastValidIdx + 1);
    
    // Data starts at row index 3
    const data = cleanRows.slice(3).map(r => r.slice(0, lastValidIdx + 1));
    // Filter out rows that have no S.No (first column empty)
    const validData = data.filter(r => r[0] && r[0].length > 0);

    return <MembersTable headers={headers} data={validData} />;

  } catch(e: any) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-red-200">
          <h2 className="text-xl font-bold text-red-600 mb-2">Notice</h2>
          <p className="text-gray-700 dark:text-gray-300">Unable to load the membership directory. The Google Sheet may be set to private or an error occurred.</p>
        </div>
      </div>
    );
  }
}
