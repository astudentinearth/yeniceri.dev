import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: "400",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono700 = Space_Mono({
  weight: "700",
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Burak's Portfolio",
  description: "Full-stack web developer and computer science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${spaceMono700.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
