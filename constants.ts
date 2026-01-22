
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
    title: "FleetTrack",
    tech: ["React", "Node.js", "Express", "Mongoose", "Jest", "Docker"],
    description: "Solution SaaS de gestion de flotte permettant le suivi précis du kilométrage, de la consommation et de l'activité des chauffeurs."
  },
  {
    title: "LocalMind",
    tech: ["Laravel", "PostgreSQL", "Tailwind CSS", "Vanilla JS", "Blade"],
    description: "Plateforme communautaire géolocalisée permettant d'obtenir des réponses d'utilisateurs à proximité immédiate."
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
