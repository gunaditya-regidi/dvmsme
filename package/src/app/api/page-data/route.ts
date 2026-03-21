import { NextResponse } from 'next/server';
import { brandList } from '../brandData';

export async function GET() {
  // Using the brandList from the separate data file
  return NextResponse.json({ brandList });
}