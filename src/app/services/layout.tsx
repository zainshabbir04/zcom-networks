import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services & Products | Z COM Networks - Reliable Solutions. Smarter Connectivity.",
  description:
    "Explore Z COM Networks official services: Corporate Internet Solutions (DIA, MPLS, VPN, Point-to-Point), Cloud and Hosting (VMs, VPS, Colocation, Email, Web Hosting), Managed IT Solutions, Cybersecurity Services, and Digital Solutions in Lahore.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
