import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petra Vítková - Finanční Poradenství",
  description: "Finanční poradenství, hypotéky, investice a pojištění na míru vašim potřebám.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="font-teachers antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
