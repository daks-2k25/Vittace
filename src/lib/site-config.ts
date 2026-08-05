import type {
  AboutContent,
  AuthorityBadge,
  BusinessHours,
  CtaSectionContent,
  Differential,
  GalleryItem,
  HeroContent,
  NavLink,
  Service,
  SocialLink,
  Testimonial,
} from "@/types/site";

/**
 * Fonte única de conteúdo do site. Campos marcados com TODO usam
 * placeholder até os dados reais da clínica serem enviados.
 */
export const siteConfig = {
  name: "Vittace",
  tagline: "Odontologia e Medicina Estética",
  description:
    "Odontologia e medicina estética reunidas em um só endereço, com planejamento personalizado para cada rosto e cada sorriso.",

  // TODO: confirmar telefone/WhatsApp oficial
  phone: "+55 (00) 00000-0000",
  whatsapp: "5500000000000",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação na Vittace.",
  email: "contato@vittace.com.br",

  // TODO: confirmar endereço completo
  address: {
    street: "Endereço a confirmar",
    city: "Cidade — UF",
    zip: "",
  },

  hours: [
    { days: "Segunda a Sexta", hours: "09h às 19h" },
    { days: "Sábado", hours: "09h às 13h" },
  ] satisfies BusinessHours[],

  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
  ] satisfies SocialLink[],
} as const;

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const hero: HeroContent = {
  eyebrow: "Vittace — Odontologia e Medicina Estética",
  headline: "Seu sorriso. Sua beleza. Sua melhor versão.",
  subheadline:
    "Odontologia e medicina estética reunidas em um só endereço, com planejamento personalizado para cada rosto e cada sorriso.",
  ctaLabel: "Agendar pelo WhatsApp",
  microcopy: "Resposta rápida, sem compromisso.",
  image: "/images/hero/fachada-vittace.png",
};

// Faixa de autoridade — badges qualitativos e defensáveis, sem números
// fabricados. Se a clínica confirmar métricas reais (anos de atuação,
// nº de pacientes, avaliação média), trocar por AuthorityStat numérico.
export const authorityBadges: AuthorityBadge[] = [
  { icon: "GraduationCap", label: "Profissionais especializados" },
  { icon: "Layers", label: "Odontologia + Medicina Estética" },
  { icon: "HeartHandshake", label: "Atendimento personalizado" },
  { icon: "MessageCircle", label: "Agendamento rápido via WhatsApp" },
];

export const about: AboutContent = {
  eyebrow: "A Clínica",
  title: "Odontologia e estética, sob um mesmo olhar de cuidado",
  paragraphs: [
    "A Vittace nasceu de uma constatação simples: o sorriso e a pele contam a mesma história — a de como alguém se sente ao se olhar no espelho. Por isso reunimos, em um único endereço, a odontologia e a medicina estética, planejadas em conjunto para cada paciente.",
    "Cada atendimento começa antes da cadeira: entendemos sua rotina, suas referências estéticas e o que te incomoda hoje, para desenhar um plano de tratamento que faz sentido para você — não um protocolo padrão.",
    "O espaço foi pensado para reduzir o desconforto típico do consultório: ambientes privados, consultas sem pressa e uma equipe que acompanha cada etapa do resultado.",
  ],
  highlights: [
    { icon: "Compass", label: "Plano de tratamento sob medida" },
    { icon: "Lock", label: "Atendimento privado e discreto" },
    { icon: "Clock", label: "Consultas sem pressa" },
  ],
  image: "/images/clinica/recepcao.png",
};

// TODO: substituir/validar pela lista real de tratamentos da Vittace.
// `featured: true` marca os 2 carros-chefe (1 por pilar) com destaque maior.
export const services: Service[] = [
  {
    slug: "estetica-dental",
    title: "Estética Dental",
    description:
      "Lentes, facetas e clareamento planejados a partir do seu rosto — não de um sorriso padronizado.",
    icon: "Smile",
    pillar: "odontologia",
    featured: true,
  },
  {
    slug: "harmonizacao-facial",
    title: "Harmonização Facial",
    description:
      "Ajustes pontuais que preservam sua expressão natural, sem apagar o que te torna reconhecível.",
    icon: "Sparkles",
    pillar: "estetica",
    featured: true,
  },
  {
    slug: "implantodontia",
    title: "Implantodontia",
    description:
      "Reabilitação oral com planejamento digital, para função e estética caminharem juntas.",
    icon: "ShieldCheck",
    pillar: "odontologia",
  },
  {
    slug: "skincare-avancado",
    title: "Skincare Avançado",
    description:
      "Protocolos faciais contínuos para manter, entre um procedimento e outro, a saúde da pele.",
    icon: "Droplet",
    pillar: "estetica",
  },
];

