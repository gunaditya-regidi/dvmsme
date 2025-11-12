import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Brand from '@/components/Home/Brand';
import Help from '@/components/Home/Help';
import FutureEvents from '@/components/Home/FutureEvents';
import UrgentDonation from '@/components/Home/UrgentDonation';
import Newsletter from '@/components/Home/NewsLetter';
import Testimonial from '@/components/Home/Testimonial';
import Volunteer from '@/components/SharedComponent/Volunteer';
import Services from '@/components/Home/Services';
export const metadata: Metadata = {
  title: "Digital Videos MSME",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brand />
      <Help />
      <Services />
      {/*<FutureEvents />
      <UrgentDonation />
      <Newsletter />*/}
      <Testimonial />
      <Volunteer />
    </main>
  )
}
