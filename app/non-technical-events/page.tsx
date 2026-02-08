"use client";

import { motion } from "framer-motion";
import { Camera, Gamepad2, Music, Palette, Mic, Trophy, Users, Sparkles, Film, Puzzle } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

const nonTechnicalEvents = [
    {
        title: "Gaming Arena",
        description: "Compete in popular esports titles including Valorant, BGMI, and FIFA. Show your gaming skills and claim the champion title.",
        category: "Gaming",
        icon: <Gamepad2 className="w-8 h-8" />,
    },
    {
        title: "Treasure Hunt",
        description: "Decode cryptic clues, solve puzzles, and race against time to find the hidden treasure across the campus.",
        category: "Adventure",
        icon: <Puzzle className="w-8 h-8" />,
    },
    {
        title: "Photography Contest",
        description: "Capture moments that tell stories. Let your lens speak in this creative showdown with multiple theme categories.",
        category: "Creative",
        icon: <Camera className="w-8 h-8" />,
    },
    {
        title: "Battle of Bands",
        description: "Rock the stage with your band! Compete for the title of the best musical group at ZENITH'26.",
        category: "Music",
        icon: <Music className="w-8 h-8" />,
    },
    {
        title: "Art Attack",
        description: "Showcase your artistic talents in painting, sketching, and digital art competitions.",
        category: "Art",
        icon: <Palette className="w-8 h-8" />,
    },
    {
        title: "Stand-up Comedy",
        description: "Make the crowd laugh! Perform your best comedy set and compete for the funniest person award.",
        category: "Entertainment",
        icon: <Mic className="w-8 h-8" />,
    },
    {
        title: "Sports Tournament",
        description: "Compete in various sports including cricket, football, basketball, and badminton tournaments.",
        category: "Sports",
        icon: <Trophy className="w-8 h-8" />,
    },
    {
        title: "Group Dance",
        description: "Form a crew and battle it out on the dance floor. Style, synchronization, and energy win the day.",
        category: "Dance",
        icon: <Sparkles className="w-8 h-8" />,
    },
    {
        title: "Short Film Festival",
        description: "Submit your short films and compete for the best director, cinematography, and screenplay awards.",
        category: "Film",
        icon: <Film className="w-8 h-8" />,
    },
    {
        title: "Team Building",
        description: "Participate in fun team challenges that test communication, strategy, and teamwork skills.",
        category: "Team",
        icon: <Users className="w-8 h-8" />,
    },
];

export default function NonTechnicalEventsPage() {
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
                            className="inline-block px-4 py-2 bg-[#FF6A2A]/10 border border-[#FF6A2A]/30 rounded-full text-[#FF6A2A] text-sm font-semibold uppercase tracking-wider mb-6"
                        >
                            Non-Technical Events
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDED] mb-6">
                            Unleash Your{" "}
                            <span className="ember-gradient-text">Creative Spirit</span>
                        </h1>
                        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
                            Fun, creativity, and entertainment await! Explore events that showcase
                            talents beyond the technical realm.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="relative pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nonTechnicalEvents.map((event, index) => (
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
