import React, { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Terminal,
  BookOpen,
  Briefcase,
  Globe,
  Lightbulb,
  Search,
  ShieldCheck,
  Users,
  Zap,
  Activity,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

import { Section } from "./components/Section";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  EDUCATION,
  LANGUAGES,
  SOFT_SKILLS,
} from "./constants";

type TechIconProps = { name: string; size?: string };

const TechIcon = ({ name, size = "w-8 h-8" }: TechIconProps) => {
  const slugMap: Record<string, string> = {
    React: "react",
    "Node.js": "nodedotjs",
    Express: "express",
    "Nest.js": "nestjs",
    PHP: "php",
    Laravel: "laravel",
    PostgreSQL: "postgresql",
    MySQL: "mysql",
    MongoDB: "mongodb",
    "Tailwind CSS": "tailwindcss",
    JavaScript: "javascript",
    HTML5: "html5",
    CSS3: "css3",
    Docker: "docker",
    Git: "git",
    Jira: "jira",
    Trello: "trello",
    Python: "python",
    Mongoose: "mongodb",
    Jest: "jest",
    UML: "uml",
    POO: "java",
    MVC: "laravel",
  };

  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, "");

  return (
    <div className="flex flex-col items-center gap-2 group cursor-help">
      <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-blue-500/30 group-hover:-translate-y-1 transition-all duration-300">
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          className={`${size} group-hover:scale-110 transition-transform`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              name
            )}&background=f8fafc&color=2563eb&bold=true`;
          }}
        />
      </div>
      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
        {name}
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSkills = useMemo(() => {
    // Pour mobile: limiter pour éviter trop de hauteur/scroll et garder un rendu clean
    const flat = SKILLS.flatMap((cat) => cat.skills);
    return flat.slice(0, 12);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen text-slate-600 bg-white selection:bg-blue-100 font-inter">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a
            href="#about"
            className="flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20 italic">
              M
            </div>
            <span className="text-[11px] sm:text-sm font-black text-slate-900 tracking-[0.2em] uppercase hidden sm:block">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              Vision
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Expertise
            </a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projets
            </a>
            <a href="#career" className="hover:text-blue-600 transition-colors">
              Parcours
            </a>
            <a href="#others" className="hover:text-blue-600 transition-colors">
              Atouts
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 active:scale-95 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 text-[11px] font-black uppercase tracking-widest text-slate-600">
              <a href="#about" onClick={closeMobileMenu} className="py-2">
                Vision
              </a>
              <a href="#skills" onClick={closeMobileMenu} className="py-2">
                Expertise
              </a>
              <a href="#projects" onClick={closeMobileMenu} className="py-2">
                Projets
              </a>
              <a href="#career" onClick={closeMobileMenu} className="py-2">
                Parcours
              </a>
              <a href="#others" onClick={closeMobileMenu} className="py-2">
                Atouts
              </a>
              <div className="pt-3 flex gap-3">
                <a
                  href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={`https://github.com/${PERSONAL_INFO.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="pt-28 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-7 sm:space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase">
              <Activity className="w-3 h-3" /> Architecte de Solutions Digitales
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase">
              Javascript <br />
              <span className="text-gradient italic">Developer.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp_number}`}
                aria-label="Contacter sur WhatsApp"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>

              <div className="flex gap-3 sm:gap-4">
                <a
                  href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/40 text-slate-400 hover:text-blue-600 transition-all"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href={`https://github.com/${PERSONAL_INFO.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/40 text-slate-400 hover:text-blue-600 transition-all"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Mini stack (mobile-friendly) */}
            <div className="lg:hidden pt-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                Stack principale
              </div>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                {heroSkills.map((s, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <TechIcon name={s} size="w-7 h-7" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Big skills panel (desktop only) */}
          <div className="relative group hidden lg:block">
            <div className="absolute -inset-10 bg-blue-100/50 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-square rounded-[60px] bg-slate-50 border-8 border-white shadow-2xl overflow-hidden p-8 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8">
                {SKILLS.flatMap((cat) => cat.skills.slice(0, 4)).map((s, i) => (
                  <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                    <TechIcon name={s} size="w-10 h-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <Section id="skills" title="Expertise Technique">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-12">
          {SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {cat.name}
              </h4>

              {/* Mobile: grid plus dense */}
              <div className="grid grid-cols-4 sm:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-3 sm:gap-x-4">
                {cat.skills.map((skill, i) => (
                  <TechIcon key={i} name={skill} size="w-7 h-7 sm:w-8 sm:h-8" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projets Réalisés">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 border border-slate-100 hover:border-blue-500/20 hover:shadow-2xl transition-all duration-700 flex flex-col"
            >
              <div className="flex justify-between items-start mb-8 sm:mb-12">
                <div className="p-4 sm:p-5 rounded-3xl bg-blue-50 text-blue-600">
                  <Terminal className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex gap-3 sm:gap-4">
                  {project.tech?.[0] ? <TechIcon name={project.tech[0]} size="w-6 h-6" /> : null}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 sm:mb-6 uppercase tracking-tighter italic">
                {project.title}
              </h3>

              <p className="text-slate-500 font-medium mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-slate-50">
                {project.tech.map((t: string, i: number) => (
                  <TechIcon key={i} name={t} size="w-6 h-6" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CAREER */}
      <Section id="career" title="Parcours & Formation">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Experiences */}
          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-blue-600" /> Expériences
            </h3>

            <div className="space-y-10 sm:space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-9 sm:pl-12 border-l-2 border-slate-100 hover:border-blue-600 transition-all group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-600 transition-all"></div>
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">
                    {exp.period}
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 uppercase tracking-tight">
                    {exp.role}
                  </h4>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-5 sm:mb-6">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <BookOpen className="w-6 h-6 text-blue-600" /> Éducation
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
                >
                  <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
                    {edu.institution}
                  </h4>
                  <p className="text-blue-600 font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">
                    {edu.degree}
                  </p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    {edu.period} • {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* OTHERS */}
      <Section id="others" title="Atouts Complémentaires">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Soft skills */}
          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Lightbulb className="w-6 h-6 text-yellow-500" /> Soft Skills
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {SOFT_SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600">
                    {idx === 0 && <Search className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                    {idx === 3 && <Zap className="w-5 h-5" />}
                  </div>
                  <h4 className="font-black text-xs text-slate-900 uppercase tracking-widest">
                    {skill.name}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-8 sm:space-y-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Globe className="w-6 h-6 text-blue-600" /> Langues
            </h3>

            <div className="space-y-7 sm:space-y-8 p-7 sm:p-10 rounded-[28px] sm:rounded-[40px] bg-slate-900 text-white">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {lang.name}
                    </span>
                    <span className="text-blue-400 text-[9px] font-black uppercase tracking-widest">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: lang.name === "Arabe" ? "100%" : "85%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[1.0]">
            PRÊT POUR <br className="hidden sm:block" /> LE PROCHAIN DÉFI.
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 w-full">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white transition-all"
            >
              Appeler Mouad
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp_number}`}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-green-500 text-white font-black uppercase tracking-widest text-[11px] sm:text-xs hover:bg-green-600 transition-all"
            >
              WhatsApp
            </a>
          </div>

          <div className="pt-6 sm:pt-10 flex flex-wrap justify-center gap-6 sm:gap-12 text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">
            <a
              href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
            <a
              href={`https://github.com/${PERSONAL_INFO.github}`}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              Github
            </a>
            <span>© 2025 HAMIDEDDINE MOUAD</span>
          </div>
        </div>
      </footer>

      {/* CTA flottant (mobile) */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${PERSONAL_INFO.whatsapp_number}`}
          className="w-14 h-14 rounded-3xl bg-green-500 text-white flex items-center justify-center shadow-2xl shadow-green-500/25 hover:scale-105 active:scale-95 transition"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default App;
