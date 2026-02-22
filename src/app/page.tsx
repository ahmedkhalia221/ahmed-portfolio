"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
};

// Magnetic Hook for high-end UX interaction
const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const element = ref.current;
    if (element) {
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.35, y: y * 0.35 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { ref, position, handleMouseMove, handleMouseLeave };
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-primary pointer-events-none z-[999] hidden md:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0)",
        borderColor: isHovering ? "#D4AF37" : "rgba(212, 175, 55, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
    />
  );
};

const ExpertiseIcon = ({ index }: { index: number }) => {
  const icons = [
    <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 11h6m-6 4h6m-6-8h1" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
  ];
  return icons[index] || icons[0];
};

const fadeInUp = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const { language } = useLanguage();
  const t = useMemo(() => translations[language], [language]);
  const magneticCta = useMagnetic();

  return (
    <main className="min-h-screen relative bg-surface overflow-x-hidden">
      {/* High-Impact Spotlight Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-[100] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />

      <Navbar />
      <CustomCursor />

      {/* Hero Section - Product Launch Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/[0.03]">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 text-left rtl:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-10 overflow-hidden">
                  <motion.span
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px w-10 bg-primary/40"
                  />
                  <span className="text-[11px] font-bold tracking-[0.6em] uppercase text-primary/80">
                    {t.hero.badge}
                  </span>
                </div>

                <h1 className="wide-title mb-12 text-white perspective-1000">
                  <motion.span
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="block origin-bottom"
                  >
                    {t.hero.title}
                  </motion.span>
                </h1>

                <div className="accent-line mb-12 h-20" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="text-white/40 text-2xl font-light max-w-xl leading-relaxed mb-16 border-l border-primary/20 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8"
              >
                {t.hero.subtitle}
              </motion.p>

              <div
                ref={magneticCta.ref}
                onMouseMove={magneticCta.handleMouseMove as any}
                onMouseLeave={magneticCta.handleMouseLeave}
                className="inline-block"
              >
                <motion.div
                  animate={{ x: magneticCta.position.x, y: magneticCta.position.y }}
                  transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block px-14 py-6 bg-primary text-surface text-[12px] font-bold uppercase tracking-[0.5em] transition-all hover:bg-white hover:scale-105"
                  >
                    {t.hero.cta}
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative group h-[700px] w-full"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative h-full w-full border border-white/5 p-3 bg-white/[0.01] backdrop-blur-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.05)]">
                  <Image
                    src="/ahmed-professional-portrait.jpg"
                    alt={t.hero.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

                  {/* Decorative High-Impact Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/40 m-6" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/40 m-6" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Architectural Precision */}
      <section id="about" className="relative py-64 border-b border-white/[0.03]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="wide-title text-5xl mb-12 text-primary/80 leading-none">{t.about.title}</h2>
              <p className="text-white/30 text-2xl leading-relaxed font-light mb-16 max-w-lg italic">
                "{t.about.description}"
              </p>

              <div className="flex items-center gap-12 group">
                <div className="w-24 h-px bg-primary/20 group-hover:w-32 transition-all duration-700" />
                <span className="text-[11px] uppercase tracking-[0.6em] text-white/40">Visual Visionary</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/20 p-px overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.03)] rounded-sm">
              <div className="bg-surface-lighter p-16 group hover:bg-primary/[0.05] transition-all duration-700">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/50 mb-8 block">{t.about.location}</span>
                <p className="text-3xl font-bold tracking-tighter text-white/90">{t.about.egypt}</p>
              </div>
              <div className="bg-surface-lighter p-16 group hover:bg-primary/[0.05] transition-all duration-700">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/50 mb-8 block">{t.about.role}</span>
                <p className="text-3xl font-bold tracking-tighter text-white/90">{t.about.creativeDirector}</p>
              </div>
              <div className="bg-surface-lighter p-16 md:col-span-2 group hover:bg-primary/[0.05] transition-all duration-700">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/50 mb-8 block">{t.about.experience}</span>
                <p className="text-3xl font-bold tracking-tighter text-white/90">{t.about.experienceYears}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Control Panel Interface */}
      <section id="skills" className="py-64 bg-surface-lighter/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-40 text-center flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.8em] text-primary/60 mb-8 block">{t.expertise.subtitle}</span>
            <h2 className="wide-title text-6xl lg:text-8xl">{t.expertise.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border border-primary/20 p-px shadow-2xl overflow-hidden rounded-sm">
            {t.expertise.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-surface p-16 group hover:bg-primary/[0.05] transition-all duration-700 cursor-default"
              >
                <div className="text-primary/40 mb-12 transform group-hover:scale-125 group-hover:text-primary transition-all duration-700 origin-center bg-white/[0.02] w-20 h-20 flex items-center justify-center rounded-full">
                  <ExpertiseIcon index={index} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.3em] mb-10 text-white leading-tight">{item.title}</h3>
                <p className="text-white/20 text-md font-light leading-relaxed group-hover:text-white/40 transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Selection of Excellence */}
      <section id="portfolio" className="py-64 relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-40 gap-16"
          >
            <div className="max-w-3xl">
              <h2 className="wide-title text-6xl lg:text-8xl mb-12 leading-none">{t.portfolio.title}</h2>
              <p className="text-white/30 text-3xl font-light leading-relaxed">{t.portfolio.subtitle}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05, x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/gallery"
                className="text-[11px] font-bold uppercase tracking-[0.6em] text-primary border-2 border-primary/40 bg-primary/[0.05] hover:bg-primary hover:text-surface px-16 py-6 transition-all inline-block rounded-full"
              >
                {t.portfolio.explore}
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
              { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop", title: "Luxury Product Direction" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", title: "Commercial Ad Tech" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[600px] overflow-hidden rounded-sm border border-white/5 bg-surface-lighter cursor-pointer perspective-2000"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-700 z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-16 z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h3 className="text-4xl wide-title mb-10 leading-none text-white">{t.portfolio.projects[index]?.title || project.title}</h3>
                    <motion.button
                      whileHover={{ x: 15 }}
                      className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary border-b-2 border-primary/40 pb-3 inline-flex items-center gap-6"
                    >
                      {t.portfolio.viewProject} <span className="text-xl">→</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - World-Class Hub */}
      <section id="contact" className="py-80 relative overflow-hidden bg-surface-lighter/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/[0.04] blur-[200px] rounded-full z-0 pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="text-[11px] font-bold uppercase tracking-[1em] text-primary/40 mb-12 block">{t.contact.subtitle}</span>
              <h2 className="wide-title text-7xl lg:text-[10rem] mb-32 leading-none text-white tracking-widest">{t.contact.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.a
                  whileHover={{ scale: 1.02, y: -5 }}
                  href={`mailto:ahmedkhalifa875@icloud.com`}
                  className="glass-card p-20 group relative rounded-sm"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/30 mb-8 block">{t.contact.email}</span>
                  <p className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-all duration-500 underline decoration-primary/20 hover:decoration-primary">ahmedkhalifa875@icloud.com</p>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -5 }}
                  href="https://wa.me/201104344679"
                  className="glass-card p-20 group relative rounded-sm"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/30 mb-8 block">{t.contact.whatsapp}</span>
                  <p className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-all duration-500 underline decoration-primary/20 hover:decoration-primary">+20 1104344679</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Cinematic Outro */}
      <footer className="py-40 border-t border-white/[0.03] bg-surface font-syne uppercase tracking-[0.4em] text-[11px] font-bold">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-24 text-white/20">
          <div className="flex flex-col gap-6 items-start">
            <span className="text-primary/60 text-lg tracking-[0.5em]">AK<span className="text-white">.</span></span>
            <span className="hover:text-primary transition-colors duration-700">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </span>
          </div>

          <div className="flex gap-16 order-3 md:order-2">
            <a href="https://www.instagram.com/ahmed.khalifa_96/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-500 hover:tracking-[0.6em]">Instagram</a>
            <a href="#" className="hover:text-primary transition-all duration-500 hover:tracking-[0.6em]">Behance</a>
          </div>

          <motion.button
            whileHover={{ y: -10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-6 hover:text-primary transition-all group duration-700 order-2 md:order-3"
          >
            <div className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center group-hover:border-primary">
              <span className="group-hover:-translate-y-2 transition-transform duration-700 text-lg">↑</span>
            </div>
            <span>{t.footer.backToTop}</span>
          </motion.button>
        </div>
      </footer>
    </main>
  );
}
