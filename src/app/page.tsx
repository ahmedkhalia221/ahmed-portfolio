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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />

        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-left rtl:text-right flex flex-col items-start rtl:items-end">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-8 block"
              >
                {t.hero.badge}
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-7xl md:text-9xl wide-title leading-none mb-12">
                  THE<br />
                  <span className="text-white">FUTURE</span>
                </h1>
                <div className="accent-line mb-8" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/40 text-xl font-light max-w-sm leading-relaxed mb-12 border-l border-white/10 pl-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="px-10 py-4 border border-white/20 hover:border-primary hover:text-primary transition-all text-[11px] font-bold uppercase tracking-[0.3em] text-white/80"
                >
                  {t.hero.cta}
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative grayscale-[0.8]"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 opacity-30" />
                <Image
                  src="/ahmed-professional-portrait.jpg"
                  alt="Ahmed Khalifa"
                  width={600}
                  height={800}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Modular Grid Info (Mission/Vision Style from Image) */}
        <div className="absolute bottom-0 left-0 right-0 glass-card py-12 hidden md:block border-x-0 border-b-0">
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 gap-24">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Our Mission</span>
              <p className="text-[11px] text-white/40 tracking-wider font-light">Making the world united to its fullest with technology.</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Our Vision</span>
              <p className="text-[11px] text-white/40 tracking-wider font-light">Our mission is to make the world use its resources to the fullest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Modular Box Style */}
      <section id="about" className="relative py-32 border-b border-white/[0.05]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-4xl md:text-5xl wide-title mb-10 leading-tight">
                {t.about.title}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
                {t.about.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-white/10 bg-white/10 border p-1 glass-card overflow-hidden">
              <div className="bg-background p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">{t.about.location}</span>
                <p className="text-xl font-bold">{t.about.egypt}</p>
              </div>
              <div className="bg-background p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">{t.about.role}</span>
                <p className="text-xl font-bold">{t.about.creativeDirector}</p>
              </div>
              <div className="bg-background p-8 md:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">{t.about.experience}</span>
                <p className="text-xl font-bold">{t.about.experienceYears}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">{t.expertise.subtitle}</span>
            <h2 className="text-4xl md:text-6xl wide-title tracking-tighter">{t.expertise.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-white/5 border border-white/10 glass-card">
            {t.expertise.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-10 group hover:bg-primary/5 transition-colors"
              >
                <div className="text-primary mb-8 transform group-hover:scale-110 transition-transform origin-left">
                  <ExpertiseIcon index={index} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-6">{item.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Minimalist Grid */}
      <section id="portfolio" className="py-32 bg-white/[0.02]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl wide-title mb-6 leading-none">{t.portfolio.title}</h2>
              <p className="text-white/40 text-xl font-light">{t.portfolio.subtitle}</p>
            </div>
            <Link
              href="/gallery"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/20 hover:bg-primary hover:text-white px-8 py-3 transition-all"
            >
              {t.portfolio.explore}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop", title: "Luxury Product Direction" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", title: "Commercial Ad Tech" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden border border-white/10 grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl wide-title mb-4">{t.portfolio.projects[index].title}</h3>
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/50 pb-1">
                    {t.portfolio.viewProject}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Minimalist Focus */}
      <section id="contact" className="py-40">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8 block">{t.contact.subtitle}</span>
              <h2 className="text-5xl md:text-8xl wide-title mb-16 leading-tight">{t.contact.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <a
                  href={`mailto:ahmedkhalifa875@icloud.com`}
                  className="glass-card p-12 hover:border-primary/50 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4 block">{t.contact.email}</span>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">ahmedkhalifa875@icloud.com</p>
                </a>
                <a
                  href="https://wa.me/201104344679"
                  className="glass-card p-12 hover:border-primary/50 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4 block">{t.contact.whatsapp}</span>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">+20 1104344679</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
            &copy; {new Date().getFullYear()} {t.footer.copy}
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-primary transition-colors flex items-center gap-4 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform">↑</span> {t.footer.backToTop}
          </button>
        </div>
      </footer>
    </main>
  );
}
