"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
    { name: "Technical Events", href: "/technical-events" },
    { name: "Non-Technical Events", href: "/non-technical-events" },
    { name: "Coordinators", href: "/coordinators" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0F0F14] border-t border-[#FF6A2A]/20 overflow-hidden">
            {/* Animated ember line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-[#FF6A2A] to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                <span className="ember-gradient-text">ZENITH</span>
                                <span className="text-[#FF6A2A]">&apos;26</span>
                            </h2>
                            <p className="text-[#888888] text-sm italic mb-4">
                                Rise of the Warrior Dragon
                            </p>
                            <p className="text-[#888888] text-sm leading-relaxed max-w-md">
                                Experience the ultimate fusion of technology and innovation at
                                Jeppiaar Engineering College&apos;s premier technical symposium.
                                Where strength meets intelligence, and fearlessness drives
                                technological dominance.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-[#EDEDED] mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#888888] hover:text-[#FF6A2A] transition-colors text-sm fire-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-[#EDEDED] mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-[#888888]">
                                <MapPin size={18} className="text-[#FF6A2A] mt-0.5 flex-shrink-0" />
                                <span>
                                    Jeppiaar Engineering College,<br />
                                    Old Mahabalipuram Road,<br />
                                    Chennai - 600119
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#888888] hover:text-[#FF6A2A] transition-colors">
                                <Mail size={18} className="text-[#FF6A2A] flex-shrink-0" />
                                <a href="mailto:zenith26@jeppiaar.org">zenith26@jeppiaar.org</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#888888] hover:text-[#FF6A2A] transition-colors">
                                <Phone size={18} className="text-[#FF6A2A] flex-shrink-0" />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-[#2A2A30]"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#888888] text-sm text-center md:text-left">
                            © 2026 ZENITH&apos;26 | Jeppiaar Engineering College. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[#888888] text-xs">Powered by</span>
                            <span className="text-[#FF6A2A] text-xs font-semibold">
                                Innovation & Excellence
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background ember effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D73A2D]/10 to-transparent" />
            </div>
        </footer>
    );
}
