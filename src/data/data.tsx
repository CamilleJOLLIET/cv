import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'CV de Camille JOLLIET',
  description: "Site construit avec Next.js et TailwindCss",
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Testimonials: 'testimonials',
  Portfolio: 'portfolio'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Camille JOLLIET`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Développeur <strong className="text-stone-100">Front</strong>, passionné d'Art et de nouvelles technologies.
      </p>
    </>
  ),
  // actions: [
  //   {
  //     href: '/assets/resume.pdf',
  //     text: 'Resume',
  //     primary: true,
  //     Icon: ArrowDownTrayIcon,
  //   },
  //   {
  //     href: `#${SectionId.Contact}`,
  //     text: 'Contact',
  //     primary: false,
  //   },
  // ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Mes dix années d’expériences dans le commerce,
  essentiellement centrées sur les produits culturels et multimédias m’ont permis de développer
  une capacité d’expertise pointue au service du client.
  Ayant toujours envie d’apprendre des équipes qui m’entourent et des défis qui me sont proposés,
  je me suis tourné il y a cinq ans vers un secteur qui me passionne depuis toujours : le développement Web.`,
  aboutItems: [
    {label: 'Localité', text: 'Marseille, Bouches-du-Rhône', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Française', Icon: FlagIcon},
    {label: 'Passions', text: 'Dessin, Musique, Randonnée, Voyages', Icon: SparklesIcon},
    {label: 'Études', text: '3W Academy', Icon: AcademicCapIcon},
    {label: 'Emploi', text: 'Disponible', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      {
        name: 'HTML 5',
        level: 9,
        details: 'Sémantique, WebComponents, Accessibilité, SEO'
      },
      {
        name: 'CSS 3',
        level: 9,
        details: 'Responsive, SCSS, BEM, Framework, Design System'
      },
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Tests unitaires, tests d\'intégration',
        level: 8,
        details: 'Jasmine, Karma, Jest'
      },
      {
        name: 'React, Next.js, Vue',
        level: 6,
      }
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'PHP 7',
        level: 6,
        details: 'P.O.O, Symfony 4'
      },
      {
        name: 'SQL, NoSQL',
        level: 6,
        details: 'SGBDR, MySql, MongoDB'
      },
      {
        name: 'Node.js, Nest.js',
        level: 5,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker, Google Cloud Platform',
        level: 6,
      },
      {
        name: 'CI/CD',
        level: 6,
        details: 'Workflows, Pipelines GitHub et Gitlab'
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Janvier 2019',
    location: 'Titre RNCP Niv III (équivalent Bac+2) chez 3W Academy, Marseille',
    title: 'Intégrateur développeur en réalisation d’applications Web',
    content:
    <div>
      <div className="pb-4 text-gray-300">
        <p><b>Intégration à partir de maquettes</b></p>
        <p>Mock-up, dynamique, sémantique, Responsive design, Mobile first, Bootstrap, JQuery, Flexbox, Grid.</p>
      </div>
      <div className="pb-4 text-gray-300">
        <p><b>Création d’une application Vélib’</b></p>
        <p>AJAX, Web API, JQuery.</p>
      </div>
      <div className="pb-4 text-gray-300">
        <p><b>Création d’un réseau social</b></p>
        <p>Authentification, Habilitation simplifiée, C.R.U.D, P.O.O, modèle M.V.C.</p>
      </div>
      <div className="pb-4 text-gray-300">
        <p><b>Création d’un site de restauration</b></p>
        <p>Habilitation fine, système de réservation, de prise de commande avec panier, d’état des lieux et de gestion administrateur, P.O.O, modèle M.V.C.</p>
      </div>
    </div>,
  },
  {
    date: '2005-2006',
    location: 'Faculté d’Aix-en-Provence',
    title: 'L1 d’Arts plastiques'
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2019 - 2024',
    location: 'La Provence - MARSEILLE',
    title: 'Développeur Front - Développeur Senior - Lead Front',
    content: (
      <div className="text-gray-300">
        <div className="pb-4">
          <p className="text-white"><b>Maintenance et évolution des applicatifs existants</b></p>
          <p>Sites desktop, mobile et applications de Laprovence.com et Corsematin.com. Backoffice éditorial.</p>
          <p><i>JS Natif, SCSS, BEM, HTML sémantique.</i></p>
        </div>
        <div className="pb-4">
        <p className="text-white"><b>Création de abonnement.laprovence.com</b></p>
          <p><i>JS Natif, SCSS, BEM, HTML sémantique.</i></p>
        </div>
        <div className="pb-4">
        <p className="text-white"><b>Création de moncompte.laprovence.com</b></p>
          <p><i>Angular 14, Typescript 4.2</i></p>
        </div>
        <div className="pb-4">
        <p className="text-white"><b>Migration Cloud chez GCP, refonte du Backoffice éditorial et des APIs</b></p>
          <p><i>Docker, CI/CD, Angular 14, TypeScript 4.2, OpenAPI</i></p>
        </div>
        <div className="pb-4">
        <p className="text-white"><b>Création du Design System Revolue</b></p>
          <p><i>React 18, Storybook, Chromatics, Versioning, CI/CD</i></p>
        </div>
        <div>
        <p className="text-white"><b>Refonte Laprovence.com et Corsematin.com</b></p>
          <p><i>Déploiement de Revolue, Next.js, SSR</i></p>
        </div>
      </div>
    ),
  },
  {
    date: '2009 - 2019',
    location: 'Géant CASINO Valmante - MARSEILLE',
    title: 'Responsable commercial Culturel et Multimédia',
    content: (
      <div>
        <p className="text-gray-300">Gestion des stocks et animation du secteur.</p>
        <p className="text-gray-300">Positionnement stratégique et suivi des temps forts.</p>
        <p className="text-gray-300">Animation et formation de l'équipe.</p>
        <p className="text-gray-300">Coordination des équipes lors d'implantations ou de rénovations.</p>
      </div>
    ),
  },
  {
    date: '2007 - 2008',
    location: 'Unis-Cité Méditerrannée - MARSEILLE',
    title: 'Volontaire Associatif',
    content: (
      <p className="pb-4 text-gray-300">
        Associations Les Petits Frères des Pauvres, EMMAÜS, ATD 1/4 Monde, AFLAM, Les Têtes de l'Art,
        Banque Alimentaire, Boud'Mer.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'CamilleJOLLIET',
      href: 'https://github.com/CamilleJOLLIET',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/CamilleJOLLIET'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/camille-jolliet-750847179/'},
  {label: 'Mail', Icon: EnvelopeIcon, href: 'mailto:camillejolliet@gmail.com'},
];
