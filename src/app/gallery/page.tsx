"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Gallery() {
    const { language } = useLanguage();
    const t = useMemo(() => translations[language], [language]);

    // Mock projects for the gallery - In a real app, this would come from a CMS or JSON
    const allProjects = [
        { id: 1, title: "Luxury Product Direction", category: "Ads", image: "/portfolio-placeholder-1.jpg" },
        { id: 2, title: "Commercial Ad Tech", category: "AI Video", image: "/portfolio-placeholder-2.jpg" },
        { id: 3, title: "Cinematic Visuals", category: "Direction", image: "/portfolio-placeholder-3.jpg" },
        { id: 4, title: "Architectural Visuals", category: "Arch", image: "/portfolio-placeholder-4.jpg" },
        { id: 5, title: "Product Material Study", category: "Details", image: "/portfolio-placeholder-1.jpg" },
        { id: 6, title: "Urban Narrative", category: "Cinematic", image: "/portfolio-placeholder-2.jpg" },
    ];

    return (
        <main className="min-h-screen selection:bg-primary/30 selection:text-white pb-20">
            <Navbar />

            <section className="pt-40 section-container">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="mb-24"
                >
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/"
                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-2 hover:gap-4 transition-all"
                        >
                            <span>←</span> {t.gallery.backToHome}
                        </Link>
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-6xl md:text-8xl wide-title mb-8 leading-none"
                    >
                        {t.gallery.title}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-white/40 text-xl max-w-2xl font-light leading-relaxed border-l border-white/10 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8"
                    >
                        {t.gallery.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/10 p-1 glass-card overflow-hidden"
                >
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            className="group relative aspect-video overflow-hidden bg-background transition-all duration-700"
                        >
                            <div className="absolute inset-0 bg-primary/5 transition-transform duration-700 group-hover:scale-110" />

                            <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[10px] font-bold uppercase tracking-widest">
                                Project Visual {project.id}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl wide-title mb-4">
                                    {project.title}
                                </h3>
                                <button className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/30 pb-1">
                                    {t.portfolio.viewProject}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}
