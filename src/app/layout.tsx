import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://zcomnetworks.com.pk"),
  title: "Z COM Networks Private Limited | High-Speed Fiber Internet in Lahore",
  description:
    "Z COM Networks Private Limited is a top-tier Internet Service Provider in Lahore delivering reliable, high-speed fiber internet for corporate and residential clients with 99.9% uptime SLA and 24/7 local support.",
  keywords: [
    "Z COM Networks",
    "ISP Lahore",
    "Fiber Internet Lahore",
    "Dedicated Internet Access",
    "Corporate Internet",
    "High Speed Internet Gulberg Lahore",
  ],
  authors: [{ name: "Z COM Networks Private Limited" }],
  icons: {
    icon: "https://zcomnetworks.com.pk/assets/favicon.png?v=fav1",
    apple: "https://zcomnetworks.com.pk/assets/apple-touch-icon.png?v=fav1",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://zcomnetworks.com.pk/",
    title: "Z COM Networks Private Limited | High-Speed Fiber Internet in Lahore",
    description:
      "A top-tier Internet Service Provider delivering reliable, high-speed connectivity for corporate and residential sectors in Lahore.",
    images: [
      {
        url: "https://zcomnetworks.com.pk/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Z COM Networks",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var mode = localStorage.getItem('zcom_theme_mode');
                var theme;
                if (mode === 'dark') {
                  theme = 'dark';
                } else if (mode === 'light') {
                  theme = 'light';
                } else {
                  // Auto Day/Night mode: 6:00 AM to 6:59 PM is daytime (light), otherwise nighttime (dark)
                  var hour = new Date().getHours();
                  theme = (hour >= 6 && hour < 19) ? 'light' : 'dark';
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InternetServiceProvider",
              name: "Z COM Networks Private Limited",
              telephone: "+92-42-345-11111",
              email: "sales@zcomnetworks.com.pk",
              url: "https://zcomnetworks.com.pk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7/4, E-3 Main Boulevard, Gulberg-III",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              areaServed: "Lahore",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61562135909070",
                "https://pk.linkedin.com/company/z-com-networks-private-limited",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-[#0B0E14] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-brand-orange selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
