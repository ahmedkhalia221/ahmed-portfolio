"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const pathname = usePathname();
    const isGallery = pathname === "/gallery";

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 100) {
            setHidden(true);
            setIsMenuOpen(false);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { href: "/#", label: t.nav.home || "Home" },
        { href: "/#about", label: t.nav.about },
        { href: "/#skills", label: t.nav.expertise },
        { href: "/#portfolio", label: t.nav.works, highlight: isGallery },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-white/[0.05]"
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
                    {/* Brand Logo - Designed Component */}
                    <Link href="/" className="group relative">
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10 bg-white/[0.03] border border-white/[0.05] rounded-lg overflow-hidden flex items-center justify-center backdrop-blur-md group-hover:border-primary/40 transition-colors">
                                <span className="text-xl font-extrabold tracking-tighter text-white font-syncopate">A</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-xl font-extrabold tracking-[0.4em] uppercase font-syncopate text-white/90 group-hover:text-primary transition-colors">
                                K<span className="text-primary group-hover:text-white transition-colors">.</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Center Links */}
                    <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${link.highlight ? 'text-primary' : 'text-white/40'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Controls */}
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                            className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/10 px-4 py-2"
                        >
                            {language === "en" ? "العربية" : "English"}
                        </button>

                        {/* Grid Menu Icon */}
                        <button
                            className="text-white/80 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-current rounded-full" />
                                ))}
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile/Full Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center p-6"
                    >
                        <nav className="flex flex-col gap-10 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl md:text-6xl wide-title text-white/90 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <button
                            className="absolute top-10 right-10 text-white/40 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
