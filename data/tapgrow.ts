import {
  BadgeCheck,
  Building2,
  CreditCard,
  Globe2,
  Heart,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Watch
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  details: string[];
  whatsappMessage: string;
};

export type ProductPack = {
  collection:
    | "Identity Collection"
    | "Creator Collection"
    | "Growth Collection"
    | "Business Collection"
    | "Gift Collection"
    | "Executive Collection"
    | "Elite Collection"
    | "Founder Collection"
    | "Ultimate Packs";
  name: string;
  products: string;
  originalPrice: string;
  offerPrice: number;
  whatsappMessage: string;
};

export type SolutionPackage = {
  name: string;
  price: number;
  subtitle: string;
  includes: string[];
  cta: string;
  whatsappMessage: string;
};

const whatsappMessageFor = (itemName: string) =>
  `Hi TapGrow 👋\n\nI am interested in ${itemName}.\n\nPlease guide me further.`;

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const products: Product[] = [
  {
    slug: "tapcard",
    name: "TapCard",
    price: 599,
    image: "/images/products/tap-card.png",
    description: "Premium NFC smart card for instant identity, contact, portfolio and WhatsApp sharing.",
    details: ["Custom digital profile", "QR backup included", "Contact save ready"],
    whatsappMessage: whatsappMessageFor("TapCard")
  },
  {
    slug: "tapstand",
    name: "TapStand",
    price: 1299,
    image: "/images/products/tap-stand.png",
    description: "Countertop NFC stand for stores, clinics, desks and business enquiry points.",
    details: ["Perfect for counters", "Works with NFC and QR", "Built for walk-in leads"],
    whatsappMessage: whatsappMessageFor("TapStand")
  },
  {
    slug: "tapreview",
    name: "TapReview",
    price: 999,
    image: "/images/products/tap-review.png",
    description: "Simple tap-based review collection product for Google reviews and customer feedback.",
    details: ["Review-focused flow", "Ideal for local businesses", "Easy customer action"],
    whatsappMessage: whatsappMessageFor("TapReview")
  },
  {
    slug: "tapwatch",
    name: "TapWatch",
    price: 1999,
    image: "/images/products/tap-watch.png",
    description: "Wearable NFC identity product for founders, creators, professionals and events.",
    details: ["Always with you", "Premium wearable feel", "Great for networking"],
    whatsappMessage: whatsappMessageFor("TapWatch")
  },
  {
    slug: "tapbracelet",
    name: "TapBracelet",
    price: 799,
    image: "/images/products/tap-bracelet.png",
    description: "Clean NFC bracelet for students, creators, teams and everyday profile sharing.",
    details: ["Lightweight wearable", "Easy tap sharing", "Useful for events"],
    whatsappMessage: whatsappMessageFor("TapBracelet")
  },
  {
    slug: "tappendant",
    name: "TapPendant",
    price: 1199,
    image: "/images/products/tap-pendant.png",
    description: "A minimal NFC pendant that turns a simple accessory into a smart digital identity.",
    details: ["Personal identity accessory", "Good for gifting", "Memorable first impression"],
    whatsappMessage: whatsappMessageFor("TapPendant")
  }
];

export const howItWorks = [
  {
    step: "01",
    title: "Choose a Product",
    description: "Pick TapCard, TapStand, TapReview, TapWatch, TapBracelet or TapPendant."
  },
  {
    step: "02",
    title: "Click Buy Now",
    description: "The button opens WhatsApp with the correct product already written in the message."
  },
  {
    step: "03",
    title: "Share Your Details",
    description: "Send your name, contact information, links, photos and profile preferences."
  },
  {
    step: "04",
    title: "Tap & Grow",
    description: "We prepare your product and profile so you can share everything with one tap."
  }
];

