"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: string;
  category: string;
  title: string;
  desc: string;
  tech: string[];
  img: string;
}

export function ProjectRow({ project, index }: { project: Project, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <div ref={ref} className="group relative flex flex-col md:flex-row gap-12 px-10 max-w-7xl mx-auto items-center">
      <div className={`flex-1 space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="space-y-4">
          <span className="text-orange-500 font-mono text-xs">{project.id} // {project.category}</span>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter group-hover:italic transition-all duration-500">{project.title}</h3>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
          {project.desc}
        </p>
        <div className="flex gap-3">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`flex-1 relative aspect-[4/3] w-full overflow-hidden rounded-3xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <motion.div 
          animate={{ 
            scale: isInView ? 1 : 1.2,
            filter: isInView ? "grayscale(0%)" : "grayscale(100%)"
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </div>
  );
}
