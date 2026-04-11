import Papa from 'papaparse';

export interface Project {
  id: string;
  name: string;
  price: string;
  address: string;
  status: string;
  type: string;
  areaSize: string;
  possessionDate: string;
  description: string;
  amenities: string[];
  mainImage: string;
  galleryImages: string[];
}

// Convert a Google Drive share link into a direct image rendering link
export function getDirectDriveLink(url: string | undefined): string {
  if (!url) return '';
  const match = url.match(/id=([^&]+)/);
  if (match && match[1]) {
    return `https://drive.usercontent.google.com/download?id=${match[1]}&export=view`;
  }
  return url; // fallback
}

export async function fetchProjects(): Promise<Project[]> {
  const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/12vfICSdMJJHHPRK0SM1btAx0vUxrZ4_26OuvnCinSGM/export?format=csv';

  try {
    const res = await fetch(SHEET_CSV_URL, { cache: 'no-store' });
    const csvContent = await res.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const rawData = results.data as any[];
          
          const projects: Project[] = rawData.map((row, index) => {
            // Helper to safely extract Drive links from a comma-separated string
            const getImages = (field: string) => {
              if (!field) return [];
              return field.split(',')
                .map(link => link.trim())
                .filter(link => link.length > 0)
                .map(link => getDirectDriveLink(link));
            };

            const name = row['Project Name'] || `Project ${index + 1}`;
            // Generate a URL-safe ID from the name (e.g., "Sandal Valley" -> "sandal-valley")
            const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            const amenitiesRaw = row['Amenities (Comma Separated)'];
            const amenities = amenitiesRaw ? amenitiesRaw.split(',').map((a: string) => a.trim()) : [];

            // Convert string fields
            return {
              id: id || `proj_${index}`,
              name: name,
              price: row['Price'] || 'Contact for Price',
              address: row['Location Address (eg. near mvp, vskp)'] || 'Location not specified',
              status: row['Status'] || 'Upcoming',
              type: row['Project Type'] || 'Real Estate',
              areaSize: row['Area Size (Sq.ft or Sq.yd)'] || 'Various Sizes',
              possessionDate: row['Possession Date'] || 'TBD',
              description: row['Short Description'] || 'A premium infrastructure project by RAB Group.',
              amenities: amenities,
              mainImage: getImages(row['Main Cover Image'])[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
              galleryImages: getImages(row['Gallery Images'])
            };
          });

          resolve(projects);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Failed to fetch projects from Google Sheet", error);
    return [];
  }
}
