import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Headphones } from "lucide-react";

const EnquiryPage = () => {
  return (
    <>
      <section className="dark:bg-dark py-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-midnight_text dark:text-white mb-4">
            Want to utilize our Digital IT to Media services?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
               Reach out to us for expert solutions.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold text-sm">
                ISO Certified
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full font-semibold text-sm">
                MSME Registered
              </span>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl mb-16">
            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-2">Phone Numbers</p>
                  <div className="space-y-2">
                    <a href="tel:+919848418582" className="text-xl font-semibold hover:text-gray-200 transition block">
                      +91 9848418582
                    </a>
                    <a href="tel:+919290480866" className="text-xl font-semibold hover:text-gray-200 transition block">
                      +91 9290480866
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-2">Email Addresses</p>
                  <div className="space-y-2">
                    <a href="mailto:info@digitalvideosmsme.com" className="text-xl font-semibold hover:text-gray-200 transition block break-all">
                      info@digitalvideosmsme.com
                    </a>
                    <a href="mailto:admin@digitalvideosmsme.com" className="text-xl font-semibold hover:text-gray-200 transition block break-all">
                      admin@digitalvideosmsme.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
              Get In Touch
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Quick Response */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                  Quick Response Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We respond to all inquiries within 24 hours. Get fast answers to your questions about our digital services.
                </p>
              </div>

              {/* Expert Consultation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                  Expert Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Talk to our experienced team about your digital IT and media requirements. We provide tailored solutions.
                </p>
              </div>

              {/* Professional Support */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-4">
                  Professional Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our dedicated support team is ready to assist you with comprehensive digital video and IT media services.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Digital IT to Media Services
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Digital Videos is an <strong>ISO certified, MSME registered organization</strong> specializing in providing 
              comprehensive digital IT and media solutions. From video production to digital marketing, web development 
              to content creation, we help businesses transform their digital presence with quality-assured services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Contact us today to discuss how we can elevate your business with cutting-edge digital solutions 
              tailored to your specific needs. Experience the difference of working with a certified professional organization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryPage;