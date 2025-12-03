import { Component } from '@angular/core';

type LangKey = 'pt' | 'en';
type ThemeMode = 'light' | 'dark';

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
  highlight?: string;
}

interface AchievementItem {
  title: string;
  detail: string;
  icon: string;
}

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  detail: string;
}

interface Translation {
  nav: { about: string; projects: string; timeline: string; contact: string };
  skills: { title: string; subtitle: string; categories: { label: string; items: string[] }[] };
  experience: { title: string; list: ExperienceItem[] };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  about: { title: string; description: string; formationTitle: string };
  formation: TimelineItem[];
  projects: { title: string; subtitle: string; list: ProjectItem[] };
  achievements: { title: string; list: AchievementItem[] };
  timeline: { title: string; list: TimelineItem[] };
  contact: { title: string; subtitle: string; linkedinCta: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  lang: LangKey = 'en';
  theme: ThemeMode = 'dark'; // default dark

  translations: Record<LangKey, Translation> = {
    pt: {
      nav: { about: 'Sobre mim', projects: 'Projetos', timeline: 'Trajetoria', contact: 'Contacto' },
      skills: {
        title: 'Competencias',
        subtitle: 'Pratica (projetos) e academico (INETE + ISTEC).',
        categories: [
          {
            label: 'Pratica',
            items: [
              'Luau / Roblox Studio',
              'Plugins e sistemas Roblox',
              'C# (ASP.NET MVC)',
              'HTML / CSS / SCSS',
              'JavaScript',
              'SQL',
              'Landing pages',
            ],
          },
          {
            label: 'Academico',
            items: [
              'C (bases INETE)',
              'Java',
              'Kotlin',
              'Swift',
              'React Native',
              'Flutter',
              'Unity',
              'Python',
              'MSSQL / NoSQL',
              'Redes',
              'UX / Usabilidade',
              'Angular (aulas)',
            ],
          },
        ],
      },
      experience: {
        title: 'Experiencia',
        list: [
          {
            period: 'Mar-Jul 2023',
            role: 'Software Developer - Estagio',
            company: 'MediaLog Europa',
            location: 'Lisboa, PT',
            detail:
              'C# + SQL; novos fluxos e melhorias em app; suporte multilingue em site ASP.NET MVC; workflow pull/merge/push.',
          },
          {
            period: '2023-presente',
            role: 'Freelancer - Roblox Dev',
            company: 'Clientes internacionais',
            location: 'Remoto',
            detail: 'Scripts, plugins e sistemas em Luau/Roblox; jogos com tracao real e UI/UX in-game.',
          },
        ],
      },
      hero: {
        badge: 'Portfolio 2020-2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Dev de Roblox e backend: plugins e sistemas em Luau, jogos com tracao real e landing pages rapidas. Freelancer desde 2023 (PT/EN).',
        ctaPrimary: 'LinkedIn',
        ctaSecondary: 'Ver projetos',
      },
      about: {
        title: 'Sobre',
        description:
          'Transformo ideias em produtos claros: plugins e sistemas em Luau, jogos com resultados reais e experiencias web rapidas. Formacao tecnica em TGPSI (INETE) e Dev Mobile (ISTEC, 2.º ano).',
        formationTitle: 'Formacao',
      },
      formation: [
        { period: '2020-2023', title: 'INETE - TGPSI', detail: 'Gestao e Programacao de Sistemas Informaticos' },
        { period: '2023', title: 'Estagio curricular - MediaLog Europa', detail: 'Estagio final do INETE, bases de desenvolvimento' },
        { period: '2023-presente', title: 'ISTEC - CTESP Dev Mobile', detail: '2.º ano, foco em mobile e web' },
      ],
      projects: {
        title: 'Projetos',
        subtitle: 'Plugins, sistemas e jogos para Roblox — e um site real em producao.',
        list: [
          {
            title: 'Plugins Roblox Studio',
            role: 'Tooling - Automacao',
            stack: ['Luau', 'Roblox Studio', 'UX de ferramenta'],
            highlight: 'Plugins para acelerar fluxos no Studio e padronizar entregas.',
          },
          {
            title: 'Sistemas & Scripts Roblox',
            role: 'Freelancer',
            stack: ['Luau', 'UI scripting', 'Backend in-game'],
            highlight: 'Solucoes sob medida desde 2023 para clientes internacionais.',
          },
          {
            title: 'Jogos Roblox',
            role: 'Game dev',
            stack: ['Luau', 'Gameplay', 'Analytics'],
            highlight: 'Mais de 10.000 visitas totais em jogos publicados.',
          },
          {
            title: 'barryjamesgoodman.com',
            role: 'Website real entregue',
            link: 'https://barryjamesgoodman.com',
            stack: ['Web', 'Performance', 'SEO'],
            highlight: 'Landing institucional rapida, publicada e mantida.',
          },
        ],
      },
      achievements: {
        title: 'Conquistas Roblox',
        list: [
          { title: 'Coroa de 100 jogadores', detail: '100 visitantes unicos', icon: '👑' },
          { title: 'Coroa de 1.000 jogadores', detail: '1.000 visitantes unicos', icon: '👑' },
          { title: 'Achievement Medal', detail: 'Evento oficial Roblox', icon: '🏅' },
          { title: '+10.000 visitas totais', detail: 'Jogos publicados', icon: '📈' },
        ],
      },
      timeline: {
        title: 'Trajetoria',
        list: [
          { period: '2020-2023', title: 'INETE', detail: 'Curso TGPSI' },
          { period: '2023', title: 'Estagio', detail: 'MediaLog Europa (curricular INETE)' },
          { period: '2023-presente', title: 'ISTEC', detail: 'CTESP - Dev Mobile (2.º ano)' },
          { period: '2023-presente', title: 'Freelancer', detail: 'Scripts, plugins e sistemas em Luau' },
        ],
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Disponivel para colaborações, projetos e consultoria.',
        linkedinCta: 'LinkedIn',
      },
    },
    en: {
      nav: { about: 'About me', projects: 'Projects', timeline: 'Timeline', contact: 'Contact' },
      skills: {
        title: 'Skills',
        subtitle: 'What I use in projects and what I covered academically (INETE + ISTEC).',
        categories: [
          {
            label: 'Practical',
            items: [
              'Luau / Roblox Studio',
              'Roblox plugins & systems',
              'C# (ASP.NET MVC)',
              'HTML / CSS / SCSS',
              'JavaScript',
              'SQL',
              'Landing pages',
            ],
          },
          {
            label: 'Academic',
            items: [
              'C (foundations)',
              'Java',
              'Kotlin',
              'Swift',
              'React Native',
              'Flutter',
              'Unity',
              'Python',
              'MSSQL / NoSQL',
              'Networks',
              'UX / Usability',
              'Angular (classes)',
            ],
          },
        ],
      },
      experience: {
        title: 'Experience',
        list: [
          {
            period: 'Mar-Jul 2023',
            role: 'Software Developer - Intern',
            company: 'MediaLog Europa',
            location: 'Lisbon, PT',
            detail:
              'C# + SQL; new flows and enhancements; multilingual support for ASP.NET MVC site; pull/merge/push workflow.',
          },
          {
            period: '2023-present',
            role: 'Freelancer - Roblox Dev',
            company: 'International clients',
            location: 'Remote',
            detail: 'Scripts, plugins, and systems in Luau/Roblox; games with traction and in-game UI/UX.',
          },
        ],
      },
      hero: {
        badge: 'Portfolio 2020-2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Roblox and backend dev: plugins and systems in Luau, games with traction, plus fast, clean landing pages. Freelancing since 2023 (PT/EN).',
        ctaPrimary: 'LinkedIn',
        ctaSecondary: 'See projects',
      },
      about: {
        title: 'About',
        description:
          'I turn ideas into clear products: Luau plugins and systems, Roblox games with real traction, and fast web experiences. Training in TGPSI (INETE) and Dev Mobile (ISTEC, 2nd year).',
        formationTitle: 'Education',
      },
      formation: [
        { period: '2020-2023', title: 'INETE - TGPSI', detail: 'IT management & programming (vocational)' },
        { period: '2023', title: 'Curricular internship - MediaLog Europa', detail: 'Final INETE internship' },
        { period: '2023-present', title: 'ISTEC - CTESP Mobile Dev', detail: '2nd year, mobile & web' },
      ],
      projects: {
        title: 'Projects',
        subtitle: 'Roblox plugins, systems, and games — plus a shipped production website.',
        list: [
          {
            title: 'Roblox Studio Plugins',
            role: 'Tooling - Automation',
            stack: ['Luau', 'Roblox Studio', 'Tool UX'],
            highlight: 'Plugins to speed up Studio workflows and standardize delivery.',
          },
          {
            title: 'Roblox Systems & Scripts',
            role: 'Freelancer',
            stack: ['Luau', 'UI scripting', 'In-game backend'],
            highlight: 'Tailored solutions since 2023 for international clients.',
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
            highlight: 'Fast institutional landing, shipped and maintained.',
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
          { period: '2020-2023', title: 'INETE', detail: 'TGPSI studies' },
          { period: '2023', title: 'Internship', detail: 'MediaLog Europa (curricular INETE)' },
          { period: '2023-present', title: 'ISTEC', detail: 'CTESP - Mobile Dev (2nd year)' },
          { period: '2023-present', title: 'Freelancer', detail: 'Scripts, plugins, and systems in Luau' },
        ],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Open for collaborations, projects, and consulting.',
        linkedinCta: 'LinkedIn',
      },
    },
  };

  get t(): Translation {
    return this.translations[this.lang];
  }

  get timelineReversed(): TimelineItem[] {
    return [...this.t.timeline.list].reverse();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  setLanguage(lang: LangKey): void {
    this.lang = lang;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  linkedinLink = 'https://www.linkedin.com/in/pedro-aleixo-1ba4b8256/';
}
