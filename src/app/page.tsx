"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
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
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const { language } = useLanguage();
  const t = useMemo(() => translations[language], [language]);

  return (
    <main className="min-h-screen relative bg-surface">
      {/* High-Impact Spotlight Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
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
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-primary/60 mb-10 block">
                  {t.hero.badge}
                </span>

                <h1 className="wide-title mb-12 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  {t.hero.title}
                </h1>

                <div className="accent-line mb-12" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white/40 text-2xl font-light max-w-xl leading-relaxed mb-16 border-l border-primary/20 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-14 py-5 bg-primary text-surface text-[12px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-secondary"
                >
                  {t.hero.cta}
                </motion.a>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative border border-white/5 p-2 bg-white/[0.01] backdrop-blur-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/ahmed-professional-portrait.jpg"
                    alt={t.hero.title}
                    width={800}
                    height={1000}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - High-Contrast Precision */}
      <section id="about" className="relative py-48 border-b border-white/[0.03]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <motion.div {...fadeInUp}>
              <h2 className="wide-title text-4xl mb-12 text-primary/90">{t.about.title}</h2>
              <p className="text-white/30 text-xl leading-relaxed font-light mb-16">{t.about.description}</p>

              <div className="flex items-center gap-10">
                <div className="w-16 h-px bg-primary/30" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">Measured Precision</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] border border-white/10 p-px overflow-hidden shadow-2xl">
              <div className="bg-surface p-12 group hover:bg-primary/[0.02] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-6 block">{t.about.location}</span>
                <p className="text-2xl font-bold tracking-tight">{t.about.egypt}</p>
              </div>
              <div className="bg-surface p-12 group hover:bg-primary/[0.02] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-6 block">{t.about.role}</span>
                <p className="text-2xl font-bold tracking-tight">{t.about.creativeDirector}</p>
              </div>
              <div className="bg-surface p-12 md:col-span-2 group hover:bg-primary/[0.02] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-6 block">{t.about.experience}</span>
                <p className="text-2xl font-bold tracking-tight">{t.about.experienceYears}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - High-Impact Interface */}
      <section id="skills" className="py-48">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-primary/40 mb-6 block">{t.expertise.subtitle}</span>
            <h2 className="wide-title text-5xl lg:text-7xl">{t.expertise.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/10 p-px overflow-hidden">
            {t.expertise.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-14 group hover:bg-primary/[0.03] transition-all duration-500 cursor-default"
              >
                <div className="text-primary/70 mb-10 transform group-hover:scale-110 group-hover:text-primary transition-all duration-700 origin-left">
                  <ExpertiseIcon index={index} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-[0.2em] mb-8 text-white/90">{item.title}</h3>
                <p className="text-white/30 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Selection of Excellence */}
      <section id="portfolio" className="py-48 bg-white/[0.01]">
        <div className="section-container">
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12"
          >
            <div>
              <h2 className="wide-title text-5xl lg:text-7xl mb-8 leading-none">{t.portfolio.title}</h2>
              <p className="text-white/30 text-2xl font-light max-w-xl leading-relaxed">{t.portfolio.subtitle}</p>
            </div>
            <motion.div whileHover={{ x: 10 }}>
              <Link
                href="/gallery"
                className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary border border-primary/20 bg-primary/[0.02] hover:bg-primary hover:text-surface px-12 py-5 transition-all inline-block"
              >
                {t.portfolio.explore}
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop", title: "Luxury Product Direction" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", title: "Commercial Ad Tech" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative aspect-[16/10] overflow-hidden border border-white/5 bg-surface-lighter cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10 z-10" />
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80 group-hover:opacity-95 transition-opacity z-20" />

                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out z-30">
                  <h3 className="text-3xl wide-title mb-6 leading-tight text-white">{t.portfolio.projects[index]?.title || project.title}</h3>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/40 pb-2 inline-flex items-center gap-4"
                  >
                    {t.portfolio.viewProject} <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - High-Impact Connection */}
      <section id="contact" className="py-64 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full z-0 opacity-50" />

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-primary/60 mb-10 block">{t.contact.subtitle}</span>
              <h2 className="wide-title text-6xl lg:text-9xl mb-24 leading-none text-white">{t.contact.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <a
                  href={`mailto:ahmedkhalifa875@icloud.com`}
                  className="glass-card p-16 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/[0.01] group-hover:bg-primary/[0.04] transition-colors" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/20 mb-6 block">{t.contact.email}</span>
                  <p className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">ahmedkhalifa875@icloud.com</p>
                </a>
                <a
                  href="https://wa.me/201104344679"
                  className="glass-card p-16 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/[0.01] group-hover:bg-primary/[0.04] transition-colors" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/20 mb-6 block">{t.contact.whatsapp}</span>
                  <p className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">+20 1104344679</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 border-t border-white/[0.03] bg-surface-lighter font-outfit uppercase tracking-[0.2em] text-[10px] font-bold">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-16 text-white/20">
          <span className="hover:text-primary transition-colors duration-500">
            &copy; {new Date().getFullYear()} {t.footer.copy}
          </span>
          <div className="flex gap-12">
            <a href="https://www.instagram.com/ahmed.khalifa_96/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-500">Instagram</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-4 hover:text-primary transition-colors group duration-500"
          >
            <span className="group-hover:-translate-y-2 transition-transform duration-500">↑</span> {t.footer.backToTop}
          </button>
        </div>
      </footer>
    </main>
  );
}