export const solutionPackages: SolutionPackage[] = [
  {
    name: "Business Starter Kit",
    price: 7999,
    subtitle: "Build your digital business presence.",
    includes: [
      "TapCard",
      "Digital Business Profile",
      "WhatsApp Integration",
      "Contact Save Button",
      "Google Business Profile Setup",
      "Google Maps Presence",
      "Business Description Writing",
      "Service Listing",
      "Business Hours Setup",
      "Basic Review Setup"
    ],
    cta: "Get Starter Kit",
    whatsappMessage:
      "Hi TapGrow 👋\n\nI am interested in the Business Starter Kit ₹7,999.\n\nPlease guide me further."
  },
  {
    name: "Business Pro Kit",
    price: 11999,
    subtitle: "Get discovered, trusted, and reviewed.",
    includes: [
      "Everything in Starter",
      "TapReview",
      "Google Review Collection Setup",
      "NFC + QR Review System",
      "Review Growth Strategy",
      "Premium Digital Profile Design",
      "Google Business Optimization",
      "Direction Button",
      "Call & WhatsApp Buttons"
    ],
    cta: "Get Pro Kit",
    whatsappMessage:
      "Hi TapGrow 👋\n\nI am interested in the Business Pro Kit ₹11,999.\n\nPlease guide me further."
  },
  {
    name: "Business Elite Kit",
    price: 14999,
    subtitle: "Turn customer conversations into leads.",
    includes: [
      "Everything in Pro",
      "TapStand",
      "Lead Collection Setup",
      "WhatsApp Business Setup Guidance",
      "AI Chatbot Setup Guidance",
      "FAQ Automation Planning",
      "Customer Inquiry Flow",
      "Google Form / Lead Form Integration",
      "Basic Invoice Workflow Planning"
    ],
    cta: "Get Elite Kit",
    whatsappMessage:
      "Hi TapGrow 👋\n\nI am interested in the Business Elite Kit ₹14,999.\n\nPlease guide me further."
  }
];

export const googleBusinessFeatures = [
  "Profile Creation",
  "Business Verification Guidance",
  "Category Selection",
  "Business Description",
  "Contact Details",
  "Service Listing",
  "Business Hours",
  "Google Maps Setup",
  "Website / WhatsApp Linking",
  "Review Collection Setup"
];

