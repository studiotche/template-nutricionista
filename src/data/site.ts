import clientJson from "./client.json";

const siteDefaults = {
  name: "Gladis Feldmann",
  role: "Nutricionista",
  city: "Ivoti",
  state: "RS",
  region: "Ivoti, Estância Velha e atendimento online",
  crn: "19088D",
  credentials: "Nutricionista · CRN 19088D",
  phoneDisplay: "(51) 99815-8026", // Confirmar com a profissional antes da publicação definitiva.
  phoneLink: "5551998158026",
  telLink: "tel:+5551998158026", // Confirmar com a profissional antes da publicação definitiva.
  googleProfile: "https://www.google.com/maps/place/Nutricionista+Gladis+Feldmann/@-29.5959033,-51.1669028,17z/data=!3m1!4b1!4m6!3m5!1s0x951945b100e089a7:0x9377bba161bdae32!8m2!3d-29.5959081!4d-51.1620319!16s%2Fg%2F11rzg3z69l",
  mapsEmbedUrl: "https://maps.google.com/maps?q=-29.5959081,-51.1620319&z=17&hl=pt-BR&output=embed",
  mapsUrl: "https://www.google.com/maps/place/Nutricionista+Gladis+Feldmann/@-29.5959081,-51.1620319,17z",
  seo: {
    title: "Nutricionista em Ivoti e Estância Velha | Gladis Feldmann",
    description: "Nutricionista em Ivoti e Estância Velha, com consultas presenciais e online. Cuidado individualizado para uma alimentação possível e consciente.",
    url: "https://gladisfeldmann.com.br",
    ogImage: "/images/nutricionista-ivoti-hero-gladis.webp",
  },
  hero: {
    eyebrow: "Atendimento presencial e online",
    title: "Nutricionista em Ivoti e Estância Velha, Gladis Feldmann",
    titleHighlight: "Gladis Feldmann",
    tagline: "Sua transformação começa com escolhas que cabem na sua vida.",
    description: "Mais saúde, qualidade de vida e autoestima por meio de uma alimentação simples, consciente e possível, sem dietas impossíveis.",
  },
  about: {
    eyebrow: "Olá, eu sou a Gladis!",
    title: "Nutrição para transformar sua relação com a comida",
    titleHighlight: "sua relação com a comida",
    paragraphs: [
      "Minha paixão pela nutrição nasceu da minha própria jornada em busca de equilíbrio. Aprendi que a alimentação vai muito além da fome: ela também envolve emoções, cultura, rotina e história de vida.",
      "Acredito em uma alimentação livre, consciente, segura e prazerosa. Por isso, não trabalho com dietas restritivas ou com a ideia de simplesmente “fechar a boca”.",
      "Em cada acompanhamento, procuro compreender suas particularidades para construir estratégias realistas, seja para cuidar da saúde, melhorar a qualidade de vida ou buscar um emagrecimento saudável.",
    ],
  },
  assets: {
    logo: "/images/logo-gladisfeldmann.svg",
    hero: "/images/nutricionista-ivoti-hero-gladis.webp",
    heroMobile: "/images/nutricionista-ivoti-gladis-hero-gladis-mobile.webp",
    about: "/images/nutricionista-ivoti-sobre-gladis.webp",
    processBg: "/images/nutricionista-ivoti-gladis.webp",
  },
} as const;

