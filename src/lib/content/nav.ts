export type NavLink = { label: string; href: string };

export type NavConfig = {
  home: NavLink;
  about: NavLink;
  personal: NavLink & { children: NavLink[] };
  business: NavLink;
  contact: NavLink;
  ctaLabel: string;
  langSwitchHref: string;
  langLabel: string;
};

export const navEs: NavConfig = {
  home: { label: "Inicio", href: "/" },
  about: { label: "Nosotros", href: "/nosotros/" },
  personal: {
    label: "Seguros Personales",
    href: "/seguros-personales/",
    children: [
      { label: "Seguro Médico (Obamacare)", href: "/seguro-medico-obamacare/" },
      { label: "Medicare", href: "/seguro-medicare/" },
      { label: "Seguro de Vida", href: "/seguro-de-vida/" },
      { label: "Plan Funeral", href: "/plan-funeral/" },
      { label: "Seguro Short Term", href: "/seguro-short-term/" },
      { label: "Plan Médico de Descuento", href: "/planes-medico-de-descuento/" },
      { label: "Visión y Dental", href: "/seguro-vision-y-dental/" },
      { label: "Seguro de Auto", href: "/seguros-de-autos/" },
      { label: "Seguro de Hogar", href: "/seguros-de-hogar/" },
    ],
  },
  business: { label: "Seguros Comerciales", href: "/seguros-comerciales/" },
  contact: { label: "Contacto", href: "/contacto/" },
  ctaLabel: "Hablar con un asesor",
  langSwitchHref: "/en",
  langLabel: "EN",
};

export const navEn: NavConfig = {
  home: { label: "Home", href: "/en" },
  about: { label: "About Us", href: "/en/about-us/" },
  personal: {
    label: "Personal Insurance",
    href: "/en/personal-insurance/",
    children: [
      { label: "Health Insurance (ACA)", href: "/en/aca-obamacare-health-insurance/" },
      { label: "Medicare", href: "/en/medicare-insurance/" },
      { label: "Life Insurance", href: "/en/life-insurance/" },
      { label: "Funeral Plan", href: "/en/funeral-plan/" },
      { label: "Short Term Health", href: "/en/short-term-health-insurance/" },
      { label: "Medical Discount Plans", href: "/en/medical-discount-plans/" },
      { label: "Vision & Dental", href: "/en/vision-and-dental-insurance/" },
      { label: "Auto Insurance", href: "/en/auto-insurance/" },
      { label: "Home Insurance", href: "/en/home-insurance/" },
    ],
  },
  business: { label: "Business Insurance", href: "/en/business-insurance/" },
  contact: { label: "Contact", href: "/en/contact/" },
  ctaLabel: "Talk to an advisor",
  langSwitchHref: "/",
  langLabel: "ES",
};
