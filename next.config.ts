import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Workaround: en este proyecto, AWS Amplify Hosting no está inyectando las
  // variables de entorno configuradas en su consola al runtime del compute de
  // Next.js (confirmado: process.env solo trae variables internas de Lambda).
  // Amplify sí las expone en el momento de la build, así que las "horneamos"
  // aquí para que queden disponibles en el código del servidor. No se exponen
  // al cliente porque solo se referencian dentro de código server-only
  // (src/lib/leads.ts, usado por el route handler /api/lead).
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    LEAD_NOTIFICATION_EMAIL: process.env.LEAD_NOTIFICATION_EMAIL,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
