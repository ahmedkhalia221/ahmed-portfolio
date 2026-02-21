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

export default function Home() {
  return (
    <main className="min-h-screen">
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
            AI Product & Ad Video Creator — <span className="text-white">cinematic direction</span> and high-impact visuals.
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
              <h2 className="text-4xl md:text-5xl mb-8">Elevating product vision through <span className="text-primary">precise visual direction.</span></h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
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
              { title: "Product & Ad Videos", description: "Short, focused videos designed for high-impact products and campaigns." },
              { title: "Cinematic Visual Direction", description: "Clean imagery, intentional motion, and a tight, professional editing rhythm." },
              { title: "Product as Value", description: "Highlighting materials and intricate details in a refined, convincing way." },
              { title: "Cohesive Visual Identity", description: "A consistent style that ties your product ads into one powerful, clear brand identity." }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass p-8 rounded-3xl hover:bg-primary/5 transition-colors group"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-white/50">{skill.description}</p>
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
              { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" },
              { img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" },
              { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={project.img}
                    alt="Project Visual"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
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

            <a href="https://www.instagram.com/ahmed.khalifa_96/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/20 text-sm">
        <p>&copy; {new Date().getFullYear()} Ahmed Khalifa. Built with precision.</p>
      </footer>
    </main>
  );
}