// TODO: validar/ajustar diferenciais com a clínica
export const differentials: Differential[] = [
  {
    title: "Profissionais Especializados",
    description:
      "Time multidisciplinar que conversa entre si — odontologia e estética planejadas em conjunto, não em consultórios separados.",
    icon: "GraduationCap",
  },
  {
    title: "Tecnologia de Ponta",
    description:
      "Planejamento digital e equipamentos atualizados para diagnósticos precisos e resultados previsíveis.",
    icon: "Cpu",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Nenhum plano de tratamento é copiado do anterior — cada rosto e cada sorriso pedem uma leitura própria.",
    icon: "HeartHandshake",
  },
  {
    title: "Estrutura Confortável",
    description:
      "Ambientes privados e consultas sem pressa, pensados para reduzir a ansiedade do consultório tradicional.",
    icon: "Building2",
  },
];

// Imagem de apoio da seção Diferenciais (sala de atendimento odontológico)
export const differentialsImage = "/images/clinica/sala-odontologia-tecnologia.png";

// TODO: substituir por depoimentos reais de pacientes (nome/foto com autorização)
export const testimonials: Testimonial[] = [
  {
    name: "Paciente Vittace — Estética Dental",
    quote:
      "Fui buscando resolver o clareamento e saí com um plano que também considerou o formato do meu rosto. Não esperava esse nível de atenção ao detalhe.",
    rating: 5,
  },
  {
    name: "Paciente Vittace — Harmonização Facial",
    quote:
      "O que mais me marcou foi não ter saído com uma cara 'diferente' — só uma versão mais descansada de mim mesma.",
    rating: 5,
  },
  {
    name: "Paciente Vittace — Implantodontia",
    quote:
      "Expliquei minha rotina corrida e o plano de tratamento foi ajustado a ela, não o contrário.",
    rating: 5,
  },
];

// Ainda não recebemos fotos de resultados/antes-e-depois — por isso a
// galeria traz apenas o que temos confirmado: a equipe e o ambiente real
// da clínica. Adicionar categoria "Resultado"/"Antes e depois" apenas
// quando essas imagens forem enviadas.
export const gallery: GalleryItem[] = [
  {
    label: "Neiva — Odontologia",
    alt: "Neiva, responsável pela área de odontologia da Vittace",
    category: "Equipe",
    src: "/images/equipe/neiva.png",
  },
  {
    label: "Maria — Estética Facial",
    alt: "Maria, responsável pela área de estética da Vittace",
    category: "Equipe",
    src: "/images/equipe/maria.png",
  },
  {
    label: "Sala de Odontologia",
    alt: "Sala de atendimento odontológico da Vittace",
    category: "Ambiente",
    src: "/images/galeria/sala-odontologia.png",
  },
  {
    label: "Sala de Estética",
    alt: "Sala de atendimento de estética facial da Vittace",
    category: "Ambiente",
    src: "/images/galeria/sala-estetica.png",
  },
  {
    label: "Recepção",
    alt: "Recepção da clínica Vittace",
    category: "Ambiente",
    src: "/images/galeria/lobby.png",
  },
  {
    label: "Área de Espera",
    alt: "Área de espera e lounge da clínica Vittace",
    category: "Ambiente",
    src: "/images/galeria/lounge.png",
  },
];

export const finalCta: CtaSectionContent = {
  eyebrow: "Vamos conversar?",
  title: "Agende sua avaliação e descubra o melhor tratamento para você.",
  description:
    "Fale agora com nossa equipe pelo WhatsApp e receba orientação personalizada.",
  ctaLabel: "Chamar no WhatsApp",
  image: "/images/clinica/consultorio.png",
};
