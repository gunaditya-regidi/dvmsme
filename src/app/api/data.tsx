import { Url } from "next/dist/shared/lib/router/router";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
 // { name: "Portfolio", href: "#portfolio" },
 // { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export const helpdata: { icon: string; title: string; text: string }[] = [
  {
    icon: "/images/help/sftd.svg",
    title: "Software Development & IT Services",
    text: "Custom software development;Web & Android App Development;IT solutions tailored to your business needs; We specialize in digital transformation, process automation, and enterprise solutions with deep domain expertise in Software Engineering and analytics.",
  },
  {
    icon: "/images/help/dvmarlo.svg",
    title: "Commercial Ad Production & Digital Marketing",
    text: "Professional commercial advertising;Promotional Video production;From concept to final cut; We create compelling Advertisements, Product showcases; Digital Marketing content that drives engagement and delivers results.",
  },
  {
    icon: "/images/help/tracon.svg",
    title: "Consulting & Academic Collaboration",
    text: "Expert consultancy in artificial intelligence, data analytics, and strategic transformation; Through our MOU with Acharya Nagarjuna University We Train students in Resposible AI and Sustainable Tourism; We offer specialized training programs, research collaboration, and academic industry partnerships.",
  },
];


export interface ServiceType {
    title: string;
    text: string;
    image: string;
    slug: string;
    raised: string;
    goal: string;
    clc:string;
    cln:string;
}

export const ServicesData: ServiceType[]=[
  {
    image: "/images/services/service-1.jpg",
    title: "Custom Software Solutions",
    slug: "software-solutions",
    text: "Tailored software solutions for your specific business needs. College management systems, billing software, employee management platforms, and more - built to streamline your operations and boost productivity.",
    raised: "We design and develop industry-ready custom software solutions tailored to your unique business requirements. Our expertise spans across School Management Systems, Billing & Invoicing Software, Retail Management, Hospital Management Systems, Finance & Accounting Software, and Employee Management Platforms.",
    goal: "25+ Years of Experience , 50+ Projects Delivered , Trusted by 35+ Private Organizations , 24/7 Support Team , Agile Development Process , 95% Client Satisfaction",
    clc:"The Geotagging service they provided is good. Best investment we made!",
    cln:"INS Kalinga - Geotagging Service",
  },
  {
    image: "/images/services/service-2.jpg",
    title: "Web & Android App Design",
    slug: "webappdesign",
    text: "Custom web applications and Android mobile apps tailored to your business needs. User-friendly interfaces, robust functionality, and seamless performance across all devices.",
    raised: "From responsive websites to feature-rich mobile applications, we create digital experiences that engage users and drive business growth. Built with modern frameworks like React, Angular, Flutter, and native Android technologies.",
    goal: "10+ Years in App Development , Cross-Platform Expertise , Play Store Optimization , Ongoing Maintenance Support , User-Centric Design Approach",
    clc:"Our Website has revolutionized how we do business. The interface is intuitive and our Client Approach rate have increased by 60% since launch!",
    cln:"AVL Narasimham -Ferro Alloys Consultant",
  },
  {
    image: "/images/services/service-3.jpg",
    title: "Commercial Ad Design & Production",
    slug: "ADProduction",
    text: "High-impact commercial advertisements and promotional content. From concept to final delivery, we create compelling visual stories that drive results.",
    raised: "Professional commercial video production that captures attention and drives engagement. From TV commercials to social media ads, product demos to brand stories - we bring your vision to life with cinematic quality.",
    goal: "20+ Years in Production , 300+ Commercials Produced , 8 Times State Level Award-Winning Creative Team , 4K & HD Quality , Quick Turnaround Time , Complete Post-Production Services",
    clc:"The commercial ad they produced exceeded our expectations. The storytelling was powerful and we saw immediate impact on our brand recognition.",
    cln:"KVK, Daspalla Hotels",
  },
  {
    image: "/images/services/service-4.jpg",
    title: "Industry Certified Courses & Training",
    slug: "Industry-Training",
    text: "Professional training programs with industry-recognized certifications. Partnered with ANU University, we offer courses in AI, data science, software development, and digital technologies.",
    raised: "Upskill your team or advance your career with our industry-certified training programs. In partnership with ANU University, we offer comprehensive courses in cutting-edge technologies taught by industry experts with real-world experience.",
    goal: "MOU with ANU University , 6000+ Students Trained , Industry Expert Trainers , Hands-on Projects , Job Placement Assistance , 100% Course Completion Rate",
    clc:"The AI & Data Science course was incredibly practical. The trainers have real industry experience and the certification helped me Prepare for my dream job!",
    cln:"Kiran, Gitam Student",
  },
  {
    image: "/images/services/service-6.jpg",
    title: "Digital Marketing & SEO",
    slug: "DM-seo",
    text: "Strategic digital marketing services to boost your online presence. SEO, social media management, content marketing, and data-driven campaigns that deliver measurable results.",
    raised: "Dominate search rankings and amplify your online presence with our data-driven digital marketing strategies. From SEO optimization to social media campaigns, we create comprehensive marketing solutions that generate leads and drive conversions.",
    goal: "8+ Years Marketing Expertise , 300+ Successful Campaigns , Google Certified Team , Proven ROI Growth , Social Media Management , Content Strategy  Analytics & Reporting",
    clc:"Our website traffic increased in just 3 months! Their SEO strategy and content marketing approach delivered results beyond our expectations.",
    cln:"Aguadhara - Water Purifier Company ",
  },
  {
    image: "/images/services/service-5.jpg",
    title: "AI & Machine Learning Solutions",
    slug: "data-analytics",
    text: "Custom AI and machine learning applications for predictive analytics, automation, and intelligent decision-making. From model development to deployment, we deliver AI that works.",
    raised: "Harness the power of artificial intelligence and machine learning to transform your business operations. We develop custom AI solutions for predictive analytics, process automation, natural language processing, and computer vision applications.",
    goal: "Advanced AI Experts, TensorFlow & PyTorch Expertise , 95%+ Model Accuracy , Cloud AI Integration , Continuous Model Improvement , Ethical AI Practices",
    clc:"Their predictive analytics model helped us reduce operational costs by 35%. The AI solution was tailored perfectly to our Marketing Approoach.",
    cln:"Dr.M. Madava Sarma, Founder & Director - Saptarushi Veda Patasala",
  },
  {
    image: "/images/services/service-7.jpg",
    title: "IT Support & Maintenance",
    slug: "IT-support",
    text: "Comprehensive IT support and software maintenance services. Regular updates, bug fixes, technical assistance, and system optimization to keep your digital assets running smoothly.",
    raised: "Keep your systems running at peak performance with our comprehensive IT support and maintenance services. From troubleshooting to regular updates, security patches to performance optimization - we ensure your technology infrastructure never sleeps.",
    goal: "24/7 Technical Support , 99.9% Uptime Guarantee , Remote & On-Site Support , Proactive Monitoring , Regular Security Updates , <2 Hour Response Time , Dedicated Support Team",
    clc:"Their 24/7 support team is incredibly responsive. Whenever we face any technical issue, they resolve it within hours. True peace of mind!",
    cln:"Sealion Diving Services, Vizag",
  },
];

