import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { NavProvider } from "@/context/nav-context";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
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
      <body className={`${oswald.className} antialiased`}>
        <NavProvider>
          <NavBar />
          {children}
          <Footer />
        </NavProvider>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
