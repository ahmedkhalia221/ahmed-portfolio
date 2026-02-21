"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <motion.div
        className="mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
    >
        <h2 className="text-3xl md:text-5xl mb-4 font-outfit uppercase tracking-tighter">{title}</h2>
        {subtitle && <p className="text-white/40 text-lg font-outfit uppercase tracking-widest">{subtitle}</p>}
        <div className="w-20 h-1 bg-primary mt-6" />
    </motion.div>
);

export default function ResearchPage() {
    const [activeTab, setActiveTab] = useState("living");

    const spatialData = {
        living: {
            title: "Living Room",
            min: "12-16 m²",
            suitable: "18-25 m²",
            orientation: "North / North-East",
            standard: "3.00m x 4.00m Min",
            desc: "Primary social hub. Requires facilitation of furniture arrangement and unimpeded circulation. Orientation ensures balanced lighting without direct heat gain."
        },
        bedroom: {
            title: "Bedroom",
            min: "10.8 m²",
            suitable: "12-16 m²",
            orientation: "East / North-East",
            standard: "3.00m x 3.60m Min",
            desc: "Private zone. Requires morning light and avoidance of high afternoon heat. Must be isolated from social noise with direct bathroom access."
        },
        kitchen: {
            title: "Kitchen",
            min: "5.4 m²",
            suitable: "6-10 m²",
            orientation: "South / West",
            standard: "1.80m x 3.00m Min",
            desc: "Service zone. Acts as a thermal buffer. Requires direct ventilation for heat and odor management. Avoid North-facing to prevent odor migration."
        }
    };

    return (
        <main className="min-h-screen selection:bg-primary/30 selection:text-white pb-20">
            {/* Navigation Shortcut */}
            <nav className="fixed top-6 right-6 z-50">
                <a href="/" className="glass px-6 py-3 rounded-full text-sm font-medium hover:text-primary transition-colors">
                    ← Back to Portfolio
                </a>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
                <div className="section-container text-center">
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Academic Research Study
                    </motion.span>
                    <motion.h1
                        className="text-5xl md:text-8xl mb-8 tracking-tighter leading-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        أسس التصميم المعماري <br /> <span className="text-white/30 italic">في الفيلات السكنية</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 text-white/40 font-outfit uppercase tracking-widest text-[10px] font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span>Course: Design II (ARN104)</span>
                        <span>Inst: Prof. Dr. Osama Abo El-Enein</span>
                        <span>Year: 2025–2026</span>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-surface-lighter/10">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-20">
                        <SectionHeader title="المقدمة" subtitle="The Vision" />
                        <motion.div
                            className="text-lg text-white/60 leading-relaxed font-light"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <p className="mb-6">
                                يُعد التصميم المعماري عملية تنظيم الفراغات وربطها ببعضها البعض بطريقة تحقق الكفاءة الوظيفية وسهولة الحركة داخل المبنى.
                                البحث يهدف إلى تحليل التنظيم الفراغي، والعلاقات الوظيفية، ومسارات الحركة داخل المشروع المعماري.
                            </p>
                            <p>
                                كفاءة التصميم السكني تقاس بمدى تحقيقه للتوازن بين الكفاءة الوظيفية، والراحة الحسية، والانسجام مع الموقع المعماري.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Pillars */}
            <section>
                <div className="section-container">
                    <SectionHeader title="محاور التصميم" subtitle="The Three Pillars" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { id: "01", title: "Human Scale", desc: "دراسة أبعاد الجسم البشري، نطاقات الحركة، مجالات الرؤية، ومتطلبات الأثاث." },
                            { id: "02", title: "Functional Logic", desc: "تنظيم العلاقات الفراغية بما يحقق الفصل الواضح بين المناطق العامة والخاصة." },
                            { id: "03", title: "Environment", desc: "توجيه الكتل بما يتناسب مع الشمس والرياح لتحقيق التهوية والإضاءة الطبيعية." }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                className="glass p-10 rounded-[40px] border-white/5 hover:border-primary/20 transition-all group"
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <span className="text-primary font-bold text-4xl mb-6 block font-outfit opacity-50 group-hover:opacity-100 transition-opacity">{pillar.id}</span>
                                <h3 className="text-2xl mb-4">{pillar.title}</h3>
                                <p className="text-white/40 leading-relaxed italic">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Standards & Dimensions */}
            <section className="bg-surface-lighter/20">
                <div className="section-container">
                    <SectionHeader title="الأبعاد المعيارية" subtitle="Spatial Standards (Neufert)" />
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3 grid grid-cols-1 gap-4">
                            {Object.entries(spatialData).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`p-6 rounded-3xl text-left transition-all border ${activeTab === key ? "bg-primary text-white border-primary" : "glass text-white/40 border-white/5 hover:border-white/20"}`}
                                >
                                    <span className="block text-xs uppercase tracking-widest font-bold mb-1">Standard</span>
                                    <span className="text-xl font-medium">{data.title}</span>
                                </button>
                            ))}
                        </div>
                        <div className="lg:w-2/3 glass p-12 rounded-[50px] relative overflow-hidden min-h-[400px]">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10"
                            >
                                <h4 className="text-4xl mb-8 text-primary font-outfit uppercase italic">{(spatialData as any)[activeTab].title}</h4>
                                <div className="grid grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <span className="block text-white/30 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Min Surface Area</span>
                                        <span className="text-2xl font-light">{(spatialData as any)[activeTab].min}</span>
                                    </div>
                                    <div>
                                        <span className="block text-white/30 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Standard Orientation</span>
                                        <span className="text-2xl font-light">{(spatialData as any)[activeTab].orientation}</span>
                                    </div>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <span className="block text-primary text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">Technical Justification</span>
                                    <p className="text-white/60 leading-relaxed">{(spatialData as any)[activeTab].desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study - Luis Barragán */}
            <section id="case-study">
                <div className="section-container">
                    <SectionHeader title="دراسة حالة" subtitle="Luis Barragán: Casa-Estudio" />
                    <div className="relative aspect-[21/9] rounded-[60px] overflow-hidden mb-16 border border-white/10 group">
                        <img
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
                            alt="Architectural Case Study"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                        <div className="absolute bottom-12 left-12 right-12">
                            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full mb-4 border border-primary/30 uppercase tracking-widest">Selected Project Analysis</span>
                            <h3 className="text-4xl md:text-5xl mb-4 font-outfit uppercase italic">منزل واستوديو لويس باراجان</h3>
                            <p className="max-w-xl text-white/60 leading-relaxed font-light">
                                ويعكس أسلوبه المميز في تنظيم الفراغات واستخدام الضوء والعلاقة بين الفراغات الداخلية والخارجية.
                                يظهر التحليل كيفية دمج مساحة العمل داخل الفراغ السكني بطريقة تحقق الخصوصية والكفاءة الوظيفية.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass p-10 rounded-[40px] border-white/5">
                            <h4 className="text-xl mb-6 text-primary uppercase font-bold tracking-widest">The Bubble Diagram Matrix</h4>
                            <p className="text-white/50 text-sm leading-relaxed mb-8">
                                تتمركز غرفتا المعيشة والطعام في قلب المخطط لتسهيل الحركة، بينما تقع المكاتب والمكتبة في الجزء السفلي واليميني للمنزل لضمان الهدوء التام للعمل الإبداعي.
                            </p>
                            <div className="h-40 bg-white/5 rounded-2xl flex items-center justify-center border border-dashed border-white/10">
                                <span className="text-[10px] uppercase tracking-widest text-white/20">Diagrammatic Matrix Representation</span>
                            </div>
                        </div>
                        <div className="glass p-10 rounded-[40px] border-white/5">
                            <h4 className="text-xl mb-6 text-primary uppercase font-bold tracking-widest">Environmental Orientation</h4>
                            <p className="text-white/50 text-sm leading-relaxed mb-8">
                                الرئة الخضراء للمنزل (الحديقة الكبيرة) توفر إطلالات مميزة وتهوية طبيعية للمبنى، مع استغلال اتجاه الرياح (شمالية - شرقية) بكفاءة عالية.
                            </p>
                            <div className="h-40 bg-white/5 rounded-2xl flex items-center justify-center border border-dashed border-white/10">
                                <span className="text-[10px] uppercase tracking-widest text-white/20">Wind & Sun Path Analysis View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / References */}
            <footer className="section-container border-t border-white/5 mt-20 pt-20">
                <div className="text-center">
                    <SectionHeader title="الخاتمة" subtitle="Final Academic Summary" />
                    <p className="max-w-3xl mx-auto text-white/40 font-light mb-16 italic text-lg leading-relaxed">
                        نجاح التصميم السكني يعتمد على الفهم الصحيح لأبعاد الإنسان، تنظيم العلاقات الفراغية، والاستجابة للعوامل البيئية،
                        مما يؤدي إلى تحقيق بيئة سكنية مريحة وفعالة تلبي احتياجات المستخدم اليومية.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {[
                            "Neufret, Ernst. Architects’ Data. 2012",
                            "Time-Saver Standards for Building Types. 2001",
                            "Francis Ching. Architecture: Form, Space & Order",
                            "Human Dimension & Interior Space. 1979",
                            "Metric Handbook: Planning & Design Data. 2013"
                        ].map((ref, i) => (
                            <div key={i} className="text-[10px] text-white/20 border-l border-primary/30 pl-4 py-2 uppercase tracking-widest">
                                {ref}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </main>
    );
}
