import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Flower2,
  Clock,
  Tag,
  Eye,
  Car,
  Home as HomeIcon,
  Scale,
  HardHat,
  Building2,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const localCities = [
  "Tampa",
  "Riverview",
  "Brandon",
  "Wimauma",
  "Ruskin",
  "Lakeland",
  "Plant City",
];

export type ProductCardData = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const personalProductsEs: ProductCardData[] = [
  { icon: HeartPulse, title: "Seguro Médico (Obamacare)", description: "Cobertura de salud con posibles subsidios del gobierno, desde $5/mes.", href: "/seguro-medico-obamacare/" },
  { icon: Stethoscope, title: "Medicare", description: "Guía clara para elegir tu plan Medicare sin comisiones de tu bolsillo.", href: "/seguro-medicare/" },
  { icon: ShieldCheck, title: "Seguro de Vida", description: "Protege el futuro económico de quienes dependen de ti.", href: "/seguro-de-vida/" },
  { icon: Flower2, title: "Plan Funeral", description: "Evita que tu familia cargue con gastos funerarios inesperados.", href: "/plan-funeral/" },
  { icon: Clock, title: "Seguro Short Term", description: "Cobertura médica temporal mientras encuentras tu plan ideal.", href: "/seguro-short-term/" },
  { icon: Tag, title: "Plan Médico de Descuento", description: "Ahorra en consultas, medicinas y dental desde el primer día.", href: "/planes-medico-de-descuento/" },
  { icon: Eye, title: "Visión y Dental", description: "Cuidado de ojos y dientes para toda la familia, a bajo costo.", href: "/seguro-vision-y-dental/" },
  { icon: Car, title: "Seguro de Auto", description: "Maneja tranquilo con la cobertura que exige el estado de Florida.", href: "/seguros-de-autos/" },
  { icon: HomeIcon, title: "Seguro de Hogar", description: "Protege tu casa o alquiler contra huracanes, robos y accidentes.", href: "/seguros-de-hogar/" },
];

export const businessProductsEs: ProductCardData[] = [
  { icon: Scale, title: "Responsabilidad Civil General", description: "Protege tu negocio ante demandas por daños a terceros.", href: "/seguros-comerciales/" },
  { icon: HardHat, title: "Compensación Laboral", description: "Cobertura obligatoria en Florida para proteger a tus empleados.", href: "/seguros-comerciales/" },
  { icon: Building2, title: "Propiedad Comercial (BOP)", description: "Blinda tu local, equipo e inventario ante incendios o desastres.", href: "/seguros-comerciales/" },
  { icon: Truck, title: "Auto Comercial", description: "Cobertura para las flotillas y vehículos de tu empresa.", href: "/seguros-comerciales/" },
];

export const personalProductsEn: ProductCardData[] = [
  { icon: HeartPulse, title: "Health Insurance (ACA)", description: "Health coverage with possible government subsidies, from $5/month.", href: "/en/aca-obamacare-health-insurance/" },
  { icon: Stethoscope, title: "Medicare", description: "Clear guidance to choose your Medicare plan at no cost to you.", href: "/en/medicare-insurance/" },
  { icon: ShieldCheck, title: "Life Insurance", description: "Protect the financial future of the people who depend on you.", href: "/en/life-insurance/" },
  { icon: Flower2, title: "Funeral Plan", description: "Spare your family unexpected funeral expenses.", href: "/en/funeral-plan/" },
  { icon: Clock, title: "Short Term Health", description: "Temporary medical coverage while you find your ideal plan.", href: "/en/short-term-health-insurance/" },
  { icon: Tag, title: "Medical Discount Plans", description: "Save on visits, medicine and dental care from day one.", href: "/en/medical-discount-plans/" },
  { icon: Eye, title: "Vision & Dental", description: "Eye and dental care for the whole family, at low cost.", href: "/en/vision-and-dental-insurance/" },
  { icon: Car, title: "Auto Insurance", description: "Drive with the coverage Florida requires, and real peace of mind.", href: "/en/auto-insurance/" },
  { icon: HomeIcon, title: "Home Insurance", description: "Protect your house or rental from hurricanes, theft and accidents.", href: "/en/home-insurance/" },
];

export const businessProductsEn: ProductCardData[] = [
  { icon: Scale, title: "General Liability", description: "Protect your business against third-party damage claims.", href: "/en/business-insurance/" },
  { icon: HardHat, title: "Workers' Compensation", description: "Coverage required by Florida law to protect your employees.", href: "/en/business-insurance/" },
  { icon: Building2, title: "Commercial Property (BOP)", description: "Shield your location, equipment and inventory from fire or disaster.", href: "/en/business-insurance/" },
  { icon: Truck, title: "Commercial Auto", description: "Coverage for your company's fleet and vehicles.", href: "/en/business-insurance/" },
];

