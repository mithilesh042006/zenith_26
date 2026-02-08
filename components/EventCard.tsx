"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface EventCardProps {
    title: string;
    description: string;
    category?: string;
    icon?: React.ReactNode;
    href?: string;
    delay?: number;
}

export default function EventCard({
    title,
    description,
    category,
    icon,
    href = "#",
    delay = 0,
}: EventCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative"
        >
            <div className="relative bg-gradient-to-br from-[#1A1A1F] to-[#0F0F14] rounded-2xl p-6 border border-[#2A2A30] overflow-hidden transition-all duration-300 hover:border-[#FF6A2A]/50 card-glow">
                {/* Ember glow effect on hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(255, 106, 42, 0.1) 0%, transparent 50%)",
                    }}
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#FF6A2A]/20 to-transparent transform rotate-45 translate-x-14 -translate-y-14 group-hover:from-[#FF6A2A]/40 transition-all duration-300" />
                </div>

                {/* Category badge */}
                {category && (
                    <motion.span
                        className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF6A2A] bg-[#FF6A2A]/10 rounded-full mb-4 border border-[#FF6A2A]/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        {category}
                    </motion.span>
                )}

                {/* Icon */}
                {icon && (
                    <div className="mb-4 text-[#FF6A2A] group-hover:text-[#D73A2D] transition-colors">
                        {icon}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-[#EDEDED] mb-3 group-hover:text-white transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#888888] text-sm leading-relaxed mb-6 group-hover:text-[#AAAAAA] transition-colors">
                    {description}
                </p>

                {/* Register Button */}
                <Link href={href}>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-gradient-to-r from-[#D73A2D]/80 to-[#FF6A2A]/80 hover:from-[#D73A2D] hover:to-[#FF6A2A] rounded-xl font-semibold text-white text-sm transition-all duration-300 relative overflow-hidden group/btn"
                    >
                        <span className="relative z-10">Register Now</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#FF6A2A] to-[#D73A2D] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        />
                    </motion.button>
                </Link>

                {/* Bottom ember line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6A2A] to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
}
