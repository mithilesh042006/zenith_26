"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Technical Events", href: "/technical-events" },
    { name: "Non-Technical Events", href: "/non-technical-events" },
    { name: "Coordinators", href: "/coordinators" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#0F0F14]/95 backdrop-blur-md border-b border-[#FF6A2A]/20 shadow-lg shadow-[#D73A2D]/10"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <span className="text-2xl md:text-3xl font-bold tracking-wider">
                                    <span className="ember-gradient-text">ZENITH</span>
                                    <span className="text-[#FF6A2A]">&apos;26</span>
                                </span>
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A]"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-[#EDEDED]/80 hover:text-[#EDEDED] transition-colors group"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-full"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "80%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-[#FF6A2A]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Register CTA - Desktop */}
                        <div className="hidden lg:block">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-6 py-2.5 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-full font-semibold text-white text-sm overflow-hidden group"
                                >
                                    <span className="relative z-10">Register Now</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#FF6A2A] to-[#D73A2D]"
                                        initial={{ x: "100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#EDEDED] hover:text-[#FF6A2A] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden pt-16"
                    >
                        <div
                            className="absolute inset-0 bg-[#0F0F14]/98 backdrop-blur-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative flex flex-col items-center justify-center h-full gap-6 p-8"
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: 0.05 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-semibold text-[#EDEDED]/80 hover:text-[#FF6A2A] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: 0.35 }}
                                className="mt-4"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="px-8 py-3 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-full font-semibold text-white text-lg">
                                        Register Now
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
