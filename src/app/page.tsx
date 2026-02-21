"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const Navbar = () => (
  <motion.nav
    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-8 text-sm font-medium text-white/70 backdrop-blur-xl border border-white/10"
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <a href="#about" className="hover:text-primary transition-colors">About</a>
    <a href="#skills" className="hover:text-primary transition-colors">Expertise</a>
    <a href="#portfolio" className="hover:text-primary transition-colors">Works</a>
    <a href="/research" className="hover:text-primary transition-all border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">Academic Study</a>
    <a href="#contact" className="hover:text-primary transition-colors border-l border-white/10 pl-8 ml-2">Contact</a>
  </motion.nav>
);

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

        <div className="section-container text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-lighter flex items-center justify-center">
                <Image
                  src="/profile-ahmed.jpg"
                  alt="Ahmed Khalifa"
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
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-6">
              Available for Projects
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ahmed Khalifa <span className="text-white/40">.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Product & Ad Video Creator — <span className="text-white font-semibold italic">cinematic direction</span> and high-impact visuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary inline-block">
              Contact Me
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
              <h2 className="text-4xl md:text-5xl mb-8 leading-[1.2]">Elevating product vision through <span className="text-primary italic">precise visual direction.</span></h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6 font-medium">
                With an architecture mindset and a passion for AI-powered creation, I bridge concept and commercial impact. My approach is rooted in functional minimalism, strong composition, and cinematic aesthetics.
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
                  <span className="text-white/40">Location</span>
                  <span>Egypt</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40">Role</span>
                  <span>Creative Director</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40">Experience</span>
                  <span>5+ Years</span>
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
            <h2 className="text-4xl md:text-5xl mb-4">Core Expertise</h2>
            <p className="text-white/50 text-xl font-outfit">What I offer as a service</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Product & Ad Videos",
                description: "Short, focused videos designed for high-impact products and campaigns.",
                icon: (
                  <svg className="w-8 h-8 mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Cinematic Visual Direction",
                description: "Clean imagery, intentional motion, and a tight, professional editing rhythm.",
                icon: (
                  <svg className="w-8 h-8 mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11h6m-6 4h6m-6-8h1" />
                  </svg>
                )
              },
              {
                title: "Product as Value",
                description: "Highlighting materials and intricate details in a refined, convincing way.",
                icon: (
                  <svg className="w-8 h-8 mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              },
              {
                title: "Cohesive Visual Identity",
                description: "A consistent style that ties your product ads into one powerful, clear brand identity.",
                icon: (
                  <svg className="w-8 h-8 mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass p-8 rounded-3xl hover:bg-primary/5 hover:border-primary/20 transition-all group border border-white/5"
                whileHover={{ y: -10 }}
              >
                {skill.icon}
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
              <h2 className="text-4xl md:text-5xl mb-4">Selected Works</h2>
              <p className="text-white/50 text-xl font-outfit">A glimpse into my diverse projects across design and architecture.</p>
            </div>
            <motion.a
              href="#"
              className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
              whileHover={{ x: 5 }}
            >
              Explore Full Gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
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
              { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", title: "Academic Case Study: Villa Design", link: "/research", tag: "Architectural Research" },
              { img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop", title: "Cinematic Visuals" }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => project.link && (window.location.href = project.link)}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {project.tag && (
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full border border-primary/30 uppercase tracking-widest">
                        {project.tag}
                      </span>
                    </div>
                  )}

                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                    <span className="px-6 py-2 rounded-full glass text-sm font-medium">View Project</span>
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
              <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter">Let's build <span className="text-gradient">something iconic.</span></h2>
              <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
                Ready to transform your vision into reality? Reach out and let's start a conversation about your next project.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:ahmedkhalifa875@icloud.com" className="btn-primary w-full md:w-auto">
                  Email
                </a>
                <a href="https://wa.me/201104344679" target="_blank" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all w-full md:w-auto">
                  WhatsApp
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
          <p className="text-white/20 text-sm mb-6">&copy; {new Date().getFullYear()} Ahmed Khalifa. Built with precision.</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors flex flex-col items-center gap-2 mx-auto"
            whileHover={{ y: -5 }}
          >
            <span className="text-lg">↑</span>
            Back to Top
          </motion.button>
        </div>
      </footer>
    </main>
  );
}
