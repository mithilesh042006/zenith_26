"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    size: number;
    opacity: number;
    speed: number;
    delay: number;
}

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);
    
    const particles = useMemo(() => {
        const np: Particle[] = [];
        for (let i = 0; i < 40; i++) {
            np.push({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * 4 + 2,
                opacity: Math.random() * 0.5 + 0.3,
                speed: Math.random() * 20 + 15,
                delay: Math.random() * 8
            });
        }
        return np;
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="fixed inset-0 bg-[#0F0F14] z-0" />;

    return (
        <div className="fixed inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F14] via-[#1A1A1F] to-[#0F0F14]" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(215,58,45,0.12)_0%,transparent_60%)]" />

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
                            boxShadow: `0 0 ${p.size * 3}px rgba(255, 106, 42, ${p.opacity})`
                        }}
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, p.opacity, p.opacity, 0] }}
                        transition={{ 
                            duration: p.speed, 
                            delay: p.delay, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,15,20,0.7)_100%)] pointer-events-none" />
        </div>
    );
}
