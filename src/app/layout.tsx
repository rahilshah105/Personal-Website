// app/layout.tsx or app/layout.ts (Next.js 13/14)
import type { Metadata } from "next";
import { Montserrat, Prata } from "next/font/google";
import "./globals.css";

// ✅ Use next/font for Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-montserrat",
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahil Shah Personal Website",
  description: "Rahil Shah Personal Website",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${prata.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
