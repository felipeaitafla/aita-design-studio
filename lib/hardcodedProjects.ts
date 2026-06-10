import type { Project, ProjectCard } from "@/sanity/lib/types";

/**
 * Projects defined directly in code (not in Sanity). The detail page reads
 * `thumbnail.asset.url` directly, so a static `/public` path works as the URL.
 */
const startech: Project = {
  _id: "hardcoded-startech-celulares",
  name: "StarTech Celulares",
  slug: "startech-celulares",
  segment: "Celulares seminovos",
  category: "Landing page",
  year: 2026,
  link: "https://startech-rho.vercel.app/",
  galleryVideo: "/projetos/startech-scroll.mp4",
  description:
    "A marca precisava de um site que transmitisse a confiança e a segurança que um público inteligente e antenado exige para comprar de uma loja de seminovos, sem perder o universo visual e criativo que a StarTech já tinha. Como esse cliente quer um bom negócio sem abrir mão da segurança, colocamos os diferenciais logo de cara e desenhamos a página para conduzir o visitante ao WhatsApp, principal canal de conversão.\n\nO universo visual que a marca já tinha, ligado ao espaço e à ficção científica, abriu espaço para trabalharmos uma versão mais sofisticada disso. Usamos bastante espaço em branco e um ritmo de navegação mais lento e contemplativo. Criamos o efeito de pouso na Lua: ao fim da rolagem, a página desacelera e assenta suavemente. Todo o catálogo foi organizado em seções modulares e fáceis de navegar.",
  thumbnail: {
    asset: {
      _id: "static-startech-thumb",
      url: "/projetos/startech-close-up.webp",
      metadata: {},
    },
    alt: "StarTech Celulares",
  },
  gallery: [],
};

const tutz: Project = {
  _id: "hardcoded-tutz-phone",
  name: "Tutz Phone",
  slug: "tutz-phone",
  segment: "Celulares seminovos",
  category: "Landing page",
  year: 2026,
  link: "https://regular-portion-857373.framer.app/",
  description:
    "A marca precisava de um site que tirasse a Tutz da categoria de \"loja de celular comum\" e a colocasse num patamar aspiracional, à altura dos produtos que vende. Como o cliente não quer só comprar um aparelho, mas viver a experiência de ter aquele aparelho, posicionamos a compra como a realização de um sonho e organizamos a página para reforçar essa percepção de marca premium em cada seção, conduzindo ao WhatsApp.\n\nO eixo criativo foi justamente o \"realizar o sonho\". Em vez de listar produtos de forma seca, construímos uma narrativa em torno do desejo: linguagem aspiracional, produtos apresentados com destaque visual e acabamento cuidado, e uma jornada que valoriza cada etapa da compra como parte da experiência. O resultado é um site que faz o cliente sentir que está entrando em algo especial, não apenas escolhendo um celular, sustentando o posicionamento premium da marca do início ao fim.",
  thumbnail: {
    asset: {
      _id: "static-tutz-thumb",
      url: "/projetos/tutz/511935221387027.67d340835b53c.webp",
      metadata: { dimensions: { width: 1400, height: 684 } },
    },
    alt: "Tutz Phone",
  },
  gallery: [
    {
      _key: "tutz-1",
      asset: {
        _id: "static-tutz-1",
        url: "/projetos/tutz/730e06221387027.6949a14d321a2.gif",
        metadata: { dimensions: { width: 1920, height: 1080 } },
      },
      alt: "Tutz Phone — animação",
    },
    {
      _key: "tutz-2",
      asset: {
        _id: "static-tutz-2",
        url: "/projetos/tutz/a8fdb1221387027.6949a14d319b5.gif",
        metadata: { dimensions: { width: 1920, height: 1080 } },
      },
      alt: "Tutz Phone — animação",
    },
    {
      _key: "tutz-3",
      asset: {
        _id: "static-tutz-3",
        url: "/projetos/tutz/2dd7b0221387027.67d340835c0f4.webp",
        metadata: { dimensions: { width: 1400, height: 4914 } },
      },
      alt: "Tutz Phone — página completa",
    },
  ],
};

