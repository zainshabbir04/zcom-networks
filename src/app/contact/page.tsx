import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";

import CoverageForm from "@/components/ui/CoverageForm";
import ContactForm from "@/components/ui/ContactForm";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us & Coverage Check | Z COM Networks Private Limited",
  description:
    "Get in touch with Z COM Networks Private Limited. Check fiber coverage in Lahore, request enterprise DIA quotes, or contact our 24/7 support desk.",
};

const CONTACT_INFO = [
  {
    icon: <Phone className="w-5 h-5 text-brand-orange" />,
    label: "Phone Hotline (24/7 NOC)",
    value: "+92 42 345 11 111",
    href: "tel:+924234511111",
  },
  {
    icon: <Mail className="w-5 h-5 text-brand-orange" />,
    label: "Email Inquiries",
    value: "sales@zcomnetworks.com.pk",
    href: "mailto:sales@zcomnetworks.com.pk",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-brand-orange" />,
    label: "WhatsApp Support Desk",
    value: "+92 317 1118042",
    href: "https://wa.me/923171118042",
  },
  {
    icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    label: "Head Office Address",
    value: "7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Punjab, Pakistan",
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-orange" />,
    label: "Operating Hours",
    value: "24 Hours a Day · 7 Days a Week (Always Open)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 transition-colors duration-300">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-brand-orange/15 border border-orange-200 dark:border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONTACT &amp; COVERAGE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
          Let&apos;s Connect &amp; Power Your Connectivity
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Reach out to our 24/7 technical desk, check fiber coverage in your neighborhood, or
          schedule a free optical site survey in Lahore.
        </p>
      </section>

      {/* Coverage Checker Card (Interactive Form) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-brand-card/70 p-6 sm:p-10 lg:p-12 rounded-3xl border border-orange-200 dark:border-brand-orange/30 shadow-xl shadow-orange-500/5 dark:shadow-black/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                INSTANT AVAILABILITY CHECK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                Is Z COM Fiber Available at Your Location?
              </h2>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Submit your area in Lahore to verify nearest optical fiber node proximity and
                dispatch our field survey team.
              </p>
            </div>

            <CoverageForm />
          </div>
        </div>
      </section>

      {/* Main Contact Grid (Info + Message Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                We&apos;re Available 24/7/365
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                Whether you need dedicated enterprise DIA or high-speed home fiber, our Lahore
                office is always accessible.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {CONTACT_INFO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/5 flex items-start gap-4 hover:border-brand-orange/40 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-brand-orange/15 flex items-center justify-center shrink-0 mt-0.5 border border-orange-200 dark:border-brand-orange/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-brand-orange transition-colors mt-0.5 block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white mt-0.5">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-brand-card/70 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                  MESSAGE OUR DESK
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1">
                  Fill in your requirements below and our commercial sales team will review and
                  respond promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
            ANSWERS &amp; ASSISTANCE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion />
      </section>
    </div>
  );
}
