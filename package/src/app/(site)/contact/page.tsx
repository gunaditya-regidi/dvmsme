import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Digital Videos MSME",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Contact Us"
      />
      
      <ContactForm />
      <Location />
      <ContactInfo />
      <Volunteer />
    </>
  );
};

export default page;