export const Eventdata: {
  image: string;
  title: string;
  text: string;
  date: string;
  location: string;
  type: string;
  entrants: string;
  duration: string;
  category: string;
  detail: string;
  slug: string;
}[] = [
  {
    image: "/images/event/event-1.jpg",
    title: "You should have eagle’s eye on new trends and techonogies",
    slug: "event-1",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
  {
    image: "/images/event/event-2.jpg",
    title: "New Seminar on Newest Food Recipe from World’s Best",
    slug: "event-2",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
  {
    image: "/images/event/event-3.jpg",
    title: "Learn from small things to create something bigger.",
    slug: "event-3",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
  {
    image: "/images/event/event-4.jpg",
    title: "Literary Escapade Book Reading and Discussion.",
    slug: "event-4",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
  {
    image: "/images/event/event-5.jpg",
    title: "A Journey Through Time Historical Reenactment Fair.",
    slug: "event-5",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
  {
    image: "/images/event/event-6.jpg",
    title: "Leadership Summit Empowering Tomorrow's Leaders.",
    slug: "event-6",
    text: "Business Park, Opp. Corns Sam Restaurant, New Yoark, US",
    date: "May 10, 2024",
    location: "San Marcos",
    type: "Open",
    entrants: "Unlimited",
    duration: "1655 Days",
    category: "Calendar, Dontaions",
    detail:
      "Donec hendrerit, dui quis ultricies eleifend, ipsum sapien auctor ligula, vitae interdum augue metus nec sem. Pellentesque mollis ex risus, eget dignissim nibh fermentum in. Cras eu ipsum eget ante ullamcorper vehicula. Suspendisse non blandit mi.Mauris eu sapien urna. Fusce eu luctus augue, non vestibulum felis. Fusce sollicitudin porta augue non porta. Vivamus ullamcorper tristique nisi, in mattis elit porta vitae. Curabitur euismod lectus non maximus dictum. Vivamus luctus, eros at posuere",
  },
];

export const footerLinks: { link: string; href: Url }[] = [
  {
    link: "Software Development",
    href:"",
  },
  {
    link: "Website & Mobile App Development",
    href:"",

  },
  {
    link: "Digital Marketing & SEO",
    href:"",
  },
  {
    link: "Courses Trainings and Workshops",
    href:"",
  },
  {
    link: "Commercial Ads Design",
    href:"",
  },
  {
    link: "Home",
    href:"",
  },
  {
    link: "Our Services",
    href:"",
  },
  {
    link: "Recent Activities",
    href:"",
  },
  {
    link: "Pricing",
    href:"",
  },
  {
    link: "Contact Us",
    href:"", 
  },
];

export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
  {
    clientImg: "/images/brands/brand4.avif",
    clientName: "Varun Health Centers",
    review:
      "Best Media and IT Company in Visakhapatnam with wide variety of services in single stop.",
    post: "Varun Health Centers",
  },
  {
    clientImg: "/images/brands/brand27.jpg",
    clientName: "Dr. Patnaik Narahyan Murthy",
    review:
      " Our Advanced Scientific Vastu Training programs to Students with automated workflows and Android Application designed very well by Digital Videos, I Recommend their services to everyone",
    post: "Founder & Director, AstroCare72",
  },
  {
    clientImg: "/images/brands/brand22.jpg",
    clientName: "P.Prakash",
    review:
      " DV team has great capability, their approach and Delivering of projects really is a awesome journey, we definetly benefited from their work as they are 100% efficient and supportive team. ",
    post: "Director,IRPWA",
  },
  {
    clientImg: "/images/brands/brand31.jpg",
    clientName: "Deepika",
    review:
      " Digital Videos Team is very supportive and provided us with fully funtioning team for our media services at visakhapatnam, our hyderabad team collaborated very actively with their approach.",
    post: "Founder & Director, V11 Media",
  },
];
