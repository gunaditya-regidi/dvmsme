import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
// Removed ThemeProvider import
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import { Metadata } from "next";
const montserrat = Montserrat({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: {
    default: "Digital Videos MSME",
    template: "%s | Digital Videos MSME"
  },
  description: "Digital Videos MSME - Empowering businesses through digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <NextTopLoader color="#FF4D7E" />
        <DonationProvider>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </DonationProvider>
      </body>
    </html>
  );
}