export const packs: ProductPack[] = [
  {
    collection: "Identity Collection",
    name: "Student Pack",
    products: "TapCard + TapBracelet",
    originalPrice: "₹599 + ₹799 = ₹1398",
    offerPrice: 1299,
    whatsappMessage: whatsappMessageFor("Student Pack")
  },
  {
    collection: "Identity Collection",
    name: "Professional Pack",
    products: "TapCard + TapWatch",
    originalPrice: "₹599 + ₹1999 = ₹2598",
    offerPrice: 2399,
    whatsappMessage: whatsappMessageFor("Professional Pack")
  },
  {
    collection: "Identity Collection",
    name: "Signature Pack",
    products: "TapCard + TapPendant",
    originalPrice: "₹599 + ₹1199 = ₹1798",
    offerPrice: 1699,
    whatsappMessage: whatsappMessageFor("Signature Pack")
  },
  {
    collection: "Identity Collection",
    name: "Premium Identity Pack",
    products: "TapCard + TapWatch + TapBracelet",
    originalPrice: "₹599 + ₹1999 + ₹799 = ₹3397",
    offerPrice: 2999,
    whatsappMessage: whatsappMessageFor("Premium Identity Pack")
  },
  {
    collection: "Creator Collection",
    name: "Creator Pack",
    products: "TapCard + TapWatch + Premium Creator Profile",
    originalPrice: "For creators, influencers, freelancers & builders",
    offerPrice: 2999,
    whatsappMessage: whatsappMessageFor("Creator Pack")
  },
  {
    collection: "Business Collection",
    name: "Review Starter",
    products: "TapCard + TapReview",
    originalPrice: "₹599 + ₹999 = ₹1598",
    offerPrice: 1499,
    whatsappMessage: whatsappMessageFor("Review Starter")
  },
  {
    collection: "Business Collection",
    name: "Business Presence Pack",
    products: "TapCard + TapStand",
    originalPrice: "₹599 + ₹1299 = ₹1898",
    offerPrice: 1799,
    whatsappMessage: whatsappMessageFor("Business Presence Pack")
  },
  {
    collection: "Business Collection",
    name: "Business Growth Pack",
    products: "TapStand + TapReview",
    originalPrice: "₹1299 + ₹999 = ₹2298",
    offerPrice: 2099,
    whatsappMessage: whatsappMessageFor("Business Growth Pack")
  },
  {
    collection: "Business Collection",
    name: "Business Pro Pack",
    products: "TapCard + TapStand + TapReview",
    originalPrice: "₹599 + ₹1299 + ₹999 = ₹2897",
    offerPrice: 2599,
    whatsappMessage: whatsappMessageFor("Business Pro Pack")
  },
  {
    collection: "Growth Collection",
    name: "Growth Collection",
    products: "TapCard + TapStand + TapReview + Google Business Setup Guide",
    originalPrice: "For businesses wanting visibility and reviews",
    offerPrice: 3999,
    whatsappMessage: whatsappMessageFor("Growth Collection")
  },
  {
    collection: "Gift Collection",
    name: "Couple Pack",
    products: "2 x TapPendant",
    originalPrice: "₹1199 x 2 = ₹2398",
    offerPrice: 2199,
    whatsappMessage: whatsappMessageFor("Couple Pack")
  },
  {
    collection: "Gift Collection",
    name: "Anniversary Pack",
    products: "TapPendant + TapBracelet",
    originalPrice: "₹1199 + ₹799 = ₹1998",
    offerPrice: 1799,
    whatsappMessage: whatsappMessageFor("Anniversary Pack")
  },
  {
    collection: "Gift Collection",
    name: "Premium Anniversary Pack",
    products: "2 x TapPendant + 2 x TapBracelet",
    originalPrice: "₹2398 + ₹1598 = ₹3996",
    offerPrice: 3499,
    whatsappMessage: whatsappMessageFor("Premium Anniversary Pack")
  },
  {
    collection: "Executive Collection",
    name: "Executive Collection",
    products: "TapWatch + TapStand",
    originalPrice: "For consultants, advisors & executives",
    offerPrice: 3499,
    whatsappMessage: whatsappMessageFor("Executive Collection")
  },
  {
    collection: "Elite Collection",
    name: "Elite Collection",
    products: "TapCard + TapWatch + TapStand + TapReview",
    originalPrice: "Complete TapGrow ecosystem",
    offerPrice: 6999,
    whatsappMessage: whatsappMessageFor("Elite Collection")
  },
  {
    collection: "Founder Collection",
    name: "Founder Collection",
    products: "TapCard + TapWatch + TapReview",
    originalPrice: "For founders, builders & startup operators",
    offerPrice: 3199,
    whatsappMessage: whatsappMessageFor("Founder Collection")
  },
  {
    collection: "Ultimate Packs",
    name: "Executive Pack",
    products: "TapCard + TapWatch + TapStand",
    originalPrice: "₹599 + ₹1999 + ₹1299 = ₹3897",
    offerPrice: 3499,
    whatsappMessage: whatsappMessageFor("Executive Pack")
  },
  {
    collection: "Ultimate Packs",
    name: "Ultimate Business Pack",
    products: "TapCard + TapStand + TapReview + TapWatch",
    originalPrice: "₹599 + ₹1299 + ₹999 + ₹1999 = ₹4896",
    offerPrice: 4299,
    whatsappMessage: whatsappMessageFor("Ultimate Business Pack")
  }
];

export const proofPoints = [
  { label: "No app needed", icon: Smartphone },
  { label: "NFC + QR backup", icon: BadgeCheck },
  { label: "WhatsApp order flow", icon: MessageCircle },
  { label: "Custom profile setup", icon: Sparkles }
];

export const audiences = [
  { title: "Students", text: "Share resume, portfolio, projects and social links.", icon: CreditCard },
  { title: "Professionals", text: "Make meetings memorable with one-tap contact sharing.", icon: Watch },
  { title: "Businesses", text: "Collect leads, reviews and enquiries from counters or events.", icon: Building2 },
  { title: "Gifting", text: "Create personal identity gifts for couples and special occasions.", icon: Heart }
];

export const solutionHighlights = [
  { label: "Google Business setup", icon: Globe2 },
  { label: "Maps visibility", icon: MapPin },
  { label: "Review growth systems", icon: Star },
  { label: "Digital profile strategy", icon: Sparkles }
];

export const reviews = [
  {
    quote: "TapGrow made my profile sharing feel premium and simple. People remember it.",
    name: "Student User"
  },
  {
    quote: "The review product is easy for walk-in customers. It reduced friction immediately.",
    name: "Local Business"
  },
  {
    quote: "WhatsApp-based ordering is perfect. I could ask questions before choosing the right pack.",
    name: "Business Owner"
  }
];

export const trustItems = [
  { icon: ShieldCheck, label: "Trusted setup support" },
  { icon: Star, label: "Premium first impression" },
  { icon: MessageCircle, label: "Direct WhatsApp guidance" }
];