export const homeEs = {
  metaTitle: "Seguros personales y comerciales en Florida, en español",
  metaDescription:
    "Seguros de salud, vida, auto, hogar y comerciales en Florida. Asesoría 100% gratis en español. Cotiza gratis con Tampa Seguros (Lic. L099087).",
  geo: "Ayudamos a familias y negocios hispanos en Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland y Plant City a encontrar seguros de salud, vida, auto, hogar y comerciales con asesoría gratuita, personalizada y en español para proteger su futuro con confianza.",
  heroEyebrow: "Asesoría gratuita en español",
  heroHeadline: "Protege a tu familia sin dejar que el miedo decida por ti",
  videoHeroH1: "Seguros de Salud, Vida, Auto y Hogar para Familias Hispanas en Florida",
  videoHeroSubtitle: "Protege hoy a tu familia o negocio con asesoría gratuita, rápida y en español.",
  heroTrustPoints: [
    "+1,200 clientes protegidos",
    "Licencia estatal activa en Florida",
    "Atención bilingüe",
    "Asesoría gratuita",
  ],
  gatewayPersonal: {
    icon: Users,
    title: "Seguros Personales",
    description: "Salud, Vida, Auto y Hogar",
    href: "/seguros-personales/",
  },
  gatewayBusiness: {
    icon: Building2,
    title: "Seguros Comerciales",
    description: "General Liability y Flotas",
    href: "/seguros-comerciales/",
  },
  heroBody:
    "Un accidente o una enfermedad puede costar miles de dólares en cuestión de horas. Con Tampa Seguros eliges la cobertura correcta, de la mano de un asesor que habla tu idioma y te explica todo sin prisa.",
  heroPas: {
    problem: "Un accidente o una enfermedad puede llegar sin aviso.",
    agitation: "Sin la cobertura correcta, te puede costar miles de dólares en horas.",
    solution: "Con Tampa Seguros eliges tu plan gratis, con un asesor que habla tu idioma.",
  },
  heroCtaWhatsapp: "Escribir por WhatsApp",
  heroCtaCall: "Llamar ahora",
  heroCtaQuote: "Obtener mi revisión gratuita",
  quoteTitle: "Cotización gratis en menos de 2 minutos",
  quoteSubtitle: "Cuéntanos qué necesitas y un asesor con licencia en Florida te contacta el mismo día, sin compromiso.",
  socialProof: [
    { value: "+1,200", label: "familias y negocios protegidos" },
    { value: "100%", label: "atención bilingüe (español e inglés)" },
    { value: "$0", label: "costo por nuestra asesoría" },
    { value: "L099087", label: "licencia estatal de Florida" },
  ],
  personalTitle: "Seguros personales para tu familia",
  personalIntro:
    "Salud, vida y protección para el hogar, explicados en español y ajustados a tu presupuesto real.",
  personalCta: "Ver todos los seguros personales",
  businessTitle: "Seguros comerciales para tu negocio",
  businessIntro:
    "Un solo incidente sin cobertura puede cerrar un negocio. Blindamos tu operación con pólizas hechas a la medida de tu industria.",
  businessCta: "Ver seguros comerciales",
  trustTitle: "Trabajamos con las aseguradoras líderes en Florida",
  trustSubtitle: "Comparamos entre más de 35 compañías para encontrar tu mejor opción, sin favorecer a una sola marca.",
  localTitle: "Asesoría cercana en tu comunidad",
  localBody:
    "Atendemos a clientes en todo Florida, con presencia especial en el área de Tampa Bay: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland y Plant City. Si vives o trabajas en estas comunidades, tenemos un asesor cerca de ti.",
  faqTitle: "Preguntas frecuentes",
  faqSubtitle: "Respuestas rápidas a lo que más nos preguntan las familias y negocios de Florida.",
  finalCtaTitle: "Tu tranquilidad no debería esperar",
  finalCtaBody: "Habla hoy con un asesor y descubre en minutos qué cobertura te conviene, sin compromiso y sin costo.",
  faqs: [
    {
      q: "¿Cuánto cuesta la asesoría de Tampa Seguros?",
      a: "Nuestra asesoría es 100% gratuita. Comparamos opciones entre distintas aseguradoras y solo tú decides si contratas, sin ningún costo adicional por nuestro acompañamiento.",
    },
    {
      q: "¿Necesito un estatus migratorio específico para calificar?",
      a: "Depende del programa: algunos seguros de salud requieren residencia legal y otros no. Te ayudamos a identificar qué opciones aplican a tu caso particular, sin juicios y con total confidencialidad.",
    },
    {
      q: "¿Cobran algo por ayudarme con el Marketplace u Obamacare?",
      a: "No. La inscripción y asesoría en el Mercado de Seguros de Salud no tiene ningún costo adicional para ti; nuestra compensación viene directamente de la aseguradora.",
    },
    {
      q: "¿Atienden en español?",
      a: "Sí, el 100% de nuestro equipo atiende en español como idioma principal, y también ofrecemos servicio completo en inglés si lo prefieres.",
    },
    {
      q: "¿En qué ciudades de Florida trabajan?",
      a: "Atendemos en todo el estado, con enfoque especial en el área de Tampa Bay: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland y Plant City.",
    },
  ],
};