const pedeProDindo: Project = {
  _id: "hardcoded-pede-pro-dindo",
  name: "Pede Pro Dindo",
  slug: "pede-pro-dindo",
  segment: "Celulares seminovos",
  category: "Landing page",
  year: 2026,
  link: "https://www.pedeprodindo.com.br/",
  description:
    "A marca precisava de um site que sustentasse a credibilidade de ser Revenda Autorizada Apple e, ao mesmo tempo, explicasse de forma simples por que comprar um seminovo ali é uma escolha segura e inteligente. Como o público ainda tem receio de comprar aparelho usado, colocamos as provas de confiança logo de cara e desenhamos a página para reforçar o posicionamento da marca e o seu valor como rede.\n\nO eixo criativo foi a economia circular, que é o que diferencia a marca. Em vez de tratar isso como conceito abstrato, traduzimos no ciclo concreto de comprar, trocar e vender, mostrando que o cliente entra e permanece nesse fluxo no seu tempo e do seu jeito. A estrutura da página acompanha essa lógica e organiza um catálogo amplo de forma clara, com prova social e comparativo com a concorrência reforçando a decisão de compra ao longo da navegação.",
  thumbnail: {
    asset: {
      _id: "static-ppd-thumb",
      url: "/projetos/DSC08288.jpg",
      metadata: { dimensions: { width: 2048, height: 1365 } },
    },
    alt: "Pede Pro Dindo",
  },
  gallery: [
    {
      _key: "ppd-1",
      asset: {
        _id: "static-ppd-1",
        url: "/projetos/ppd.png",
        metadata: { dimensions: { width: 2560, height: 10516 } },
      },
      alt: "Pede Pro Dindo — página completa",
    },
  ],
};

const cesar: Project = {
  _id: "hardcoded-cesar-genehr",
  name: "Cesar Genehr",
  slug: "cesar-genehr",
  segment: "Palestrante, consultor e escritor",
  category: "Site institucional",
  year: 2026,
  link: "https://cesargenehr.com.br/",
  galleryVideo: "/projetos/cesar-scroll.mp4",
  description:
    "Cesar é palestrante, consultor e escritor com mais de duas décadas de estrada, e a marca precisava de um site à altura dessa autoridade. O desafio era passar a sensação de uma marca pessoal premium logo no primeiro contato, sem cair no clichê de \"guru de palco\". Por isso priorizamos um posicionamento claro e sóbrio, com prova social forte (empresas atendidas, números de impacto e depoimentos densos) que sustentasse a credibilidade e levasse o visitante a procurar contato.\n\nO eixo criativo foi o tom editorial. Tratamos o site quase como um livro: tipografia com presença, frases de impacto usadas como manchetes, bastante respiro entre os blocos e um ritmo de leitura pausado, que combina com alguém que escreve. A trajetória dele aparece em linha do tempo, os livros ganham espaço de destaque e cada seção foi pensada para parecer curada, não vendida, reforçando a percepção de uma marca pessoal sofisticada e consistente.",
  thumbnail: {
    asset: {
      _id: "static-cesar-thumb",
      url: "/projetos/cesar-speaking.webp",
      metadata: { dimensions: { width: 1440, height: 1440 } },
    },
    alt: "Cesar Genehr",
  },
  gallery: [],
};

export const hardcodedProjects: Project[] = [cesar, pedeProDindo, tutz, startech];

export const hardcodedCards: ProjectCard[] = hardcodedProjects.map((p) => ({
  _id: p._id,
  name: p.name,
  slug: p.slug,
  segment: p.segment,
  category: p.category,
  year: p.year,
  thumbnail: null,
  staticThumb: p.thumbnail?.asset.url,
}));

export function getHardcodedProject(slug: string): Project | undefined {
  return hardcodedProjects.find((p) => p.slug === slug);
}
