"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

export default function CoverageForm() {
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area.trim() || !phone.trim()) return;

    const message = `Coverage Check Request:\nArea / Location: ${area}\nContact Phone: ${phone}`;
    window.open(
      `https://wa.me/923171118042?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-brand-orange mx-auto" />
        <h4 className="font-bold text-slate-900 text-lg">Inquiry Forwarded!</h4>
        <p className="text-sm text-slate-600">
          Our Lahore field team has received your location and will confirm node
          feasibility with you momentarily via WhatsApp.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setArea("");
            setPhone("");
          }}
          className="text-xs text-brand-orange font-semibold hover:underline pt-2"
        >
          Check another location
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label
          htmlFor="area"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
        >
          Your Area / Sector in Lahore *
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-brand-orange absolute left-3.5 top-3.5" />
          <input
            id="area"
            type="text"
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Gulberg-III, Phase 5 DHA, Johar Town"
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
        >
          WhatsApp / Phone Number *
        </label>
        <div className="relative">
          <Phone className="w-4 h-4 text-brand-orange absolute left-3.5 top-3.5" />
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0300 1234567"
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white font-extrabold py-4 px-6 rounded-xl transition-all duration-200 shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 mt-2"
      >
        <span>Verify Coverage &amp; Schedule Survey</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        ✓ 100% Free optical site survey • No installation charges • Zero commitment
      </p>
    </form>
  );
}
