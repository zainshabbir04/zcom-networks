import React from "react";
import Image from "next/image";

const PARTNERS = [
  { name: "Juniper Networks", logo: "https://zcomnetworks.com.pk/assets/logos/juniper-networks.png" },
  { name: "Cisco", logo: "https://zcomnetworks.com.pk/assets/logos/cisco.png" },
  { name: "Huawei", logo: "https://zcomnetworks.com.pk/assets/logos/huawei.png" },
  { name: "UltraTech", logo: "https://zcomnetworks.com.pk/assets/logos/ultratech.png" },
  { name: "Redtag", logo: "https://zcomnetworks.com.pk/assets/logos/redtag.png" },
  { name: "Microtech", logo: "https://zcomnetworks.com.pk/assets/logos/microtech-inc.png" },
  { name: "ADMA Tech", logo: "https://zcomnetworks.com.pk/assets/logos/adma-tech.png" },
  { name: "HP", logo: "https://zcomnetworks.com.pk/assets/logos/hp.png" },
  { name: "Dell", logo: "https://zcomnetworks.com.pk/assets/logos/dell.png" },
  { name: "ABC Communication", logo: "https://zcomnetworks.com.pk/assets/logos/abc-communication-network.png" },
];

export default function PartnersMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] dark:from-brand-darker to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] dark:from-brand-darker to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex gap-6 items-center">
        {/* Double the list for seamless loop */}
        {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-w-[190px] h-20 px-6 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200/90 dark:border-white/5 hover:border-brand-orange/40 transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <div className="relative w-32 h-10 transition-all duration-300 group-hover:scale-105">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
