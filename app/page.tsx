"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/ui/animated-shader-hero";
import { 
  Code2, Palette, Globe, Mail, Terminal, User, ExternalLink, 
  ChevronDown, Cpu, Sparkles, Layers, ArrowRight,
  Share2, MessageSquare, Monitor, Search, Command, Zap,
  CheckCircle2, Workflow, Rocket, Copy, GitBranch, Link
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { ProjectRow } from "./components/project-row";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [copying, setCopying] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const containerRef = useRef(null);
  const workRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowTopBtn(latest > 0.2);
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("chaniceg18@gmail.com");
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const projects = [
    {
      id: "01",
      title: "Synthetix",
      category: "Generative UI",
      desc: "An AI-driven design engine that creates unique component libraries based on natural language branding guidelines.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      tech: ["Next.js", "GPT-4", "Three.js"]
    },
    {
      id: "02",
      title: "Aether OS",
      category: "Interface Design",
      desc: "A conceptual browser-based operating system exploring spatial computing and non-linear file management.",
      img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
      tech: ["React", "Rust/Wasm", "Tailwind"]
    },
    {
      id: "03",
      title: "Neural Trace",
      category: "Cybersecurity",
      desc: "Real-time network visualization tool that uses force-directed graphs to map intrusion attempts across global servers.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      tech: ["D3.js", "Node.js", "Socket.io"]
    }
  ];

  const processSteps = [
    {
      title: "Research",
      desc: "Deconstructing the problem to its core components and understanding user needs.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Strategy",
      desc: "Architecting the technical stack and mapping out the user journey.",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Execution",
      desc: "Surgical implementation with a focus on performance and accessibility.",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Validation",
      desc: "Exhaustive testing and refinement to ensure a flawless experience.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <main ref={containerRef} className="relative bg-black text-white selection:bg-orange-500/30">
      {/* Noise Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-orange-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 mix-blend-difference"
      >
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-orange-500 rounded-full group-hover:scale-125 transition-transform" />
          <span className="text-lg font-black tracking-tighter">CHANICE.G</span>
        </div>
        <div className="hidden md:flex items-center gap-16 text-[10px] font-bold uppercase tracking-[0.4em]">
          <button onClick={() => scrollTo(workRef)} className="hover:text-orange-500 transition-colors">Work</button>
          <button className="hover:text-orange-500 transition-colors">Labs</button>
          <button onClick={() => scrollTo(storyRef)} className="hover:text-orange-500 transition-colors">Story</button>
          <button onClick={() => scrollTo(contactRef)} className="hover:text-orange-500 transition-colors">Connect</button>
        </div>
        <div className="flex items-center gap-4">
          <Command className="w-5 h-5 text-gray-500" />
          <div className="w-px h-4 bg-white/20" />
          <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Menu</span>
        </div>
      </motion.nav>

      {/* Hero with Depth */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: backgroundOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Hero
            trustBadge={{
              text: "Engineering the Future of Visual Design",
              icons: ["✦", "✧"]
            }}
            headline={{
              line1: "The Intersection",
              line2: "Of Art & Code"
            }}
            subtitle="Chanice Grant. Third-year Software Engineering student. Designing cinematic interfaces and building resilient, high-performance systems for the next web."
            buttons={{
              primary: { text: "View Projects", onClick: () => scrollTo(workRef) },
              secondary: { text: "My Story", onClick: () => scrollTo(storyRef) }
            }}
          />
        </motion.div>
        
        <div className="absolute bottom-12 left-10 flex items-center gap-8 z-10">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Coordinates</span>
            <span className="text-xs font-mono">51.5074° N, 0.1278° W</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Current Phase</span>
            <span className="text-xs font-mono">Development v4.2.0</span>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <div className="py-10 bg-orange-500 text-black overflow-hidden flex whitespace-nowrap border-y-2 border-black relative z-10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center font-black italic text-4xl uppercase tracking-tighter"
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>React</span>
              <span className="text-white">Next.js</span>
              <span>TypeScript</span>
              <span className="text-white">WebGL</span>
              <span>Node.js</span>
              <span className="text-white">PostgreSQL</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid Skills / Identity */}
      <section ref={storyRef} className="py-40 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-white/5 border border-white/10 p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="space-y-6 relative z-10">
              <span className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase italic">Engineering Philosophy</span>
              <h2 className="text-5xl font-bold leading-tight tracking-tighter">
                Architecture that <br />
                <span className="text-gray-500">scales with</span> <br />
                imagination.
              </h2>
            </div>
            <p className="text-gray-400 max-w-md relative z-10">
              I specialize in bridging the gap between pixel-perfect design and production-grade engineering. My focus is on creating immersive web experiences that don't sacrifice performance for aesthetics.
            </p>
          </motion.div>

          <div className="md:col-span-2 rounded-3xl bg-orange-500 p-12 flex flex-col justify-between text-black group overflow-hidden relative">
            <Zap className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-3xl font-black italic tracking-tighter">High-Performance<br />Frontend</h3>
            <div className="flex gap-4 font-bold text-xs uppercase tracking-widest">
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center gap-4 group">
            <Palette className="w-10 h-10 text-orange-500 group-hover:rotate-12 transition-transform" />
            <h4 className="font-bold">UI/UX Design</h4>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center gap-4 group">
            <Cpu className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold">WebGL/GLSL</h4>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Projects */}
      <section ref={workRef} className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="px-10 max-w-7xl mx-auto mb-20">
          <h3 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Labs & Experiments</h3>
          <h2 className="text-7xl font-black tracking-tighter">Selected Artifacts</h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-4">
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">Methodology</span>
          <h2 className="text-6xl font-black tracking-tighter italic">THE PROCESS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold italic">0{i + 1} / {step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Immersive Contact Section */}
      <section ref={contactRef} className="h-screen flex flex-col items-center justify-center text-center px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-12 relative z-10"
        >
          <div className="space-y-4">
            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs">Establish Contact</span>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic">LET'S TALK</h2>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="group relative">
              <button 
                onClick={copyEmail}
                className="text-3xl md:text-6xl font-light hover:text-orange-500 transition-colors underline underline-offset-12 decoration-1 decoration-white/10 flex items-center gap-4"
              >
                chaniceg18@gmail.com
                <Copy className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <AnimatePresence>
                {copying && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold"
                  >
                    COPIED TO CLIPBOARD
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-sm">
              <a href="https://github.com/ChaniceGrant" target="_blank" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-orange-500 hover:text-black transition-all">
                <GitBranch className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/chanice-grant" target="_blank" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-orange-500 hover:text-black transition-all">
                <Link className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="absolute bottom-12 w-full px-10 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <span>© 2026 Chanice Grant Portfolio</span>
          <div className="flex gap-8">
            <span>Engineering</span>
            <span>Design</span>
            <span>Art</span>
          </div>
        </footer>
        </section>

        {/* Back to Top */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-10 z-[100] w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform"
          >
            <ChevronDown className="w-6 h-6 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
