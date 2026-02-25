import { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, MoveLeft } from 'lucide-react';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
}

export function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDrag = (clientX: number) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = clientX - left;
        const percentage = Math.max(0, Math.min(100, (x / width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleDrag(e.touches[0].clientX);

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <div className="md:w-1/3 flex flex-col items-start text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-light tracking-tight mb-4"
                        >
                            A Arte da Pós-Produção
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground mb-6"
                        >
                            Cada fotografia passa por um processo rigoroso de color grading e retouching. A captura é apenas metade do trabalho; a finalização é onde imprimimos a estética de cinema em suas memórias limitadas.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-2 items-center text-sm font-medium tracking-wide text-foreground/70"
                        >
                            <MoveLeft className="w-4 h-4" /> Deslize para ver o antes e depois <MoveRight className="w-4 h-4" />
                        </motion.div>
                    </div>

                    {/* Slider Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-2/3 relative w-full aspect-[4/3] max-h-[600px] overflow-hidden rounded-xl cursor-ew-resize touch-none interactive"
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                    >
                        {/* After Image (Background) */}
                        <img
                            src={afterImage}
                            alt="Editada"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />

                        {/* Before Image (Foreground, clipped) */}
                        <div
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src={beforeImage}
                                alt="Original"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-lg pointer-events-none backdrop-blur-md">
                                <div className="flex gap-1">
                                    <MoveLeft className="w-3 h-3" />
                                    <MoveRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        {/* Labels */}
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase pointer-events-none">
                            RAW
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase pointer-events-none">
                            Final
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