export const specialties = [
  {
    number: "01",
    title: "Emagrecimento saudável",
    text: "Uma abordagem individualizada para conciliar preferências, rotina e objetivos, construindo mudanças graduais sem dietas restritivas.",
    detail: "O foco não é só a balança: são hábitos que cabem na sua vida. Para quem já tentou dietas restritivas e busca um processo sem culpa, o acompanhamento começa com uma avaliação completa e evolui em etapas graduais, com metas realistas.",
  },
  {
    number: "02",
    title: "Doenças crônicas",
    text: "Acompanhamento nutricional para diabetes, hipertensão, alterações de colesterol, triglicerídeos e tireoide, integrado ao cuidado médico.",
    detail: "Uma alimentação que dialoga com o seu tratamento, sem abrir mão do prazer de comer. O plano é construído com base nos exames e nas orientações do seu médico, com ajustes feitos em conjunto ao longo do tempo.",
  },
  {
    number: "03",
    title: "Autoimunes e intolerâncias",
    text: "Adequações alimentares personalizadas para apoiar o manejo de sintomas e as necessidades nutricionais, sempre respeitando o diagnóstico e o tratamento.",
    detail: "Condições como Hashimoto, doenças inflamatórias e intolerâncias pedem ajustes individualizados, nunca generalizações. O trabalho identifica alimentos e padrões que podem apoiar seu bem-estar, respeitando o tratamento conduzido pelo seu médico.",
  },
  {
    number: "04",
    title: "Pré e pós-bariátrica",
    text: "Cuidado nutricional antes e depois da cirurgia para apoiar a adaptação alimentar, a ingestão de nutrientes e a manutenção dos resultados com segurança.",
    detail: "O preparo pré-operatório e a reeducação pós-cirúrgica são decisivos para os resultados. Um plano faseado, sempre em conjunto com a equipe médica, acompanha cada etapa do processo.",
  },
  {
    number: "05",
    title: "Nutrição para gestantes",
    text: "Orientação nutricional em cada trimestre, alinhada ao acompanhamento pré-natal e às necessidades da mãe e do bebê.",
    detail: "Cada trimestre pede ajustes diferentes, do ganho de peso adequado aos nutrientes essenciais, incluindo o manejo de desconfortos comuns da gestação.",
  },
  {
    number: "06",
    title: "Saúde intestinal",
    text: "Planejamento alimentar para síndrome do intestino irritável, doença de Crohn, retocolite e constipação, como parte do cuidado multiprofissional.",
    detail: "Cada caso pede uma abordagem individual: o trabalho identifica gatilhos alimentares e constrói um plano gradual para aliviar sintomas que afetam a rotina.",
  },
  {
    number: "07",
    title: "Comportamento alimentar",
    text: "Suporte nutricional para compulsão e transtornos alimentares, com escuta sem julgamentos e atuação em conjunto com outros profissionais quando necessário.",
    detail: "Compulsão e uma relação difícil com a comida não se resolvem com dieta. Um espaço acolhedor, com estratégias práticas e atuação em conjunto com psicólogos e outros profissionais quando necessário.",
  },
] as const;

export const pillars = [
  ["Nutricional", "Orientações e estratégias construídas a partir das suas necessidades, preferências e objetivos."],
  ["Comportamental", "Atenção à rotina, aos hábitos e às situações que influenciam suas escolhas todos os dias."],
  ["Emocional", "Uma escuta acolhedora para compreender sua relação com a comida, sem culpa ou julgamentos."],
] as const;

const testimonialDefaults = [
  { name: "Neusa Bamberg", date: "22/07/2026", dateTime: "2026-07-22", text: "Profissional muito competente, tirou todas minhas dúvidas. Nunca tive um atendimento nutricional com tamanha eficiência!" },
  { name: "Gabrielli Arus Dorigon", date: "21/07/2026", dateTime: "2026-07-21", text: "Excelente profissional!" },
  { name: "Marcia Vier", date: "15/07/2026", dateTime: "2026-07-15", text: "Estou imensamente agradecida pelo ótimo atendimento em seu consultório. Obrigada por toda atenção e carinho. Com certeza vai fazer muita diferença em minha vida." },
  { name: "Suleide Maria Kaefer", date: "14/07/2026", dateTime: "2026-07-14", text: "Muito bom. Sempre aprendendo mais um pouco." },
  { name: "Agda Erhart", date: "01/07/2026", dateTime: "2026-07-01", text: "Gostei muito, muito atenciosa. Em busca de saúde intestinal!" },
  { name: "Rubia Gomes", date: "17/05/2026", dateTime: "2026-05-17", text: "Nutricionista maravilhosa." },
  { name: "Margarida Finger", date: "26/04/2026", dateTime: "2026-04-26", text: "Melhor nutri da vida! Querida, acessível, humana e excelente profissional. Acompanhamento de verdade!" },
] as const;

export const locations = [
  { city: "Ivoti", address: "Rua Albino Kern, 1719", district: "Sete de Setembro · Ivoti/RS", type: "Presencial" },
  { city: "Estância Velha", address: "Avenida Brasil, 300 · sala 209", district: "Centro · Estância Velha/RS", type: "Presencial" },
  { city: "Atendimento online", address: "Consulta por videochamada", district: "De onde você estiver", type: "Online" },
] as const;

