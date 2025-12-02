import { Component } from '@angular/core';

type LangKey = 'pt' | 'en';

interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

interface ProjectItem {
  title: string;
  role: string;
  link?: string;
  stack: string[];
  highlight: string;
}

interface AchievementItem {
  title: string;
  detail: string;
  icon: string;
}

interface HeroStat {
  label: string;
  value: string;
  hint: string;
}

interface Translation {
  nav: { about: string; projects: string; timeline: string; contact: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  heroStats: HeroStat[];
  about: { title: string; description: string; formationTitle: string };
  formation: TimelineItem[];
  projects: { title: string; subtitle: string; list: ProjectItem[] };
  achievements: { title: string; list: AchievementItem[] };
  timeline: { title: string; list: TimelineItem[] };
  contact: { title: string; subtitle: string; linkedinCta: string; githubCta: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  lang: LangKey = 'pt';

  translations: Record<LangKey, Translation> = {
    pt: {
      nav: {
        about: 'Sobre',
        projects: 'Projetos',
        timeline: 'Trajetória',
        contact: 'Contacto',
      },
      hero: {
        badge: 'Portfólio 2020–2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Desenvolvedor focado em experiências digitais limpas, bilíngues e orientadas a resultado. Freelancer desde 2023, criando soluções em Luau e web.',
        ctaPrimary: 'LinkedIn',
        ctaSecondary: 'Ver projetos',
      },
      heroStats: [
        { label: 'Roblox', value: '10k+', hint: 'visitas totais' },
        { label: 'Freelancer', value: '2023', hint: 'ativo desde' },
      ],
      about: {
        title: 'Sobre',
        description:
          'Transformo ideias em produtos claros: sistemas personalizados em Luau, jogos Roblox com resultados reais e experiências web rápidas. Trabalhei com clientes internacionais e mantenho uma linha do tempo transparente para mostrar evolução e entregas.',
        formationTitle: 'Formação',
      },
      formation: [
        { period: '2020–2023', title: 'INETE · TGPSI', detail: 'Tecnologias de Informação' },
        {
          period: '2023',
          title: 'Estágio · MediaLog Europa',
          detail: 'Pré-ISTEC, foco em bases de desenvolvimento',
        },
        { period: '2023–presente', title: 'ISTEC · CTESP Dev Mobile', detail: 'Mobile e web' },
      ],
      projects: {
        title: 'Projetos',
        subtitle: 'Projetos reais, entregues para produção e com impacto mensurável.',
        list: [
          {
            title: 'Freelancer — Luau',
            role: 'Venda de scripts e sistemas personalizados',
            stack: ['Luau', 'Roblox Studio', 'UI scripting'],
            highlight: 'Entregas sob medida desde 2023, alinhadas a requisitos de cada cliente.',
          },
          {
            title: 'Jogos Roblox',
            role: 'Game dev',
            stack: ['Luau', 'Gameplay', 'Analytics'],
            highlight: 'Mais de 10.000 visitas totais somadas aos jogos publicados.',
          },
          {
            title: 'barryjamesgoodman.com',
            role: 'Website real entregue',
            link: 'https://barryjamesgoodman.com',
            stack: ['Web', 'Performance', 'SEO'],
            highlight: 'Site institucional rápido e claro, publicado e em produção.',
          },
        ],
      },
      achievements: {
        title: 'Conquistas Roblox',
        list: [
          { title: 'Coroa de 100 jogadores', detail: '100 visitantes únicos', icon: '👑' },
          { title: 'Coroa de 1.000 jogadores', detail: '1.000 visitantes únicos', icon: '👑' },
          { title: 'Achievement Medal', detail: 'Evento oficial Roblox', icon: '🏅' },
          { title: '+10.000 visitas totais', detail: 'Jogos publicados', icon: '📈' },
        ],
      },
      timeline: {
        title: 'Trajetória',
        list: [
          { period: '2020–2023', title: 'INETE', detail: 'Formação em TGPSI' },
          { period: '2023', title: 'Estágio', detail: 'MediaLog Europa' },
          { period: '2023–presente', title: 'ISTEC', detail: 'CTESP · Dev Mobile' },
          { period: '2023–presente', title: 'Freelancer', detail: 'Scripts e sistemas em Luau' },
        ],
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Disponível para colaborações, projetos e consultoria.',
        linkedinCta: 'LinkedIn',
        githubCta: 'Ver GitHub',
      },
    },
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        timeline: 'Timeline',
        contact: 'Contact',
      },
      hero: {
        badge: 'Portfolio 2020–2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Developer focused on clean, bilingual, result-driven experiences. Freelancing since 2023, delivering custom systems in Luau and web.',
        ctaPrimary: 'LinkedIn',
        ctaSecondary: 'See projects',
      },
      heroStats: [
        { label: 'Roblox', value: '10k+', hint: 'total visits' },
        { label: 'Freelancer', value: 'Since 2023', hint: 'in production' },
      ],
      about: {
        title: 'About',
        description:
          'I turn ideas into clear products: custom Luau systems, Roblox games with real traction, and fast web experiences. I work with international clients and keep a transparent timeline to show growth and deliveries.',
        formationTitle: 'Education',
      },
      formation: [
        { period: '2020–2023', title: 'INETE · TGPSI', detail: 'IT technologies' },
        {
          period: '2023',
          title: 'Internship · MediaLog Europa',
          detail: 'Pre-ISTEC, development fundamentals',
        },
        { period: '2023–present', title: 'ISTEC · CTESP Mobile Dev', detail: 'Mobile and web' },
      ],
      projects: {
        title: 'Projects',
        subtitle: 'Real engagements, shipped to production with measurable impact.',
        list: [
          {
            title: 'Freelancer — Luau',
            role: 'Custom scripts and systems',
            stack: ['Luau', 'Roblox Studio', 'UI scripting'],
            highlight: 'Tailored deliveries since 2023 for client-specific needs.',
          },
          {
            title: 'Roblox Games',
            role: 'Game dev',
            stack: ['Luau', 'Gameplay', 'Analytics'],
            highlight: 'Over 10,000 total visits across published games.',
          },
          {
            title: 'barryjamesgoodman.com',
            role: 'Live website delivered',
            link: 'https://barryjamesgoodman.com',
            stack: ['Web', 'Performance', 'SEO'],
            highlight: 'Fast and clear institutional site, shipped and live.',
          },
        ],
      },
      achievements: {
        title: 'Roblox Achievements',
        list: [
          { title: '100-player Crown', detail: '100 unique visitors', icon: '👑' },
          { title: '1,000-player Crown', detail: '1,000 unique visitors', icon: '👑' },
          { title: 'Achievement Medal', detail: 'Official Roblox event', icon: '🏅' },
          { title: '10,000+ total visits', detail: 'Across published games', icon: '📈' },
        ],
      },
      timeline: {
        title: 'Timeline',
        list: [
          { period: '2020–2023', title: 'INETE', detail: 'TGPSI studies' },
          { period: '2023', title: 'Internship', detail: 'MediaLog Europa' },
          { period: '2023–present', title: 'ISTEC', detail: 'CTESP · Mobile Dev' },
          { period: '2023–present', title: 'Freelancer', detail: 'Luau scripts and systems' },
        ],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Open for collaborations, projects, and consulting.',
        linkedinCta: 'LinkedIn',
        githubCta: 'See GitHub',
      },
    },
  };

  get t(): Translation {
    return this.translations[this.lang];
  }

  setLanguage(lang: LangKey): void {
    this.lang = lang;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  linkedinLink = 'https://www.linkedin.com/in/pedro-aleixo-1ba4b8256/';
  githubLink = 'https://github.com/4leixo';
}
