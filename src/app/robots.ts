import type { MetadataRoute } from "next";
import { business } from "@/lib/content/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bots de motores de IA generativa (GEO): se permiten explícitamente para
      // que Tampa Seguros pueda aparecer citado en respuestas de AI Overviews,
      // ChatGPT, Perplexity y Gemini.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
