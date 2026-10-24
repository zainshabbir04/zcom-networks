"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Corporate & Residential Fiber Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const message = `Website Contact Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/923171118042?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-orange-50 border border-orange-200 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-brand-orange mx-auto" />
        <h4 className="font-bold text-slate-900 text-xl">Thank You for Reaching Out!</h4>
        <p className="text-sm text-slate-600">
          Your inquiry has been dispatched to our sales &amp; engineering desk.
          Our team in Gulberg-III, Lahore will connect with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              subject: "Corporate & Residential Fiber Inquiry",
              message: "",
            });
          }}
          className="text-xs text-brand-orange hover:underline pt-2 font-medium"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
          >
            Your Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contactPhone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
          >
            Phone / WhatsApp *
          </label>
          <input
            id="contactPhone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="0300 1234567"
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
          >
            Service of Interest
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-black/50 border border-white/15 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          >
            <option value="Corporate Dedicated Internet (DIA)" className="bg-slate-900 text-white">Corporate Dedicated Internet (DIA)</option>
            <option value="Residential High-Speed Fiber" className="bg-slate-900 text-white">Residential High-Speed Fiber</option>
            <option value="SME Internet Business Solution" className="bg-slate-900 text-white">SME Internet Business Solution</option>
            <option value="Point-to-Point Fiber / MPLS VPN" className="bg-slate-900 text-white">Point-to-Point Fiber / MPLS VPN</option>
            <option value="Data Center & Colocation" className="bg-slate-900 text-white">Data Center &amp; Colocation</option>
            <option value="Web & App Solutions" className="bg-slate-900 text-white">Web &amp; App Solutions</option>
            <option value="General Inquiry / Support" className="bg-slate-900 text-white">General Inquiry / Support</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
        >
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your organization, bandwidth requirement, or specific Lahore address..."
          className="w-full bg-black/50 border border-white/15 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-brand-orange text-white font-extrabold py-4 px-6 rounded-xl transition-all duration-200 shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 mt-2"
      >
        <span>Send Inquiry via WhatsApp</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        Direct channel to our Gulberg-III NOC &amp; sales desk in Lahore.
      </p>
    </form>
  );
}
