// ...existing code...
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { footerLinks } from "@/app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-gray-800 dark:bg-dark text-white">
<div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-10 ">
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <Logo />
            <div className="mt-6">
              <p className="text-sm font-light text-white mb-6">
              Our platform brings together technology, creativity, and purpose — empowering individuals, institutions, and industries to grow together in the digital era.
              </p>
              <p className="text-sm font-light text-white mb-0">
              We are a forward-thinking organization dedicated to innovation, collaboration, and community impact.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 mt-6">
                <Link
                  href="https://wa.me/919290480866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <Icon
                    icon="mdi:whatsapp"
                    className="text-xl"
                  />
                  <span className="text-sm font-medium">Connect on WhatsApp</span>
                </Link>
                <Link
                  href="https://tv2rism.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-[#800020] hover:from-red-700 hover:to-[#700018] text-white px-4 py-2 rounded-md transition-all duration-200"
                >
                  <Icon
                    icon="mdi:play-circle"
                    className="text-xl"
                  />
                  <span className="text-sm font-medium">Watch TV2RISM OTT now!</span>
                </Link>
              </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <div className="lg:pl-10">
              <div className="flex items-start mb-8 gap-4">
                <Image
                  src="/images/icons/icon-pin.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <h5 className="text-sm text-white mb-4">
                    Our Admin Office
                  </h5>
                  <p className="text-sm text-white">
                    D.No: 1-56-6, MIG-9, Sector-1, MVP Colony, Beside Ralla Bella School, Opposite SBI Bank, Visakhapatnam, Andhra Pradesh
                  </p>
                </div>
                
              </div>
              
              <div className="flex items-center mb-8 gap-4">
                <Image
                  src="/images/icons/icon-phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link
                    href="#"
                    className="text-sm text-white mb-0 hover:text-red-600"
                  >
                    0891 3567378
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link
                    href="#"
                    className="text-sm text-white mb-0 hover:text-red-600"
                  >
                    info@digitalvideosmsme.com
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base text-white mb-4">
              Services
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href="#"
                    className="text-sm relative text-white hover:text-red-600 dark:hover:text-red-600 hover:before:border-red-600 before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base text-white mb-4">
              Useful Links
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(5, 10).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={item.href}
                    className="text-sm relative text-white hover:text-red-600 dark:hover:text-red-600 hover:before:border-red-600 before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border dark:border-dark_border">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex items-center justify-between py-6 lg:flex-nowrap flex-wrap lg:gap-0 gap-4">
          <p className="text-sm text-white">
            © All Rights Reserved by{" "}
            <Link
              href="https://digitalvideosmsme.com/"
              className="hover:text-red-600"
            >
              Digital Videos MSME
            </Link>
            .
          </p>
          <div className="flex items-center gap-6">
           
            <Link href="https://www.instagram.com/digitalvideos.ig">
              <Icon
                icon="mdi:instagram"
                className="text-xl text-white hover:text-red-600 cursor-pointer"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/digitalvideosmsme">
              <Icon
                icon="ri:linkedin-fill"
                className="text-xl text-white hover:text-red-600 cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/DigitalVideos_x">
              <Icon
                icon="line-md:twitter-x-alt"
                className="text-base text-white hover:text-red-600 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...