import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="">
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white/50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white text-[40px] leading-tight font-bold">Visakhapatnam<br /> Admin office</h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-10 text-white/50">D.No: 1-56-6, MIG-9, Sector-1, MVP Colony, Beside Ralla Bella School, Opposite SBI Bank, Visakhapatnam, Andhra Pradesh</p>
              </div>
              <div className="col-span-3">
                <Link href="mailto:info@digitalvideosmsme.com" className="sm:text-2xl text-xl text-white font-medium underline">info@digitalvideosmsme.com</Link>
                <Link href="tel:0891 3567378" className="sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-white w-fit"><span className="text-white/40">Call</span>0891 3567378</Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
