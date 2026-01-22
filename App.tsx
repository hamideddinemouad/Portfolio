
import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Terminal,
  BookOpen,
  MessageSquare,
  Send,
  User,
  Calendar,
  X,
  Briefcase,
  Code2,
  Cpu,
  Globe,
  Award,
  ChevronRight,
  Heart,
  Users,
  Zap,
  ShieldCheck,
  Lightbulb,
  Search,
  Activity,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Section } from './components/Section';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  EDUCATION,
  LANGUAGES,
  INTERESTS,
  SOFT_SKILLS
} from './constants';

const TechIcon = ({ name, size = "w-8 h-8" }: { name: string, size?: string }) => {
  const slugMap: Record<string, string> = {
    "React": "react",
    "Node.js": "nodedotjs",
    "Express": "express",
    "Nest.js": "nestjs",
    "PHP": "php",
    "Laravel": "laravel",
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "Tailwind CSS": "tailwindcss",
    "JavaScript": "javascript",
    "HTML5": "html5",
    "CSS3": "css3",
    "Docker": "docker",
    "Git": "git",
    "Jira": "jira",
    "Trello": "trello",
    "Python": "python",
    "Mongoose": "mongodb",
    "Jest": "jest",
    "UML": "uml",
    "POO": "java",
    "MVC": "laravel"
  };
  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '');
  return (
    <div className="flex flex-col items-center gap-2 group cursor-help">
      <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-blue-500/30 group-hover:-translate-y-1 transition-all duration-300">
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          className={`${size} group-hover:scale-110 transition-transform`}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${name[0]}&background=f8fafc&color=2563eb&bold=true`; }}
        />
      </div>
      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{name}</span>
    </div>
  );
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Bonjour ! Je suis l'assistant de Mouad. Je peux vous renseigner sur ses compétences Full Stack ou ses expériences passées. Comment puis-je vous aider ?" }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isThinking]);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput;
    setChatInput("");
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        Tu es l'agent IA de Hamideddine Mouad. Il est Développeur Web Full Stack diplômé de YouCode.
        Il a travaillé chez Assin Sarl, a été Trader numérique et Analyste chez Majorel.
        Détails : ${JSON.stringify({ SKILLS, PROJECTS, SOFT_SKILLS, EXPERIENCES, EDUCATION })}
        Réponds de manière professionnelle, utile et concise en français uniquement.
      `;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: { systemInstruction, temperature: 0.7 }
      });
      setChatHistory(prev => [...prev, { role: 'bot', text: response.text || "Pardon, j'ai rencontré un problème." }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'bot', text: "Désolé, je n'arrive pas à me connecter au serveur." }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-600 bg-white selection:bg-blue-100 font-inter">
      {/* Barre de Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20 italic">M</div>
            <span className="text-sm font-black text-slate-900 tracking-[0.2em] uppercase hidden md:block">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">Vision</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projets</a>
            <a href="#career" className="hover:text-blue-600 transition-colors">Parcours</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest uppercase">
              <Activity className="w-3 h-3" /> Architecte de Solutions Digitales
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
              Javascript <br />
              <span className="text-gradient italic">Developer.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex gap-6">
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp_number}`}
                aria-label="Contacter sur WhatsApp"
                className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-7 h-7" />
              </a>

              <div className="flex gap-4">
                <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/40 text-slate-400 hover:text-blue-600 transition-all" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer"  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/40 text-slate-400 hover:text-blue-600 transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative group hidden lg:block">
            <div className="absolute -inset-10 bg-blue-100/50 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-square rounded-[60px] bg-slate-50 border-8 border-white shadow-2xl overflow-hidden p-8 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8">
                {SKILLS.flatMap(cat => cat.skills.slice(0, 4)).map((s, i) => (
                  <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                    <TechIcon name={s} size="w-10 h-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section avec Icônes */}
      <Section id="skills" title="Expertise Technique">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="space-y-8 p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
              <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {cat.name}
              </h4>
              <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {cat.skills.map((skill, i) => (
                  <TechIcon key={i} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projets avec Icons Focus */}
      <Section id="projects" title="Projets Réalisés">
        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-white rounded-[48px] p-10 border border-slate-100 hover:border-blue-500/20 hover:shadow-2xl transition-all duration-700 flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div className="p-5 rounded-3xl bg-blue-50 text-blue-600">
                  <Terminal className="w-10 h-10" />
                </div>
                <div className="flex gap-4">
                  <TechIcon name={project.tech[0]} size="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">{project.title}</h3>
              <p className="text-slate-500 font-medium mb-12 leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-6 pt-10 border-t border-slate-50">
                {project.tech.map((t, i) => (
                  <TechIcon key={i} name={t} size="w-6 h-6" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Parcours Professionnel */}
      <Section id="career" title="Parcours & Formation">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-blue-600" /> Expériences
            </h3>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 border-l-2 border-slate-100 hover:border-blue-600 transition-all group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-600 transition-all"></div>
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">{exp.period}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-1 uppercase tracking-tight">{exp.role}</h4>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-6">{exp.company} • {exp.location}</p>
                  <p className="text-slate-500 text-base leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <BookOpen className="w-6 h-6 text-blue-600" /> Éducation
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{edu.institution}</h4>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">{edu.degree}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{edu.period} • {edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Savoir-être et Langues */}
      <Section id="others" title="Atouts Complémentaires">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Lightbulb className="w-6 h-6 text-yellow-500" /> Soft Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {SOFT_SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600">
                    {idx === 0 && <Search className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                    {idx === 3 && <Zap className="w-5 h-5" />}
                  </div>
                  <h4 className="font-black text-xs text-slate-900 uppercase tracking-widest">{skill.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-4">
              <Globe className="w-6 h-6 text-blue-600" /> Langues
            </h3>
            <div className="space-y-8 p-10 rounded-[40px] bg-slate-900 text-white">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{lang.name}</span>
                    <span className="text-blue-400 text-[9px] font-black uppercase tracking-widest">{lang.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: lang.name === 'Arabe' ? '100%' : '85%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">PRÊT POUR <br /> LE PROCHAIN DÉFI.</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={`tel:${PERSONAL_INFO.phone}`} className="px-12 py-5 rounded-full border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
              Appeler Mouad
            </a>
          </div>
          <div className="pt-20 flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} rel="noopener noreferrer" target="_blank" className="hover:text-blue-600 transition-colors" >Linkedin</a>
            <a href={`https://github.com/${PERSONAL_INFO.github}`} rel="noopener noreferrer" target="_blank" className="hover:text-blue-600 transition-colors">Github</a>
            <span>© 2025 HAMIDEDDINE MOUAD</span>
          </div>
        </div>
      </footer>

      {/* Agent IA - Theme Clair */}
      <div className="fixed bottom-10 right-10 z-50">
        {!isChatOpen ? (
          <button onClick={() => setIsChatOpen(true)} className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-110 hover:bg-blue-700 transition-all active:scale-95 group pulse-blue">
            <MessageSquare className="w-10 h-10 group-hover:rotate-12 transition-transform" />
          </button>
        ) : (
          <div className="w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[40px] flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-20 duration-500">
            <div className="p-8 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-xl italic shadow-lg shadow-blue-500/20">M</div>
                <div>
                  <p className="font-black text-sm uppercase tracking-widest italic">Agent Mouad</p>
                  <p className="text-[9px] opacity-60 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> En ligne
                  </p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-3 hover:bg-white/10 rounded-2xl transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50/30">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[28px] font-bold text-xs leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none flex gap-2 items-center border border-slate-100 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="p-8 bg-white border-t border-slate-50">
              <div className="flex gap-4">
                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Demandez-moi n'importe quoi..." className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-400 shadow-inner" />
                <button onClick={handleSendMessage} disabled={!chatInput.trim() || isThinking} className="p-4 rounded-2xl bg-slate-900 text-white disabled:opacity-50 transition-all shadow-lg active:scale-95"><Send className="w-7 h-7" /></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
