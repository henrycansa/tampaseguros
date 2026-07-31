export type CityInfo = {
  slug: string;
  name: string;
  county: string;
  regionNote: string;
  hospitalNote: string;
  climateNote: string;
  localFaq: { q: string; a: string };
};

// Datos generales de referencia pública (condado, ubicación relativa, hospitales conocidos
// del área). Se recomienda verificar los nombres de hospitales antes de publicar, ya que
// las redes de proveedores pueden cambiar.
export const citiesEs: CityInfo[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "el condado de Hillsborough",
    regionNote: "el centro del área de Tampa Bay",
    hospitalNote: "Tampa General Hospital y AdventHealth Tampa",
    climateNote: "temporada de huracanes de junio a noviembre y calor intenso en verano",
    localFaq: {
      q: "¿Tampa Seguros tiene oficina en Tampa?",
      a: "Sí, nuestra oficina principal está en 400 N Ashley Dr suite 1900, Tampa FL 33602, en el centro de la ciudad.",
    },
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "el condado de Hillsborough",
    regionNote: "el área de South Shore, al sureste de Tampa",
    hospitalNote: "HCA Florida South Shore Hospital",
    climateNote: "temporada de huracanes de junio a noviembre y tormentas de verano frecuentes",
    localFaq: {
      q: "¿Atienden clientes en Riverview sin tener oficina ahí?",
      a: "Sí, atendemos a familias y negocios de Riverview por teléfono, WhatsApp y videollamada, con la misma asesoría personalizada que en nuestra oficina de Tampa.",
    },
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "el condado de Hillsborough",
    regionNote: "el corredor este de Tampa",
    hospitalNote: "HCA Florida Brandon Hospital",
    climateNote: "temporada de huracanes de junio a noviembre y crecimiento urbano acelerado",
    localFaq: {
      q: "¿Tampa Seguros conoce las necesidades específicas de Brandon?",
      a: "Sí, Brandon es una de las comunidades donde más familias hispanas atendemos; conocemos sus proveedores médicos y aseguradoras más comunes en la zona.",
    },
  },
  {
    slug: "wimauma",
    name: "Wimauma",
    county: "el sur del condado de Hillsborough",
    regionNote: "una comunidad con fuerte tradición agrícola e hispana",
    hospitalNote: "los hospitales del área de South Shore",
    climateNote: "temporada de huracanes de junio a noviembre y clima cálido todo el año",
    localFaq: {
      q: "¿Ofrecen asesoría en español para la comunidad de Wimauma?",
      a: "Sí, el 100% de nuestra asesoría es en español, pensada para comunidades como Wimauma donde muchas familias prefieren atención en su idioma.",
    },
  },
  {
    slug: "ruskin",
    name: "Ruskin",
    county: "el sur del condado de Hillsborough",
    regionNote: "la costa sur de la bahía de Tampa",
    hospitalNote: "los hospitales del área de South Shore",
    climateNote: "temporada de huracanes de junio a noviembre y riesgo de marejada costera",
    localFaq: {
      q: "¿El seguro de hogar en Ruskin cubre riesgo de inundación costera?",
      a: "La cobertura de inundación suele contratarse aparte del seguro de hogar estándar; en zonas costeras como Ruskin, revisamos contigo si la necesitas según tu ubicación exacta.",
    },
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "el condado de Polk",
    regionNote: "la región entre Tampa y Orlando",
    hospitalNote: "Lakeland Regional Health Medical Center",
    climateNote: "temporada de huracanes de junio a noviembre y tormentas eléctricas de verano",
    localFaq: {
      q: "¿Tampa Seguros atiende fuera del condado de Hillsborough, como en Lakeland?",
      a: "Sí, atendemos a clientes en todo Florida, incluyendo el condado de Polk y la ciudad de Lakeland, por teléfono, WhatsApp y videollamada.",
    },
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "el este del condado de Hillsborough",
    regionNote: "la Capital Mundial de la Fresa de Invierno",
    hospitalNote: "South Florida Baptist Hospital",
    climateNote: "temporada de huracanes de junio a noviembre y comunidad agrícola activa todo el año",
    localFaq: {
      q: "¿Tampa Seguros entiende las necesidades de trabajadores agrícolas en Plant City?",
      a: "Sí, conocemos la realidad de las familias que trabajan en el sector agrícola de Plant City y ajustamos nuestras recomendaciones a horarios e ingresos variables.",
    },
  },
];

export const citiesEn: CityInfo[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    regionNote: "the heart of the Tampa Bay area",
    hospitalNote: "Tampa General Hospital and AdventHealth Tampa",
    climateNote: "hurricane season from June to November and intense summer heat",
    localFaq: {
      q: "Does Tampa Seguros have an office in Tampa?",
      a: "Yes, our main office is at 400 N Ashley Dr suite 1900, Tampa FL 33602, in downtown Tampa.",
    },
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    regionNote: "the South Shore area, southeast of Tampa",
    hospitalNote: "HCA Florida South Shore Hospital",
    climateNote: "hurricane season from June to November and frequent summer storms",
    localFaq: {
      q: "Do you serve Riverview clients without a local office there?",
      a: "Yes, we help families and businesses in Riverview by phone, WhatsApp and video call, with the same personalized guidance as our Tampa office.",
    },
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    regionNote: "the eastern Tampa corridor",
    hospitalNote: "HCA Florida Brandon Hospital",
    climateNote: "hurricane season from June to November and fast-paced urban growth",
    localFaq: {
      q: "Does Tampa Seguros understand Brandon's specific needs?",
      a: "Yes, Brandon is one of the communities where we help the most families; we know the local providers and carriers common in the area.",
    },
  },
  {
    slug: "wimauma",
    name: "Wimauma",
    county: "southern Hillsborough County",
    regionNote: "a community with a strong agricultural and Hispanic tradition",
    hospitalNote: "hospitals in the South Shore area",
    climateNote: "hurricane season from June to November and warm weather year-round",
    localFaq: {
      q: "Do you offer bilingual guidance for the Wimauma community?",
      a: "Yes, 100% of our guidance is bilingual, designed for communities like Wimauma where many families prefer support in Spanish.",
    },
  },
  {
    slug: "ruskin",
    name: "Ruskin",
    county: "southern Hillsborough County",
    regionNote: "the south shore of Tampa Bay",
    hospitalNote: "hospitals in the South Shore area",
    climateNote: "hurricane season from June to November and coastal storm surge risk",
    localFaq: {
      q: "Does home insurance in Ruskin cover coastal flood risk?",
      a: "Flood coverage is usually purchased separately from a standard home policy; in coastal areas like Ruskin, we review whether you need it based on your exact location.",
    },
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    regionNote: "the region between Tampa and Orlando",
    hospitalNote: "Lakeland Regional Health Medical Center",
    climateNote: "hurricane season from June to November and summer thunderstorms",
    localFaq: {
      q: "Does Tampa Seguros serve outside Hillsborough County, like Lakeland?",
      a: "Yes, we serve clients across Florida, including Polk County and the city of Lakeland, by phone, WhatsApp and video call.",
    },
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "eastern Hillsborough County",
    regionNote: "the Winter Strawberry Capital of the World",
    hospitalNote: "South Florida Baptist Hospital",
    climateNote: "hurricane season from June to November and a year-round agricultural community",
    localFaq: {
      q: "Does Tampa Seguros understand the needs of agricultural workers in Plant City?",
      a: "Yes, we understand the reality of families working in Plant City's agricultural sector and tailor our recommendations to variable schedules and income.",
    },
  },
];
