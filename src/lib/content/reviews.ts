export type GoogleReview = { name: string; text: string; avatar: string };

// Reseñas reales de clientes de Tampa Seguros (Google Business Profile).
// Texto verbatim: no corregir ortografía/gramática, son citas textuales.
// Avatares: foto de perfil de Google de cada autor (URL provista por el cliente).
export const googleReviews: GoogleReview[] = [
  {
    name: "Marine Mercado",
    text: "Estoy muy satisfecha con el servicio de Tampa seguros. Tampa seguros me ofrece seguridad y sus staff son bien genuino.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUdBiJ4wT5XfsXGJLhbL1T9IAPUMsnhESF5Y67caVWLrg=s120-c-rp-mo-br100",
  },
  {
    name: "Nora",
    text: "Excelente servicio .",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLrBRwq6QWIy1m4uuROwy_ZUdzATM7jEISmW-IaPtqF=s120-c-rp-mo-br100",
  },
  {
    name: "Sandra Arango",
    text: "Muy amables en su atención, servicio personalizado, atención inmediata!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV1YF2fSJxslcmVlJUxAu0-VfvUhGrhqhVaUKnDXJYEdZkH=s120-c-rp-mo-ba3-br100",
  },
  {
    name: "luchy luxe",
    text: "Buena gestión ,buena comunicación, excelente servicio y el personal es muy cálido y humano ,lo recomiendo",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU87-hu_uWON1jP5B1hP2mdXc8368hDq1uRjhofBHrH7g=s120-c-rp-mo-br100",
  },
  {
    name: "carlos torres rosales",
    text: "Excelente servicio, una atencion como ninguna. Recomendadas 100%.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXWeJkmNSHAwbheFoSM9sGx8_ouU8qRp2hk09CV9ZDW2Kg=s120-c-rp-mo-br100",
  },
];
