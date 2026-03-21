import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if the Google Script URL is configured
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.warn("GOOGLE_SCRIPT_URL is not set. Data: ", data);
      // For development, we'll return success even if unconfigured 
      return NextResponse.json({ success: true, message: 'Simulated success (URL not configured)' });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
    }
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
