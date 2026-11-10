// Original sitewide schemas, preserved verbatim; translated only for ES/EN rendering.
export const siteSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://pousadagaucha.com/#lodging",
    "name": "Pousada Gaúcha",
    "description": "Pousada pé na areia em Bombinhas/SC, com jacuzzis panorâmicas, café da manhã à beira-mar e atendimento familiar há 26 anos.",
    "url": "https://pousadagaucha.com/",
    "image": "https://pousadagaucha.com/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg",
    "telephone": "+55 47 3369-2472",
    "email": "reservas@pousadagaucha.com.br",
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Pousada+Ga%C3%BAcha+Bombinhas",
    "priceRange": "R$ 595 - R$ 3595",
    "currenciesAccepted": "BRL",
    "availableLanguage": [
      "pt-BR",
      "en",
      "es"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Cascudo, 10-A - Beira Mar",
      "addressLocality": "Bombinhas",
      "addressRegion": "SC",
      "postalCode": "88215-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.1467,
      "longitude": -48.4953
    },
    "checkinTime": "15:00",
    "checkoutTime": "12:00",
    "numberOfRooms": 38,
    "petsAllowed": false,
    "containsPlace": [
      {
        "@type": "Suite",
        "name": "Bloco Garden",
        "url": "https://pousadagaucha.com/acomodacoes",
        "description": "Os apartamentos mais refinados da Pousada Gaúcha, com a melhor vista para a Praia de Bombinhas. Inclui também studios com vista lateral, sem sacada."
      },
      {
        "@type": "Suite",
        "name": "Bloco Gaúcha",
        "url": "https://pousadagaucha.com/acomodacoes",
        "description": "Os maiores apartamentos, com sacada com churrasqueira e cozinha mais completa. Indicados para família."
      },
      {
        "@type": "Suite",
        "name": "Bloco Praia",
        "url": "https://pousadagaucha.com/acomodacoes",
        "description": "Apartamentos mais compactos e os mais próximos do café da manhã à beira-mar."
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Acesso direto à praia",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Café da manhã incluído",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Estacionamento privativo gratuito (uma vaga por hospedagem)",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Serviço de praia com cadeiras e guarda-sóis incluídos",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Cozinha equipada no apartamento",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Quatro jacuzzis climatizadas na cobertura",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Espaço kids",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sala de cinema",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sala de jogos",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Academia das 10h às 22h",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sacada com churrasqueira (Bloco Gaúcha)",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bicicletas disponíveis",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wi-Fi gratuito",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "TV com Netflix em todos os apartamentos",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Transfer do aeroporto (pago, sob reserva)",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.instagram.com/pousadagaucha/",
      "https://www.facebook.com/PousadaGauchaOficial/",
      "https://www.tripadvisor.com.br/Hotel_Review-g612476-d4512999-Reviews-Pousada_Gaucha-Bombinhas_State_of_Santa_Catarina.html",
      "https://www.booking.com/hotel/br/pousada-gaucha-bombinhas1.html",
      "https://turismo.bombinhas.sc.gov.br/pousada-gaucha/",
      "https://www.google.com/maps/search/?api=1&query=Pousada+Ga%C3%BAcha+Bombinhas"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pousadagaucha.com/#organization",
    "name": "Pousada Gaúcha",
    "url": "https://pousadagaucha.com/",
    "logo": "https://pousadagaucha.com/lovable-uploads/bdf75423-2928-485e-9c80-d580d5d99039.jpg",
    "telephone": "+554733692472",
    "sameAs": [
      "https://www.instagram.com/pousadagaucha/",
      "https://www.facebook.com/PousadaGauchaOficial/",
      "https://www.tripadvisor.com.br/Hotel_Review-g612476-d4512999-Reviews-Pousada_Gaucha-Bombinhas_State_of_Santa_Catarina.html",
      "https://www.booking.com/hotel/br/pousada-gaucha-bombinhas1.html",
      "https://turismo.bombinhas.sc.gov.br/pousada-gaucha/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pousadagaucha.com/#website",
    "name": "Pousada Gaúcha",
    "url": "https://pousadagaucha.com/",
    "inLanguage": "pt-BR",
    "publisher": {
      "@id": "https://pousadagaucha.com/#organization"
    }
  }
] as const;
