"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Calendar } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                            Contact Us
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDEDED] mb-6">
                            Join the{" "}
                            <span className="ember-gradient-text">Battle</span>
                        </h1>
                        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
                            Ready to participate? Get in touch with us for registrations,
                            queries, or any information about ZENITH&apos;26.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="relative pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-8 border border-[#2A2A30]">
                                <h2 className="text-2xl font-bold text-[#EDEDED] mb-6">
                                    Send us a Message
                                </h2>
                                <form className="space-y-5" name="contact" method="POST" data-netlify="true">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[#888888] text-sm mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 bg-[#0F0F14] border border-[#2A2A30] rounded-xl text-[#EDEDED] placeholder-[#555555] focus:border-[#FF6A2A] focus:outline-none transition-colors"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[#888888] text-sm mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 bg-[#0F0F14] border border-[#2A2A30] rounded-xl text-[#EDEDED] placeholder-[#555555] focus:border-[#FF6A2A] focus:outline-none transition-colors"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[#888888] text-sm mb-2">
                                            College Name
                                        </label>
                                        <input
                                            type="text"
                                            name="college"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F14] border border-[#2A2A30] rounded-xl text-[#EDEDED] placeholder-[#555555] focus:border-[#FF6A2A] focus:outline-none transition-colors"
                                            placeholder="Enter your college name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#888888] text-sm mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F14] border border-[#2A2A30] rounded-xl text-[#EDEDED] placeholder-[#555555] focus:border-[#FF6A2A] focus:outline-none transition-colors"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#888888] text-sm mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-[#0F0F14] border border-[#2A2A30] rounded-xl text-[#EDEDED] placeholder-[#555555] focus:border-[#FF6A2A] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us which events you're interested in..."
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-gradient-to-r from-[#D73A2D] to-[#FF6A2A] rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#D73A2D]/30 transition-shadow"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Event Details */}
                            <div className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-6 border border-[#2A2A30]">
                                <h3 className="text-xl font-bold text-[#EDEDED] mb-4">
                                    Event Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FF6A2A]/10 rounded-xl flex items-center justify-center">
                                            <Calendar className="w-6 h-6 text-[#FF6A2A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#888888] text-sm">Date</p>
                                            <p className="text-[#EDEDED] font-semibold">March 15-16, 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FF6A2A]/10 rounded-xl flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-[#FF6A2A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#888888] text-sm">Time</p>
                                            <p className="text-[#EDEDED] font-semibold">9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-6 border border-[#2A2A30]">
                                <h3 className="text-xl font-bold text-[#EDEDED] mb-4">
                                    Get In Touch
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#FF6A2A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-[#FF6A2A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#888888] text-sm">Address</p>
                                            <p className="text-[#EDEDED]">
                                                Jeppiaar Engineering College,<br />
                                                Old Mahabalipuram Road,<br />
                                                Chennai - 600119, Tamil Nadu
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FF6A2A]/10 rounded-xl flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-[#FF6A2A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#888888] text-sm">Email</p>
                                            <a href="mailto:zenith26@jeppiaar.org" className="text-[#EDEDED] hover:text-[#FF6A2A] transition-colors">
                                                zenith26@jeppiaar.org
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FF6A2A]/10 rounded-xl flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-[#FF6A2A]" />
                                        </div>
                                        <div>
                                            <p className="text-[#888888] text-sm">Phone</p>
                                            <a href="tel:+919876543210" className="text-[#EDEDED] hover:text-[#FF6A2A] transition-colors">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-1 border border-[#2A2A30] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2583838890407!2d80.22567731482198!3d12.871551090927526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0c189ca6d5%3A0x9b5e48d87c4b7d3e!2sJeppiaar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: "0.875rem" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
