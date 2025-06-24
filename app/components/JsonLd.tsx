export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Petra Vítková - Finanční poradenství",
    "description": "Profesionální finanční poradenství na míru. Hypotéky, investice, pojištění a komplexní finanční plánování.",
    "url": "https://petravitkova.cz",
    "logo": "https://petravitkova.cz/img/logo1.png",
    "image": "https://petravitkova.cz/img/logo1.png",
    "telephone": "+420-XXX-XXX-XXX",
    "email": "info@petravitkova.cz",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CZ",
      "addressLocality": "Praha",
      "addressRegion": "Praha"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0755",
      "longitude": "14.4378"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "currenciesAccepted": "CZK",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "serviceType": [
      "Finanční poradenství",
      "Hypotéky",
      "Investice",
      "Pojištění",
      "Finanční plánování"
    ],
    "provider": {
      "@type": "Person",
      "name": "Petra Vítková",
      "jobTitle": "Finanční poradkyně",
      "worksFor": {
        "@type": "Organization",
        "name": "ČSOB"
      }
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Spokojený klient"
        },
        "reviewBody": "Výborné finanční poradenství s osobním přístupem."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 