export const homeEn = {
  metaTitle: "Personal & Commercial Insurance in Florida, Bilingual Guidance",
  metaDescription:
    "Health, life, auto, home and commercial insurance in Florida. Free bilingual guidance. Get your free quote with Tampa Seguros (Lic. L099087).",
  geo: "We help Hispanic families and businesses in Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland and Plant City find health, life, auto, home and commercial insurance with free, personalized, bilingual guidance to protect their future with confidence.",
  heroEyebrow: "Free bilingual guidance",
  heroHeadline: "Protect your family without letting fear make the decision",
  videoHeroH1: "Health, Life, Auto and Home Insurance for Hispanic Families in Florida",
  videoHeroSubtitle: "Protect your family or business today with free, fast, bilingual guidance.",
  heroTrustPoints: [
    "+1,200 clients protected",
    "Active Florida state license",
    "Bilingual service",
    "Free guidance",
  ],
  gatewayPersonal: {
    icon: Users,
    title: "Personal Insurance",
    description: "Health, Life, Auto and Home",
    href: "/en/personal-insurance/",
  },
  gatewayBusiness: {
    icon: Building2,
    title: "Commercial Insurance",
    description: "General Liability and Fleets",
    href: "/en/business-insurance/",
  },
  heroBody:
    "An accident or illness can cost thousands of dollars within hours. With Tampa Seguros you choose the right coverage, guided by an advisor who explains everything clearly, in the language you're most comfortable with.",
  heroPas: {
    problem: "An accident or illness can strike without warning.",
    agitation: "Without the right coverage, it can cost you thousands of dollars in hours.",
    solution: "With Tampa Seguros you choose your plan for free, guided in your language.",
  },
  heroCtaWhatsapp: "Message us on WhatsApp",
  heroCtaCall: "Call now",
  heroCtaQuote: "Get my free review",
  quoteTitle: "Free quote in under 2 minutes",
  quoteSubtitle: "Tell us what you need and a Florida-licensed advisor will reach out the same day, no obligation.",
  socialProof: [
    { value: "+1,200", label: "families and businesses protected" },
    { value: "100%", label: "bilingual support (Spanish & English)" },
    { value: "$0", label: "cost for our guidance" },
    { value: "L099087", label: "Florida state license" },
  ],
  personalTitle: "Personal insurance for your family",
  personalIntro: "Health, life and home protection, explained clearly and fitted to your real budget.",
  personalCta: "See all personal insurance",
  businessTitle: "Commercial insurance for your business",
  businessIntro:
    "One uncovered incident can shut a business down. We protect your operation with policies tailored to your industry.",
  businessCta: "See commercial insurance",
  trustTitle: "We work with Florida's leading carriers",
  trustSubtitle: "We compare across 35+ companies to find your best option, without favoring a single brand.",
  localTitle: "Local guidance in your community",
  localBody:
    "We serve clients across Florida, with a strong presence in the Tampa Bay area: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland and Plant City. If you live or work in these communities, an advisor is nearby.",
  faqTitle: "Frequently asked questions",
  faqSubtitle: "Quick answers to what Florida families and businesses ask us most.",
  finalCtaTitle: "Your peace of mind shouldn't wait",
  finalCtaBody: "Talk to an advisor today and find out in minutes which coverage fits you, no obligation and no cost.",
  faqs: [
    {
      q: "How much does Tampa Seguros' guidance cost?",
      a: "Our guidance is 100% free. We compare options across carriers and you decide whether to enroll, with no extra cost for our support.",
    },
    {
      q: "Do I need a specific immigration status to qualify?",
      a: "It depends on the program: some health plans require legal residency and others don't. We help you identify which options apply to your case, confidentially and without judgment.",
    },
    {
      q: "Do you charge anything to help with the Marketplace / ACA?",
      a: "No. Enrollment and guidance for the Health Insurance Marketplace comes at no extra cost to you; our compensation comes directly from the carrier.",
    },
    {
      q: "Do you serve English-speaking clients?",
      a: "Yes. While most of our team's first language is Spanish, we offer full service in English as well.",
    },
    {
      q: "Which Florida cities do you serve?",
      a: "We serve clients statewide, with a strong focus on the Tampa Bay area: Tampa, Riverview, Brandon, Wimauma, Ruskin, Lakeland and Plant City.",
    },
  ],
};
