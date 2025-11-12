"use client"

import DonationFormContext from "@/app/context/donationContext";
import { useContext } from "react";

import { useRouter } from "next/navigation";
const Volunteer = () => {
  
  const router = useRouter();
    const donationInfo = useContext(DonationFormContext);
    return (
        // ...existing code...
<section className="relative lg:py-15 py-16 bg-[url('/images/background/office.gif')] bg-no-repeat bg-cover overflow-hidden">
  {/* dim background slightly so foreground card is readable */}
  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
  <div className="relative z-10 container mx-auto lg:max-w-(--breakpoint-xl) px-4">
    <div className="text-center">
      {/* translucent card */}
      <div className="mx-auto max-w-2xl bg-red-800/50 dark:bg-red-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
         <h2 className="text-3xl font-medium text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base text-white/90 lg:max-w-3xl mx-auto mb-6">
          Partner with us to bring your digital vision to life. From custom software solutions to impactful marketing campaigns, we deliver results that drive growth and innovation.</p>
        <div className="flex justify-center">
          <button
             onClick={() => router.push("/services")}
            className="text-white rounded-md bg-gradient-to-r from-red-500/90 to-red-600/90 px-7 py-3 text-sm font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    )
};

export default Volunteer;