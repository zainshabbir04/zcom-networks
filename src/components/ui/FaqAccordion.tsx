"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Which areas does Z COM Networks cover?",
    a: "Z COM Networks provides fiber-optic coverage across major residential, commercial, and industrial sectors including Gulberg, DHA (all phases), Cantt, Model Town, Johar Town, Faisal Town, Garden Town, and commercial enterprise districts. Submit your specific location through our Coverage tool to verify optical node availability.",
  },
  {
    q: "What does Unlimited Data with 'No FUP' mean?",
    a: "No Fair Usage Policy (No FUP) means that your connection speed is never throttled, capped, or degraded based on your monthly data volume. Whether your household or business transfers 500 GB or 50 Terabytes, you enjoy 100% of your subscribed speed 24 hours a day, 365 days a year.",
  },
  {
    q: "What is Dedicated Internet Access (DIA) and how does it differ from broadband?",
    a: "Dedicated Internet Access (DIA) is a private, non-shared, 1:1 symmetrical optical circuit provisioned directly to your premises. Unlike standard shared connections where bandwidth fluctuates with neighborhood traffic, DIA guarantees 100% uncontended throughput, supported by contractual 99.9% uptime SLAs and proactive 24/7 Network Operations Center (NOC) monitoring.",
  },
  {
    q: "What are your customer support and dispatch hours?",
    a: "Our customer support center and Network Operations Center (NOC) located in Gulberg-III operate 24 hours a day, 7 days a week, 365 days a year. Our phone lines (+92 42 345 11 111) and email (info@zcomnetworks.com.pk) are always staffed by real technical personnel ready to assist.",
  },
  {
    q: "How can I schedule a site survey or get connected?",
    a: "Simply submit your address and contact details using our Availability Form or email our technical desk directly at info@zcomnetworks.com.pk. Our field survey team will verify node proximity, conduct a free optical site assessment, and schedule installation at your earliest convenience.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {FAQS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? "bg-orange-50/60 dark:bg-[#12161F] border-brand-orange/50 shadow-lg shadow-orange-500/5 dark:shadow-black/20"
                : "bg-white dark:bg-[#12161F] border-slate-200/90 dark:border-slate-700/60 hover:border-brand-orange/40 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {item.q}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen
                    ? "bg-brand-orange text-white"
                    : "bg-slate-100 dark:bg-[#0E1118] text-slate-600 dark:text-slate-300"
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 mt-1 animate-in fade-in duration-200">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
