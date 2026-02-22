"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const pathname = usePathname();
    const isGallery = pathname === "/gallery";

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center md:justify-end">
                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#about" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">{t.nav.about}</Link>
                        <Link href="/#skills" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">{t.nav.expertise}</Link>
                        <Link href="/#portfolio" className={`text-sm font-medium transition-colors ${isGallery ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>{t.nav.works}</Link>
                        <Link href="/#contact" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">{t.nav.contact}</Link>
                    </div>

                    <div className="h-4 w-px bg-white/10 hidden md:block" />

                    <button
                        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                        className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold shadow-lg"
                    >
                        {language === "en" ? "العربية" : "English"}
                    </button>
                </nav>
            </div>
        </motion.header>
    );
};
