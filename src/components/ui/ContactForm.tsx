"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

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

    const subject = encodeURIComponent(`[Website Inquiry] ${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Website Contact Inquiry:\n\nFull Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "Not Provided"}\nService of Interest: ${formData.subject}\n\nMessage / Requirement Details:\n${formData.message || "No additional message"}\n`
    );
    window.location.href = `mailto:info@zcomnetworks.com.pk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-orange-50 border border-orange-200 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-brand-orange mx-auto" />
        <h4 className="font-bold text-slate-900 text-xl">Thank You for Reaching Out!</h4>
        <p className="text-sm text-slate-600">
          Your inquiry has been dispatched to info@zcomnetworks.com.pk.
          Our commercial sales &amp; engineering desk will connect with you shortly.
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5"
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
            className="w-full bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contactPhone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="contactPhone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="0300 1234567"
            className="w-full bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Service of Interest
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          >
            <option value="Corporate Dedicated Internet (DIA)">Corporate Dedicated Internet (DIA)</option>
            <option value="Residential High-Speed Fiber">Residential High-Speed Fiber</option>
            <option value="SME Internet Business Solution">SME Internet Business Solution</option>
            <option value="Point-to-Point Fiber / MPLS VPN">Point-to-Point Fiber / MPLS VPN</option>
            <option value="Data Center & Colocation">Data Center &amp; Colocation</option>
            <option value="Web & App Solutions">Web &amp; App Solutions</option>
            <option value="General Inquiry / Support">General Inquiry / Support</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your organization, bandwidth requirement, or specific address..."
          className="w-full bg-slate-50 dark:bg-[#0E1118] border border-slate-200/90 dark:border-slate-700/60 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 mt-2"
      >
        <Mail className="w-4 h-4 text-white" />
        <span>Send Inquiry via Email</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-slate-500 dark:text-gray-400 text-center">
        Direct channel to our 24/7 Gulberg-III NOC &amp; sales desk.
      </p>
    </form>
  );
}
