
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 max-w-7xl mx-auto scroll-mt-24 ${className}`}>
      <div className="flex flex-col mb-16">
        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">{title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};
