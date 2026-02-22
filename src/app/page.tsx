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
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
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
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
    />
  );
};

const ExpertiseIcon = ({ index }: { index: number }) => {
  const icons = [
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11h6m-6 4h6m-6-8h1" /></svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
  ];
  return icons[index] || icons[0];
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { language } = useLanguage();
  const t = useMemo(() => translations[language], [language]);

  return (
    <main className="min-h-screen selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar - Zeigarnik Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />

      <Navbar />

      {/* Custom Cursor - Neuro-UX Engagement */}
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

        <div className="section-container text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-lighter flex items-center justify-center">
                <Image
                  src="/ahmed-professional-portrait.jpg"
                  alt={t.hero.title}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              {t.hero.badge}
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.title} <span className="text-white/40">.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary inline-block">
              {t.hero.cta}
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-surface-lighter/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl mb-8 leading-[1.2]">{t.about.title}</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6 font-medium">
                {t.about.description}
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40">{t.about.location}</span>
                  <span>{t.about.egypt}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40">{t.about.role}</span>
                  <span>{t.about.creativeDirector}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40">{t.about.experience}</span>
                  <span>{t.about.experienceYears}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t.expertise.title}</h2>
            <p className="text-white/50 text-xl font-outfit">{t.expertise.subtitle}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {t.expertise.items.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass p-8 rounded-3xl hover:bg-primary/5 hover:border-primary/20 transition-all group border border-white/5"
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ExpertiseIcon index={index} />
                </div>
                <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-white/50 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -z-10" />

        <div className="section-container">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">{t.portfolio.title}</h2>
              <p className="text-white/50 text-xl font-outfit">{t.portfolio.subtitle}</p>
            </div>
            <Link
              href="/gallery"
              className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
            >
              {t.portfolio.explore} <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop", title: "Luxury Product Direction" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", title: "Commercial Ad Tech" },
              { img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop", title: "Cinematic Visuals" },
              { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", title: "Architectural Visuals" }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <h4 className="text-xl font-bold mb-4">{t.portfolio.projects[index].title}</h4>
                    <span className="px-6 py-2 rounded-full glass text-sm font-medium">{t.portfolio.viewProject}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-surface-lighter/30">
        <div className="section-container">
          <div className="glass p-12 md:p-20 rounded-[40px] text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter">{t.contact.title}</h2>
              <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:ahmedkhalifa875@icloud.com" className="btn-primary w-full md:w-auto">
                  {t.contact.email}
                </a>
                <a href="https://wa.me/201104344679" target="_blank" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all w-full md:w-auto">
                  {t.contact.whatsapp}
                </a>
              </div>
            </motion.div>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 text-white/40 uppercase tracking-widest text-xs font-bold">
              <a href="https://www.instagram.com/ahmed.khalifa_96/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-white/5 mt-20">
        <div className="section-container">
          <p className="text-white/20 text-sm mb-6">&copy; {new Date().getFullYear()} {t.footer.copy}</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors flex flex-col items-center gap-2 mx-auto"
            whileHover={{ y: -5 }}
          >
            <span className="text-lg">↑</span>
            {t.footer.backToTop}
          </motion.button>
        </div>
      </footer>
    </main>
  );
}
