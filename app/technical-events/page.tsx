"use client";

import { motion } from "framer-motion";
import { Code, Brain, Cpu, Database, Globe, Lightbulb, Rocket, Shield, Terminal, Zap } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

const technicalEvents = [
    {
        title: "Code Warriors",
        description: "An intense competitive programming contest. Solve complex algorithmic challenges within a time limit and prove your coding supremacy.",
        category: "Coding",
        icon: <Code className="w-8 h-8" />,
    },
    {
        title: "Tech Quiz",
        description: "Test your knowledge across multiple domains including AI, cybersecurity, web development, and emerging technologies.",
        category: "Quiz",
        icon: <Brain className="w-8 h-8" />,
    },
    {
        title: "Hackathon",
        description: "48 hours of non-stop innovation. Build real-world solutions, collaborate with teams, and present to industry experts.",
        category: "Innovation",
        icon: <Rocket className="w-8 h-8" />,
    },
    {
        title: "Paper Presentation",
        description: "Present your research and innovative ideas to a panel of experts. Showcase your technical writing and presentation skills.",
        category: "Research",
        icon: <Lightbulb className="w-8 h-8" />,
    },
    {
        title: "Debugging Challenge",
        description: "Find and fix bugs in complex codebases. Race against time and other participants to debug the most errors.",
        category: "Coding",
        icon: <Terminal className="w-8 h-8" />,
    },
    {
        title: "Web Development",
        description: "Design and develop stunning websites from scratch. Compete on creativity, functionality, and code quality.",
        category: "Development",
        icon: <Globe className="w-8 h-8" />,
    },
    {
        title: "AI/ML Challenge",
        description: "Build machine learning models to solve real-world problems. Compete on accuracy, efficiency, and innovation.",
        category: "AI/ML",
        icon: <Cpu className="w-8 h-8" />,
    },
    {
        title: "Database Design",
        description: "Design efficient database schemas and write optimized queries. Test your data management skills.",
        category: "Database",
        icon: <Database className="w-8 h-8" />,
    },
    {
        title: "Cybersecurity CTF",
        description: "Capture the Flag competition. Exploit vulnerabilities, decode ciphers, and secure systems.",
        category: "Security",
        icon: <Shield className="w-8 h-8" />,
    },
    {
        title: "Circuit Design",
        description: "Design and simulate electronic circuits. Test your hardware skills in this hands-on competition.",
        category: "Hardware",
        icon: <Zap className="w-8 h-8" />,
    },
];

export default function TechnicalEventsPage() {
    return (
        <div className="relative min-h-screen bg-[#0F0F14]">
            <AnimatedBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-[#D73A2D]/10 border border-[#D73A2D]/30 rounded-full text-[#FF6A2A] text-sm font-semibold uppercase tracking-wider mb-6"
                        >
                            Technical Events
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDED] mb-6">
                            Battle of the{" "}
                            <span className="ember-gradient-text">Brilliant Minds</span>
                        </h1>
                        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
                            Challenge yourself in coding, innovation, and technical prowess.
                            Compete with the best and prove your technological dominance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="relative pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalEvents.map((event, index) => (
                            <EventCard
                                key={event.title}
                                title={event.title}
                                description={event.description}
                                category={event.category}
                                icon={event.icon}
                                href="/contact"
                                delay={0.05 * index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
