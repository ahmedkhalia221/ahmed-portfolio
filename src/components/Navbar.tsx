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

    // Scroll state
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMenuOpen(false); // Close menu on scroll down
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { href: "/#about", label: t.nav.about },
        { href: "/#skills", label: t.nav.expertise },
        { href: "/#portfolio", label: t.nav.works, highlight: isGallery },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5"
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Brand/Logo - Standard on mobile too */}
                    <Link href="/" className="text-lg font-bold tracking-tighter md:hidden">
                        AK<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center gap-8 ml-auto">
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${link.highlight ? 'text-primary' : 'text-white/60 hover:text-primary'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="h-4 w-px bg-white/10 hidden md:block" />

                        {/* Language Switcher - Always Visible */}
                        <button
                            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                            className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold shadow-lg"
                        >
                            {language === "en" ? "العربية" : "English"}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-white/80"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-surface pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-white/90 hover:text-primary transition-colors flex items-center justify-between"
                                >
                                    {link.label}
                                    <span className="text-primary text-sm">→</span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
