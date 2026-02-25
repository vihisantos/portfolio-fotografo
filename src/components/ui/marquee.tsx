import { motion } from 'framer-motion';

const words = [
    "WEDDING", "•", "EDITORIAL", "•", "LIFESTYLE", "•", "FASHION", "•",
    "PORTRAITS", "•", "FINE ART", "•"
];

// Duplicar para criar o loop contínuo perfeito
const marqueeContent = [...words, ...words, ...words, ...words];

export function Marquee() {
    return (
        <div className="w-full bg-foreground text-background py-6 overflow-hidden flex items-center border-y border-border/10">
            <motion.div
                className="flex whitespace-nowrap gap-12 text-2xl md:text-4xl font-serif italic tracking-widest opacity-80"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {marqueeContent.map((word, i) => (
                    <span key={i} className={word === "•" ? "text-primary/50" : ""}>
                        {word}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
