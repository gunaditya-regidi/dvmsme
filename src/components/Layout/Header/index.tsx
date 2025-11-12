"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useContext, useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from 'next/image';
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import DonationFormContext from "@/app/context/donationContext";
import { Donation } from "@/components/Home/Hero/Donation";
import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      setIsSignInOpen(false);
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) {
      setIsSignUpOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

 const info = useContext(DonationFormContext);

  useEffect(() => {
  },[])

  const donationInfo = useContext(DonationFormContext);
  const authDialog = useContext(AuthDialogContext);



  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${sticky ? "shadow-lg dark:shadow-darkmd bg-white dark:bg-dark" : "shadow-none"}`}
    >
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-violet-800 lg:py-0 py-2">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex items-center justify-between px-4">
          <div className="lg:hidden block">
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center justify-start">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
<div className="flex items-center space-x-4 relative top-[1px]">
  <button
    onClick={() => setNavbarOpen(!navbarOpen)}
    className="block lg:hidden p-2 rounded-lg"
    aria-label="Toggle mobile menu"
  >
    <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
    <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
    <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
  </button>
</div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-white">Menu</h2>
            <button onClick={() => setNavbarOpen(false)} aria-label="Close mobile menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="dark:text-white">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            
          </nav>
        </div>
      </div>
      <div className="dark:bg-dark">
      <div className="px-4 container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) sm:flex lg:justify-between justify-center py-5 hidden">
        <div className="lg:block hidden">
          <Logo />
        </div>
        <div className="flex items-center">
          <div className="flex gap-3 py-2 pr-6 border-r dark:border-dark_border">
            <Image
              src="/images/icons/icon-mail.svg"
              alt="icon"
              width={32}
              height={32}
            />
            <div className="">
              <p className="text-sm font-normal text-muted dark:text-white/60 mb-0">
                Email us at
              </p>
              <Link href="#" className="text-base font-semibold mb-0 hover:text-primary">
                info@digitalvideosmsme.com
              </Link>
            </div>
          </div>
          <div className="flex gap-3 py-2 pl-6">
            <Image
              src="/images/icons/icon-phone.svg"
              alt="icon"
              width={32}
              height={32}
            />
            <div className="">
              <p className="text-sm font-normal text-muted dark:text-white/60 mb-0">
                Call us now
              </p>
              <Link href="#" className="text-base font-semibold mb-0 hover:text-primary">
                0891 3567378
              </Link>
            </div>
          </div>
         {/* <button onClick={() => info?.setIsDonationOpen(true)}  className="text-error text-sm font-semibold border border-error py-4 px-7 rounded-md ml-8 hover:bg-error hover:text-white">
            Donate now
          </button> */}
        </div>
      </div>
      </div>
      {/* Donation Popup */}
      {donationInfo?.isDonationOpen && (
              <div  className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 m-0!">
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-dark">
                <button
                  onClick={() => donationInfo?.setIsDonationOpen(false)}
                  className=" hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8"
                  aria-label="Close Sign In Modal"
                >
                  <Icon icon="ic:round-close" className="text-2xl dark:text-white" />
                </button>
                  <Donation />
                </div>
              </div>
            )}
      {/* Successsful Login Alert */}
       <div className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${authDialog?.isSuccessDialogOpen == true ? "block" : "hidden"}`}>
       <SuccessfullLogin/>
       </div>
      {/* Failed Login Alert */}
       <div className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${authDialog?.isFailedDialogOpen == true ? "block" : "hidden"}`}>
       <FailedLogin/>
       </div>
      {/* User registration Alert */}
       <div className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${authDialog?.isUserRegistered == true ? "block" : "hidden"}`}>
       <UserRegistered/>
       </div>
    </header>
  );
};

export default Header;