const faqDefaults = [
  ["Onde acontecem as consultas presenciais?", "Os atendimentos presenciais acontecem em Ivoti, na Rua Albino Kern, 1719, e em Estância Velha, na Avenida Brasil, 300, sala 209."],
  ["É possível consultar online?", "Sim. O atendimento online permite realizar a consulta com privacidade e conforto, de onde você estiver."],
  ["Como faço para agendar?", `Clique em qualquer botão de agendamento para conversar diretamente pelo WhatsApp ${siteDefaults.phoneDisplay}.`],
  ["O acompanhamento é personalizado?", "Sim. A proposta considera sua rotina, preferências, objetivos, histórico e contexto, evitando orientações genéricas."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Atende convênio?", "A consulta é particular, com emissão de nota fiscal. Você pode encaminhar a nota ao seu convênio para solicitar reembolso, conforme as regras do seu plano."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Quanto custa a primeira consulta?", "O valor da consulta é informado diretamente pelo WhatsApp. O acompanhamento e sua duração são combinados de acordo com os seus objetivos."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona a consulta online?", "A consulta online acontece por videochamada, com a mesma atenção e privacidade do atendimento presencial. Você recebe as orientações e o plano alimentar por WhatsApp ou e-mail."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Preciso levar exames na primeira consulta?", "Não é obrigatório. Se você tiver exames recentes, traga-os, eles ajudam a avaliar seu quadro. Se não tiver, o atendimento acontece normalmente."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona o primeiro atendimento?", "O primeiro atendimento é uma conversa completa: história de saúde, rotina, preferências e objetivos. A partir dela, é construído um plano realista, em etapas."],
] as const;


// ---------------------------------------------------------------------------
// Camada de personalização: tudo que o Prospecta Leads preenche no client.json
// sobrescreve os defaults acima. O que não vier no client.json mantém o valor
// do template.
// ---------------------------------------------------------------------------

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { -readonly [K in keyof T]: Widen<T[K]> };

type ClientConfig = {
  business?: {
    name?: string;
    category?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
  };
  gbp?: { rating?: number; reviewCount?: number; mapsUrl?: string };
  testimonials?: { author: string; rating: number; text: string; date?: string; source?: string }[];
  faq?: { question: string; answer: string }[];
  about?: { paragraphs?: string[] };
  images?: { desktop?: string; mobile?: string; about?: string; logo?: string };
  seo?: { title?: string; description?: string; keywords?: string[]; locale?: string };
  basePath?: string;
  pagesUrl?: string;
};

const client = clientJson as ClientConfig;

const phoneDigits =
  (client.business?.phone || "").replace(/\D/g, "") || siteDefaults.phoneLink.replace(/\D/g, "");

export const site: Widen<typeof siteDefaults> = {
  ...siteDefaults,
  name: client.business?.name || siteDefaults.name,
  role: client.business?.category || siteDefaults.role,
  city: client.business?.city || siteDefaults.city,
  state: client.business?.state || siteDefaults.state,
  region: [client.business?.city, client.business?.state].filter(Boolean).join(" - ") || siteDefaults.region,
  crn: "",
  credentials: client.business?.category || siteDefaults.credentials,
  phoneDisplay: client.business?.phone || siteDefaults.phoneDisplay,
  phoneLink: phoneDigits,
  telLink: `tel:+${phoneDigits}`,
  googleProfile: client.gbp?.mapsUrl || siteDefaults.googleProfile,
  mapsUrl: client.gbp?.mapsUrl || siteDefaults.mapsUrl,
  seo: {
    ...siteDefaults.seo,
    title: client.seo?.title || siteDefaults.seo.title,
    description: client.seo?.description || siteDefaults.seo.description,
    url: client.pagesUrl || siteDefaults.seo.url,
    ogImage: client.images?.desktop || siteDefaults.seo.ogImage,
  },
  hero: {
    ...siteDefaults.hero,
    title:
      [client.business?.category, client.business?.city ? `em ${client.business.city}` : "", client.business?.name]
        .filter(Boolean)
        .join(", ") || siteDefaults.hero.title,
    titleHighlight: client.business?.name || siteDefaults.hero.titleHighlight,
    description: client.seo?.description || siteDefaults.hero.description,
  },
  about: {
    ...siteDefaults.about,
    paragraphs: client.about?.paragraphs?.length ? [...client.about.paragraphs] : [...siteDefaults.about.paragraphs],
  },
  assets: {
    logo: client.images?.logo || siteDefaults.assets.logo,
    hero: client.images?.desktop || siteDefaults.assets.hero,
    heroMobile: client.images?.mobile || siteDefaults.assets.heroMobile,
    about: client.images?.about || siteDefaults.assets.about,
    processBg: client.images?.desktop || siteDefaults.assets.processBg,
  },
};

export const testimonials = client.testimonials?.length
  ? client.testimonials.map((t) => ({
      name: t.author,
      date: (t.date || "").split("-").reverse().join("/"),
      dateTime: t.date || "",
      text: t.text,
    }))
  : testimonialDefaults;

export const faqs = client.faq?.length
  ? client.faq.map((f) => [f.question, f.answer] as const)
  : faqDefaults;

export const whatsappUrl = `https://wa.me/${site.phoneLink}?text=${encodeURIComponent(
  `Olá, ${site.name}! Quero mais informações sobre as consultas.`,
)}`;
