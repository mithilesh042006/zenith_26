"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Gamepad2, Users, GraduationCap, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

const technicalEvents = [
  {
    title: "Code Warriors",
    description: "Battle it out in an intense coding competition. Solve algorithmic challenges and prove your programming prowess.",
    category: "Technical",
  },
  {
    title: "Tech Quiz",
    description: "Test your knowledge across domains - from AI to cybersecurity. Only the sharpest minds will prevail.",
    category: "Technical",
  },
  {
    title: "Hackathon",
    description: "48 hours of non-stop innovation. Build solutions that matter and compete for glory.",
    category: "Technical",
  },
];

const nonTechnicalEvents = [
  {
    title: "Gaming Arena",
    description: "Compete in popular esports titles. Show your gaming skills and claim victory.",
    category: "Non-Technical",
  },
  {
    title: "Treasure Hunt",
    description: "Decode clues, solve puzzles, and race against time to find the hidden treasure.",
    category: "Non-Technical",
  },
  {
    title: "Photography",
    description: "Capture moments that tell stories. Let your lens speak in this creative showdown.",
    category: "Non-Technical",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F0F14]">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* College Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#888888] text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Jeppiaar Engineering College Presents
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight"
          >
            <span className="ember-gradient-text text-glow">ZENITH</span>
            <span className="text-[#FF6A2A]">&apos;26</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#EDEDED]/80 font-light italic mb-8"
          >
            Rise of the Warrior Dragon
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#888888] text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            Experience the ultimate fusion of strength, intelligence, and technological dominance.
            Join us for the most epic technical symposium of 2026.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-full font-bold text-white text-lg shadow-lg shadow-[#D73A2D]/30 hover:shadow-[#D73A2D]/50 transition-shadow ember-pulse"
              >
                Register Now
              </motion.button>
            </Link>
            <Link href="/technical-events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#FF6A2A]/50 hover:border-[#FF6A2A] rounded-full font-bold text-[#EDEDED] text-lg transition-colors flex items-center gap-2"
              >
                View Events <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#FF6A2A]/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-[#FF6A2A] rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#D73A2D] to-transparent mb-16 md:mb-24"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="ember-gradient-text">The Battle</span>
                <br />
                <span className="text-[#EDEDED]">Begins Here</span>
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed mb-6">
                ZENITH&apos;26 is not just a symposium — it&apos;s a battlefield of innovation
                where the brightest minds clash in an epic display of technical prowess
                and creative excellence.
              </p>
              <p className="text-[#888888] text-lg leading-relaxed">
                Like the legendary fusion of Warrior and Dragon, we combine
                <span className="text-[#FF6A2A]"> strength</span>,
                <span className="text-[#D73A2D]"> intelligence</span>,
                <span className="text-[#FF6A2A]"> fearlessness</span>, and
                <span className="text-[#D73A2D]"> technological dominance</span>
                — to create an unforgettable experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Zap, label: "20+ Events", desc: "Diverse competitions" },
                { icon: Users, label: "1000+ Participants", desc: "From all colleges" },
                { icon: GraduationCap, label: "Expert Judges", desc: "Industry leaders" },
                { icon: Gamepad2, label: "Gaming Zone", desc: "Esports arena" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-[#1A1A1F] border border-[#2A2A30] rounded-xl p-6 text-center hover:border-[#FF6A2A]/50 transition-colors card-glow"
                >
                  <item.icon className="w-8 h-8 text-[#FF6A2A] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#EDEDED] mb-1">{item.label}</h3>
                  <p className="text-[#888888] text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-2">
                  Technical Events
                </h2>
                <p className="text-[#888888]">
                  Challenge your technical skills and compete with the best
                </p>
              </div>
              <Link href="/technical-events">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="hidden md:flex items-center gap-2 text-[#FF6A2A] hover:text-[#D73A2D] font-semibold transition-colors"
                >
                  View All <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  {...event}
                  href="/technical-events"
                  delay={0.1 * index}
                />
              ))}
            </div>
          </motion.div>

          {/* Non-Technical Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-2">
                  Non-Technical Events
                </h2>
                <p className="text-[#888888]">
                  Fun, creativity, and entertainment await you
                </p>
              </div>
              <Link href="/non-technical-events">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="hidden md:flex items-center gap-2 text-[#FF6A2A] hover:text-[#D73A2D] font-semibold transition-colors"
                >
                  View All <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonTechnicalEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  {...event}
                  href="/non-technical-events"
                  delay={0.1 * index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] border border-[#FF6A2A]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D73A2D]/10 to-[#FF6A2A]/5 opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="ember-gradient-text">Ready to Battle?</span>
              </h2>
              <p className="text-[#888888] text-lg max-w-xl mx-auto mb-8">
                Join thousands of warriors in the ultimate technical showdown.
                Register now and claim your spot in ZENITH&apos;26!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-full font-bold text-white text-lg shadow-lg shadow-[#D73A2D]/30 hover:shadow-[#D73A2D]/50 transition-shadow"
                >
                  Register Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
