"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    size: number;
    opacity: number;
    speed: number;
    delay: number;
}

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mounted, setMounted] = useState(false);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 100 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothMouseY, [0, 1], [25, -25]);
    const rotateY = useTransform(smoothMouseX, [0, 1], [-25, 25]);
    const rotateX2 = useTransform(smoothMouseY, [0, 1], [12, -12]);
    const rotateY2 = useTransform(smoothMouseX, [0, 1], [-12, 12]);
    const moveX = useTransform(smoothMouseX, [0, 1], [-80, 80]);
    const moveY = useTransform(smoothMouseY, [0, 1], [-80, 80]);
    const moveX2 = useTransform(smoothMouseX, [0, 1], [-40, 40]);
    const moveY2 = useTransform(smoothMouseY, [0, 1], [-40, 40]);

    useEffect(() => {
        setMounted(true);
        const newParticles: Particle[] = [];
        for (let i = 0; i < 50; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * 5 + 2,
                opacity: Math.random() * 0.6 + 0.3,
                speed: Math.random() * 18 + 12,
                delay: Math.random() * 5,
            });
        }
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return <div className="fixed inset-0 bg-[#0F0F14] z-0" />;

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden z-0" style={{ perspective: "1000px" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F14] via-[#1A1A1F] to-[#0F0F14]" />

            <motion.div className="absolute inset-0 flex items-center justify-center" style={{ rotateX, rotateY, x: moveX, y: moveY }}>
                <svg viewBox="0 0 1200 800" className="w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="dragonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D73A2D" />
                            <stop offset="50%" stopColor="#FF6A2A" />
                            <stop offset="100%" stopColor="#8B2635" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path d="M600 100 L750 250 L950 300 L800 400 L900 600 L600 500 L300 600 L400 400 L250 300 L450 250 Z" fill="url(#dragonGrad)" filter="url(#glow)" />
                    <path d="M600 250 L700 400 L600 550 L500 400 Z" fill="none" stroke="#FF6A2A" strokeWidth="3" opacity="0.6" />
                </svg>
            </motion.div>

            <motion.div className="absolute inset-0 flex items-center justify-center" style={{ rotateX: rotateX2, rotateY: rotateY2, x: moveX2, y: moveY2 }}>
                <svg viewBox="0 0 1200 800" className="w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="warriorGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B2635" />
                            <stop offset="100%" stopColor="#D73A2D" />
                        </linearGradient>
                    </defs>
                    <path d="M200 350 L350 250 L500 350 L450 550 L350 650 L250 550 Z" fill="url(#warriorGrad)" />
                    <path d="M850 100 L900 150 L870 550 L850 600 L830 550 L800 150 Z" fill="url(#warriorGrad)" />
                </svg>
            </motion.div>

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${p.x}%`,
                            width: p.size,
                            height: p.size,
                            background: "radial-gradient(circle, #FF6A2A, #D73A2D, transparent)",
                            boxShadow: `0 0 ${p.size * 4}px rgba(255, 106, 42, ${p.opacity})`,
                        }}
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, p.opacity, p.opacity, 0] }}
                        transition={{ duration: p.speed, delay: p.delay, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,15,20,0.7)_100%)] pointer-events-none" />
        </div>
    );
}
