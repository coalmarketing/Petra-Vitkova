import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://petravitkova.cz'),
  title: {
    default: "Petra Vítková - Finanční poradenství | Hypotéky, Investice, Pojištění",
    template: "%s | Petra Vítková - Finanční poradenství"
  },
  description: "Profesionální finanční poradenství na míru. Hypotéky, investice, pojištění a komplexní finanční plánování. Osobní přístup a transparentní služby v celé ČR.",
  keywords: [
    "finanční poradenství",
    "hypotéky",
    "investice",
    "pojištění",
    "finanční plánování",
    "důchodové spoření",
    "životní pojištění",
    "pojištění majetku",
    "finanční poradce",
    "ČSOB",
    "Petra Vítková"
  ],
  authors: [{ name: "Petra Vítková" }],
  creator: "Petra Vítková",
  publisher: "Petra Vítková - Finanční poradenství",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://petravitkova.cz",
    siteName: "Petra Vítková - Finanční poradenství",
    title: "Petra Vítková - Finanční poradenství | Hypotéky, Investice, Pojištění",
    description: "Profesionální finanční poradenství na míru. Hypotéky, investice, pojištění a komplexní finanční plánování. Osobní přístup a transparentní služby.",
    images: [
      {
        url: "/img/logo1.png",
        width: 1200,
        height: 630,
        alt: "Petra Vítková - Finanční poradenství",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petra Vítková - Finanční poradenství | Hypotéky, Investice, Pojištění",
    description: "Profesionální finanční poradenství na míru. Hypotéky, investice, pojištění a komplexní finanční plánování.",
    images: ["/img/logo1.png"],
    creator: "@petravitkova",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://petravitkova.cz",
  },
  category: "finance",
  classification: "business",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Petra Vítková",
    "application-name": "Petra Vítková - Finanční poradenství",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="font-teachers antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
