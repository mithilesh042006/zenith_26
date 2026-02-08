"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Particle { id: number; x: number; size: number; opacity: number; speed: number; delay: number; }

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const springConfig = { damping: 20, stiffness: 100 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);
    const moveX = useTransform(smoothMouseX, [0, 1], [-30, 30]);
    const moveY = useTransform(smoothMouseY, [0, 1], [-30, 30]);

    useEffect(() => {
        setMounted(true);
        const np: Particle[] = [];
        for (let i = 0; i < 60; i++) {
            np.push({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * 5 + 2,
                opacity: Math.random() * 0.6 + 0.3,
                speed: Math.random() * 18 + 12,
                delay: Math.random() * 5
            });
        }
        setParticles(np);
    }, []);

    useEffect(() => {
        const h = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", h);
        return () => window.removeEventListener("mousemove", h);
    }, [mouseX, mouseY]);

    if (!mounted) return <div className="fixed inset-0 bg-[#0F0F14] z-0" />;

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F14] via-[#1A1A1F] to-[#0F0F14]" />
            
            <motion.div 
                className="absolute inset-0"
                style={{ x: moveX, y: moveY }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(215,58,45,0.12)_0%,transparent_60%)]" />
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
                            boxShadow: `0 0 ${p.size * 4}px rgba(255, 106, 42, ${p.opacity})`
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
