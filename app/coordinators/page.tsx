"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const staffCoordinators = [
    {
        name: "Dr. S. Ramesh Kumar",
        department: "Computer Science & Engineering",
        role: "Chief Coordinator",
        email: "ramesh.kumar@jeppiaar.org",
        phone: "+91 98765 43210",
    },
    {
        name: "Dr. P. Lakshmi Priya",
        department: "Electronics & Communication",
        role: "Technical Events Head",
        email: "lakshmi.priya@jeppiaar.org",
        phone: "+91 98765 43211",
    },
    {
        name: "Prof. M. Venkatesh",
        department: "Mechanical Engineering",
        role: "Non-Technical Events Head",
        email: "venkatesh.m@jeppiaar.org",
        phone: "+91 98765 43212",
    },
    {
        name: "Dr. K. Anitha",
        department: "Information Technology",
        role: "Registration Coordinator",
        email: "anitha.k@jeppiaar.org",
        phone: "+91 98765 43213",
    },
    {
        name: "Prof. R. Suresh",
        department: "Electrical & Electronics",
        role: "Logistics Head",
        email: "suresh.r@jeppiaar.org",
        phone: "+91 98765 43214",
    },
    {
        name: "Dr. V. Pradeep",
        department: "Civil Engineering",
        role: "Infrastructure Coordinator",
        email: "pradeep.v@jeppiaar.org",
        phone: "+91 98765 43215",
    },
];

const studentCoordinators = [
    {
        name: "Arun Kumar",
        department: "Computer Science & Engineering",
        year: "Final Year",
        role: "Overall Coordinator",
        email: "arun.kumar@student.jeppiaar.org",
        phone: "+91 98765 12345",
    },
    {
        name: "Priya Sharma",
        department: "Electronics & Communication",
        year: "Final Year",
        role: "Technical Events Lead",
        email: "priya.sharma@student.jeppiaar.org",
        phone: "+91 98765 12346",
    },
    {
        name: "Vikram Raj",
        department: "Information Technology",
        year: "Third Year",
        role: "Non-Technical Events Lead",
        email: "vikram.raj@student.jeppiaar.org",
        phone: "+91 98765 12347",
    },
    {
        name: "Sneha Reddy",
        department: "Computer Science & Engineering",
        year: "Final Year",
        role: "Registration Head",
        email: "sneha.reddy@student.jeppiaar.org",
        phone: "+91 98765 12348",
    },
    {
        name: "Karthik Rajan",
        department: "Mechanical Engineering",
        year: "Third Year",
        role: "Logistics Head",
        email: "karthik.rajan@student.jeppiaar.org",
        phone: "+91 98765 12349",
    },
    {
        name: "Divya Krishnan",
        department: "Electronics & Communication",
        year: "Final Year",
        role: "Marketing Head",
        email: "divya.k@student.jeppiaar.org",
        phone: "+91 98765 12350",
    },
    {
        name: "Rahul Menon",
        department: "Information Technology",
        year: "Third Year",
        role: "Design Head",
        email: "rahul.menon@student.jeppiaar.org",
        phone: "+91 98765 12351",
    },
    {
        name: "Ananya Nair",
        department: "Computer Science & Engineering",
        year: "Third Year",
        role: "Social Media Head",
        email: "ananya.nair@student.jeppiaar.org",
        phone: "+91 98765 12352",
    },
];

export default function CoordinatorsPage() {
    return (
        <div className="relative min-h-screen bg-[#0F0F14]">
            <AnimatedBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
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
                            Our Team
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDED] mb-6">
                            Meet the{" "}
                            <span className="ember-gradient-text">Warriors</span>
                        </h1>
                        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
                            The dedicated faculty and passionate students who lead ZENITH&apos;26 to glory.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Staff Coordinators Section */}
            <section className="relative pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EDEDED] mb-2">
                            Faculty Coordinators
                        </h2>
                        <p className="text-[#888888]">The guiding forces behind ZENITH&apos;26</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffCoordinators.map((coordinator, index) => (
                            <motion.div
                                key={coordinator.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group relative"
                            >
                                <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-6 border border-[#2A2A30] overflow-hidden transition-all duration-300 hover:border-[#FF6A2A]/50 card-glow">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A2A]/50 to-transparent" />

                                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6A2A] bg-[#FF6A2A]/10 rounded-full mb-4 border border-[#FF6A2A]/20">
                                        {coordinator.role}
                                    </span>

                                    <h3 className="text-xl font-bold text-[#EDEDED] mb-2 group-hover:text-white transition-colors">
                                        {coordinator.name}
                                    </h3>

                                    <p className="text-[#888888] text-sm mb-4">
                                        {coordinator.department}
                                    </p>

                                    <div className="space-y-2 pt-4 border-t border-[#2A2A30]">
                                        <a
                                            href={`mailto:${coordinator.email}`}
                                            className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#FF6A2A] transition-colors"
                                        >
                                            <Mail size={16} className="text-[#FF6A2A]" />
                                            {coordinator.email}
                                        </a>
                                        <a
                                            href={`tel:${coordinator.phone}`}
                                            className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#FF6A2A] transition-colors"
                                        >
                                            <Phone size={16} className="text-[#FF6A2A]" />
                                            {coordinator.phone}
                                        </a>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D73A2D]/30 to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-[#D73A2D] to-transparent"
                />
            </div>

            {/* Student Coordinators Section */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#EDEDED] mb-2">
                            Student Coordinators
                        </h2>
                        <p className="text-[#888888]">The rising warriors driving ZENITH&apos;26 forward</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {studentCoordinators.map((coordinator, index) => (
                            <motion.div
                                key={coordinator.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.05 * index }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-5 border border-[#2A2A30] overflow-hidden transition-all duration-300 hover:border-[#FF6A2A]/50 card-glow h-full">
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: "radial-gradient(circle at 50% 0%, rgba(255, 106, 42, 0.15) 0%, transparent 60%)",
                                        }}
                                    />

                                    <span className="relative inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6A2A] bg-[#FF6A2A]/10 rounded-full mb-3 border border-[#FF6A2A]/20">
                                        {coordinator.role}
                                    </span>

                                    <h3 className="relative text-lg font-bold text-[#EDEDED] mb-1 group-hover:text-white transition-colors">
                                        {coordinator.name}
                                    </h3>

                                    <p className="relative text-[#888888] text-xs mb-1">
                                        {coordinator.department}
                                    </p>
                                    <p className="relative text-[#FF6A2A]/70 text-xs mb-4">
                                        {coordinator.year}
                                    </p>

                                    <div className="relative flex items-center gap-3 pt-3 border-t border-[#2A2A30]">
                                        <a
                                            href={`mailto:${coordinator.email}`}
                                            className="p-2 bg-[#2A2A30] rounded-lg hover:bg-[#FF6A2A]/20 transition-colors"
                                            title="Email"
                                        >
                                            <Mail size={14} className="text-[#FF6A2A]" />
                                        </a>
                                        <a
                                            href={`tel:${coordinator.phone}`}
                                            className="p-2 bg-[#2A2A30] rounded-lg hover:bg-[#FF6A2A]/20 transition-colors"
                                            title="Phone"
                                        >
                                            <Phone size={14} className="text-[#FF6A2A]" />
                                        </a>
                                        <a
                                            href="#"
                                            className="p-2 bg-[#2A2A30] rounded-lg hover:bg-[#FF6A2A]/20 transition-colors"
                                            title="LinkedIn"
                                        >
                                            <Linkedin size={14} className="text-[#FF6A2A]" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
