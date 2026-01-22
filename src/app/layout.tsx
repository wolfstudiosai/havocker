import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "VELIMOTOR HAVOCKER",
  description: "L3e High Performance Electric Dirtbike - Precision Engineered for Electric Dominance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
