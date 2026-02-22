"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[1000] bg-surface flex items-center justify-center">
            <div className="relative">
                {/* Pulsing Gold Halo */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-primary blur-[40px] rounded-full"
                />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-col items-center gap-8"
                >
                    <div className="text-primary text-2xl font-bold tracking-[0.5em] font-syncopate uppercase">
                        AK<span className="text-white">.</span>
                    </div>

                    <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
                        <motion.div
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/20">
                        Measuring Impact
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
