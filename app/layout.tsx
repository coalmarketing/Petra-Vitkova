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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-teachers antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
