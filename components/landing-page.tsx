"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X
} from "lucide-react";
import { useState } from "react";
import {
  audiences,
  googleBusinessFeatures,
  howItWorks,
  navLinks,
  packs,
  products,
  proofPoints,
  reviews,
  solutionHighlights,
  solutionPackages,
  trustItems,
  type Product,
  type SolutionPackage
} from "@/data/tapgrow";
import { createWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({
  children,
  className = "",
  delay = 0,
  id
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  title,
  body,
  align = "center",
  inverted = false
}: {
  title: string;
  body?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <Reveal className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${inverted ? "text-white/70" : "text-slate-600"}`}>
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}

function BuyButton({
  message,
  className = ""
}: {
  message: string;
  className?: string;
}) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(16,185,129,0.28)] transition hover:-translate-y-0.5 hover:bg-emerald/90 ${className}`}
    >
      Buy Now
      <MessageCircle className="h-4 w-4" />
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Reveal
      id={product.slug}
      className="group rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-1 pb-1">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
          <p className="rounded-full bg-navy px-3 py-1 text-sm font-semibold text-white">
            ₹{product.price}
          </p>
        </div>
        <p className="min-h-[72px] text-sm leading-6 text-slate-600">{product.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-slate-700">
          {product.details.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-emerald" />
              {detail}
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <BuyButton message={product.whatsappMessage} />
          <a
            href={`#${product.slug}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-slate-50"
          >
            View Details
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function SolutionCard({
  solution,
  featured = false
}: {
  solution: SolutionPackage;
  featured?: boolean;
}) {
  return (
    <Reveal
      className={`relative rounded-[30px] border p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] ${
        featured
          ? "border-emerald bg-navy text-white"
          : "border-slate-200 bg-white text-navy"
      }`}
    >
      {featured ? (
        <p className="absolute right-5 top-5 rounded-full bg-emerald px-3 py-1 text-xs font-semibold text-white">
          Popular
        </p>
      ) : null}
      <div className="pr-20">
        <h3 className={`text-2xl font-semibold ${featured ? "text-white" : "text-navy"}`}>
          {solution.name}
        </h3>
        <p className={`mt-2 text-sm leading-6 ${featured ? "text-white/70" : "text-slate-600"}`}>
          {solution.subtitle}
        </p>
      </div>
      <p className={`mt-6 text-4xl font-semibold ${featured ? "text-white" : "text-navy"}`}>
        ₹{solution.price.toLocaleString("en-IN")}
      </p>
      <ul className="mt-6 grid gap-3">
        {solution.includes.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-sm leading-6 ${
              featured ? "text-white/78" : "text-slate-700"
            }`}
          >
            <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={createWhatsAppUrl(solution.whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
          featured
            ? "bg-emerald text-white hover:bg-emerald/90"
            : "bg-navy text-white hover:bg-slate-800"
        }`}
      >
        {solution.cta}
        <MessageCircle className="h-4 w-4" />
      </a>
    </Reveal>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroProduct = products[0];

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/86 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#top" aria-label="TapGrow home" className="flex items-center gap-3">
            <Image
              src="/images/tapgrow-logo-web.png"
              alt="TapGrow"
              width={260}
              height={130}
              priority
              className="h-auto w-28 object-contain sm:w-32"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-navy">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={createWhatsAppUrl(heroProduct.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 lg:inline-flex"
          >
            Order on WhatsApp
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-navy lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="section-shell grid gap-2 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={createWhatsAppUrl(heroProduct.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative pt-28 sm:pt-32 lg:pt-36">
        <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.14),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
        <div className="section-shell grid items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-navy sm:text-6xl lg:text-7xl">
              Your Identity. One Tap Away.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              TapGrow creates NFC-enabled products that instantly connect people, businesses
              and opportunities through smart digital profiles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BuyButton message={heroProduct.whatsappMessage} className="sm:px-7" />
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-navy"
              >
                View Products
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <Icon className="mb-3 h-5 w-5 text-emerald" />
                    <p className="text-sm font-semibold text-slate-700">{point.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/10 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[34px] p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-white">
                <Image
                  src="/images/tapgrow-product-suite.png"
                  alt="TapGrow NFC product collection"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-4"
                />
                <div className="absolute right-[18%] top-[18%] h-24 w-24">
                  <span className="nfc-ring" />
                  <span className="nfc-ring" />
                  <span className="nfc-ring" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-navy p-4 text-white">
                <div>
                  <p className="text-sm text-white/70">Tap.Connect.Grow.</p>
                  <p className="font-semibold">Order handled on WhatsApp</p>
                </div>
                <ChevronRight className="h-5 w-5 text-emerald" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="section-shell">
          <SectionHeader
            title="TapGrow Products"
            body="Simple NFC products for students, professionals, businesses and creators. No cart, no checkout, just choose a product and continue on WhatsApp."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-slate-50 py-20">
        <div className="section-shell">
          <SectionHeader
            title="Beyond NFC Products"
            body="TapGrow helps businesses build visibility, trust, reviews, and customer connections through NFC products, Google Business setup, digital profiles, and growth-focused systems."
          />

          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {solutionHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <Icon className="mb-3 h-5 w-5 text-emerald" />
                  <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionPackages.map((solution, index) => (
              <SolutionCard
                key={solution.name}
                solution={solution}
                featured={index === 1}
              />
            ))}
          </div>

          <Reveal className="mt-8 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-navy">
                  Google Business Profile Setup Includes
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A practical setup checklist to help local businesses appear trustworthy,
                  searchable and ready for customer action.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {googleBusinessFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <Check className="h-4 w-4 shrink-0 text-emerald" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="section-shell">
          <SectionHeader title="How It Works" body="A simple WhatsApp-first flow built for quick lead handling." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.04} className="rounded-[26px] border border-slate-200 bg-white p-6">
                <p className="mb-8 text-sm font-semibold text-emerald">{step.step}</p>
                <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              align="left"
              title="About TapGrow"
              body="TapGrow helps people share identity, business details, portfolios, reviews and contact information through premium NFC products connected to smart digital profiles."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-slate-200 p-4">
                    <Icon className="mb-3 h-5 w-5 text-emerald" />
                    <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft">
                  <Icon className="mb-5 h-7 w-7 text-emerald" />
                  <h3 className="text-lg font-semibold text-navy">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{audience.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section id="offers" className="bg-navy py-20 text-white">
        <div className="section-shell">
          <SectionHeader
            title="Product Combinations"
            body="Offer packs for identity, business presence, gifting and premium networking."
            inverted
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {packs.map((pack, index) => (
              <Reveal
                key={`${pack.collection}-${pack.name}`}
                delay={(index % 3) * 0.04}
                className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
                  {pack.collection}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{pack.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{pack.products}</p>
                <p className="mt-5 text-sm text-white/55">{pack.originalPrice}</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-3xl font-semibold text-white">₹{pack.offerPrice}</p>
                  <a
                    href={createWhatsAppUrl(pack.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full bg-emerald px-4 text-sm font-semibold text-white transition hover:bg-emerald/90"
                  >
                    Buy Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="section-shell">
          <SectionHeader title="Simple, Premium, Memorable" body="A clean NFC experience for modern networking and direct enquiries." />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <Reveal key={review.name} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-5 flex gap-1 text-emerald">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-700">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-navy">{review.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-10 rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-5xl">
                Ready to grow with one tap?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Click Buy Now on any product, or contact TapGrow directly. Orders are handled
                personally through WhatsApp so you get guidance before setup begins.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BuyButton message={heroProduct.whatsappMessage} className="sm:px-7" />
                <a
                  href="mailto:tapgroww@gmail.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                >
                  Email Us
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal className="rounded-[26px] bg-navy p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald">
                Contact
              </p>
              <div className="mt-6 grid gap-5">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald" />
                  <span>+91 6386533983</span>
                </a>
                <a href="mailto:tapgroww@gmail.com" className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald" />
                  <span>tapgroww@gmail.com</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10">
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Image
              src="/images/tapgrow-logo-web.png"
              alt="TapGrow"
              width={220}
              height={110}
              className="h-auto w-28 object-contain"
            />
            <p className="mt-2 text-sm text-slate-500">Tap.Connect.Grow.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-navy">
                {link.label}
              </a>
            ))}
            <a href="/privacy-policy" className="hover:text-navy">
              Privacy Policy
            </a>
            <a href="/refund-policy" className="hover:text-navy">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
