import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    submenu: [
      { label: "Services list", href: "/services" },
      { label: "Service details", href: "/services/software-solutions" },
    ],
  },
 /* {
    label: "Activities",
    href: "/events",
    submenu: [
      { label: "Recent Activities list", href: "/events" },
      { label: "Activity details", href: "/events/event-1" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    
  }, */
  { label: "Contact", href: "/contact" },
];
