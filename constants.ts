
import { Project, Experience, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "HAMIDEDDINE MOUAD",
  title: "DÉVELOPPEUR WEB FULL STACK",
  email: "hamideddinemouad@gmail.com",
  phone: "0637275511",
  github: "Hamideddinemouad",
  linkedin: "mouad-hamideddine",
  location: "Casablanca, Maroc",
  bio: "Développeur Full-Stack polyvalent avec une solide expérience en analyse de contenus et en marchés numériques. Actuellement en formation d'excellence à YouCode, je combine une expertise technique (React, Node.js, Laravel) avec une vision stratégique du produit.",
  status: "Prêt pour de nouveaux défis technologiques",
  whatsapp_number : "+212637275511"
};

export const SOFT_SKILLS = [
  { name: "Analyse Critique", desc: "Expertise en évaluation de contenus et détection de patterns complexes." },
  { name: "Gestion des Risques", desc: "Expérience acquise en trading de biens numériques pour sécuriser les transactions." },
  { name: "Collaboration Agile", desc: "Habitué aux outils Jira et Trello pour un suivi de projet millimétré." },
  { name: "Adaptabilité", desc: "Capacité à pivoter rapidement entre différentes stacks technologiques (PHP/Node.js)." }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Développeur Web Full Stack (Stage)",
    company: "Assin Sarl",
    location: "Casablanca",
    period: "07/2025 - 09/2025",
    description: "Conception et développement du site web officiel. Mise en place d'un système robuste de gestion des employés utilisant Laravel et MySQL."
  },
  {
    role: "Trader en biens numériques",
    company: "Indépendant",
    location: "Casablanca",
    period: "01/2021 - 05/2024",
    description: "Gestion complète d'une plateforme de vente de monnaie virtuelle : sourcing, logistique des commandes et sécurisation des paiements."
  },
  {
    role: "Analyste de contenus",
    company: "Majorel",
    location: "Casablanca",
    period: "11/2019 - 12/2021",
    description: "Évaluation de contenus numériques et collaboration avec des systèmes d'IA pour la sécurité des réseaux sociaux."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Blood Bank Management System",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS"],
    description:
      "Plateforme full-stack de gestion des dons de sang avec dashboards par role, mode demo rapide, suivi d'inventaire, demandes d'hopitaux et documentation Swagger.",
    links: [
      {
        label: "Acceder au site",
        url: "https://blood-management-bank-front.vercel.app",
      },
      {
        label: "Voir le code",
        url: "https://github.com/hamideddinemouad/blood-management-bank",
      },
    ],
    api: {
      baseUrl: "https://blood-management-bank-api.vercel.app",
      docsUrl: "https://blood-management-bank-api.vercel.app/api/doc",
      note: "Swagger JSON disponible sur /api/doc.json.",
    },
  },
  {
    title: "Swish CMS",
    tech: ["Next.js", "TypeScript", "Nest.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "CMS multi-tenant oriente produit avec onboarding, verification de sous-domaines, pages publiques par tenant et edition structuree entre contenu, design et structure.",
    links: [
      {
        label: "Acceder au site",
        url: "https://www.swish.ltd",
      },
      {
        label: "Voir le code",
        url: "https://github.com/hamideddinemouad/Swish-CMS",
      },
    ],
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Nest.js", "PHP", "Laravel"]
  },
  {
    name: "Bases de données",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Architecture & Outils",
    skills: ["Git", "Docker", "POO", "MVC", "UML", "Jira", "Trello"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "YouCode Safi (UM6P)",
    degree: "Développement Web Full Stack",
    period: "2024 - 2026",
    details: "Formation intensive orientée projet et autonomie."
  },
  {
    institution: "Faculté des Lettres AinChok",
    degree: "Sciences Humaines",
    period: "2016 - 2019",
    details: "Casablanca"
  },
  {
    institution: "Faculté des Sciences Hassan II",
    degree: "Sciences Économiques",
    period: "2013 - 2016",
    details: "Casablanca"
  },
  {
    institution: "Baccalauréat",
    degree: "Sciences de la Vie et de la Terre",
    period: "2012 - 2013",
    details: "Diplôme initial scientifique."
  }
];

export const LANGUAGES = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "C1 - Avancé" },
  { name: "Anglais", level: "C1 - Avancé" }
];

export const INTERESTS = [
  "Trading Numérique",
  "Nouvelles Technologies",
  "Analyse de Données",
  "E-commerce",
  "Intelligence Artificielle"
];
