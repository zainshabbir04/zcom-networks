"use client";

import React from "react";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/923171118042?text=Hello%20Z%20COM%20Networks!%20I%20am%20inquiring%20about%20fiber%20internet%20services.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden md:block mr-3 bg-white text-xs text-slate-700 py-1.5 px-3 rounded-lg border border-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with our Lahore team
      </div>
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-brand-orange hover:bg-brand-orangeLight text-white flex items-center justify-center shadow-2xl shadow-brand-orange/40 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <path d="M16.04 4C9.93 4 4.96 8.97 4.96 15.08c0 1.95.51 3.86 1.48 5.54L4 28l7.56-2.38a11.05 11.05 0 0 0 4.48.95h.01c6.11 0 11.08-4.97 11.08-11.08C27.13 8.97 22.16 4 16.04 4Zm0 20.2a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-4.49 1.41 1.43-4.38-.22-.35a9.06 9.06 0 0 1-1.39-4.83c0-5.02 4.09-9.1 9.12-9.1 2.43 0 4.72.95 6.44 2.67a9.04 9.04 0 0 1 2.67 6.44c0 5.03-4.09 9.11-9.1 9.11Zm5.01-6.82c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32Z" />
        </svg>
      </button>
    </div>
  );
}
