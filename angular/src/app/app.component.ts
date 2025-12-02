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
  theme: ThemeMode = 'light';

  translations: Record<LangKey, Translation> = {
    pt: {
      nav: { about: 'Sobre', projects: 'Projetos', timeline: 'Trajetória', contact: 'Contacto' },
      skills: {
        title: 'Competências',
        subtitle: 'Ferramentas e linguagens que uso (INETE + ISTEC).',
        categories: [
          { label: 'Roblox', items: ['Luau', 'Roblox Studio', 'Plugins', 'Gameplay', 'UI scripting'] },
          { label: 'Backend / Web', items: ['C (bases INETE)', 'C# (ASP.NET MVC)', 'SQL', 'HTML/CSS/SCSS', 'JavaScript', 'Angular'] },
          { label: 'Mobile (ISTEC)', items: ['Android (Java/Kotlin)', 'Swift', 'React Native', 'Flutter'] },
          { label: 'Académico', items: ['Java', 'C#', 'Python', 'MSSQL / NoSQL', 'Redes', 'UX/Usabilidade'] },
        ],
      },
      experience: {
        title: 'Experiência',
        list: [
          {
            period: 'Mar-Jul 2023',
            role: 'Software Developer · Estágio',
            company: 'MediaLog Europa',
            location: 'Lisboa, PT',
            detail:
              'C# + SQL; novos fluxos e melhorias em app; suporte multilingue em site ASP.NET MVC; workflow pull/merge/push.',
          },
        ],
      },
      hero: {
        badge: 'Portfólio 2020-2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Dev de Roblox e backend: plugins, sistemas em Luau e jogos com tração real. Também crio landing pages rápidas e claras. Freelancer desde 2023 (PT/EN).',
        ctaPrimary: 'LinkedIn',
        ctaSecondary: 'Ver projetos',
      },
      about: {
        title: 'Sobre',
        description:
          'Transformo ideias em produtos claros: plugins e sistemas em Luau, jogos com resultados reais e experiências web rápidas. Formação técnica em TGPSI (INETE) e Dev Mobile (ISTEC, 2.º ano).',
        formationTitle: 'Formação',
      },
      formation: [
        { period: '2020-2023', title: 'INETE · TGPSI', detail: 'Gestão e Programação de Sistemas Informáticos' },
        { period: '2023', title: 'Estágio curricular · MediaLog Europa', detail: 'Estágio final do INETE, bases de desenvolvimento' },
        { period: '2023-presente', title: 'ISTEC · CTESP Dev Mobile', detail: '2.º ano, foco em mobile e web' },
      ],
      projects: {
        title: 'Projetos',
        subtitle: 'Plugins, sistemas e jogos para Roblox — e um site real em produção.',
        list: [
          {
            title: 'Plugins Roblox Studio',
            role: 'Tooling · Automação',
            stack: ['Luau', 'Roblox Studio', 'UX de ferramenta'],
            highlight: 'Plugins para acelerar fluxos no Studio e padronizar entregas.',
          },
          {
            title: 'Sistemas & Scripts Roblox',
            role: 'Freelancer',
            stack: ['Luau', 'UI scripting', 'Backend in-game'],
            highlight: 'Soluções sob medida desde 2023 para clientes internacionais.',
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
            highlight: 'Landing institucional rápida, publicada e mantida.',
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
          { period: '2020-2023', title: 'INETE', detail: 'Curso TGPSI' },
          { period: '2023', title: 'Estágio', detail: 'MediaLog Europa (curricular INETE)' },
          { period: '2023-presente', title: 'ISTEC', detail: 'CTESP · Dev Mobile (2.º ano)' },
          { period: '2023-presente', title: 'Freelancer', detail: 'Scripts, plugins e sistemas em Luau' },
        ],
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Disponível para colaborações, projetos e consultoria.',
        linkedinCta: 'LinkedIn',
      },
    },
    en: {
      nav: { about: 'About', projects: 'Projects', timeline: 'Timeline', contact: 'Contact' },
      skills: {
        title: 'Skills',
        subtitle: 'Tools and languages I use daily and covered academically (INETE + ISTEC).',
        categories: [
          { label: 'Roblox', items: ['Luau', 'Roblox Studio', 'Plugins', 'Gameplay', 'UI scripting'] },
          { label: 'Backend / Web', items: ['C (foundations)', 'C# (ASP.NET MVC)', 'SQL', 'HTML/CSS/SCSS', 'JavaScript', 'Angular'] },
          { label: 'Mobile (ISTEC)', items: ['Android (Java/Kotlin)', 'Swift', 'React Native', 'Flutter'] },
          { label: 'Academic', items: ['Java', 'C#', 'Python', 'MSSQL / NoSQL', 'Networks', 'UX/Usability'] },
        ],
      },
      experience: {
        title: 'Experience',
        list: [
          {
            period: 'Mar-Jul 2023',
            role: 'Software Developer · Intern',
            company: 'MediaLog Europa',
            location: 'Lisbon, PT',
            detail:
              'C# + SQL; new flows and enhancements; multilingual support for ASP.NET MVC site; pull/merge/push workflow.',
          },
        ],
      },
      hero: {
        badge: 'Portfolio 2020-2025',
        title: 'Pedro Aleixo',
        subtitle:
          'Roblox and backend dev: productivity plugins, Luau systems, games with traction, plus fast, clean landing pages. Freelancing since 2023 (PT/EN).',
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
        { period: '2020-2023', title: 'INETE · TGPSI', detail: 'IT management & programming (vocational)' },
        { period: '2023', title: 'Curricular internship · MediaLog Europa', detail: 'Final INETE internship' },
        { period: '2023-present', title: 'ISTEC · CTESP Mobile Dev', detail: '2nd year, mobile & web' },
      ],
      projects: {
        title: 'Projects',
        subtitle: 'Roblox plugins, systems, and games — plus a shipped production website.',
        list: [
          {
            title: 'Roblox Studio Plugins',
            role: 'Tooling · Automation',
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
          { period: '2023-present', title: 'ISTEC', detail: 'CTESP · Mobile Dev (2nd year)' },
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
