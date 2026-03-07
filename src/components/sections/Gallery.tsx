import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop', category: 'Casamento', aspect: 'portrait' },
    { id: 2, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&h=1380&auto=format&fit=crop', category: 'Retrato', aspect: 'landscape' },
    { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', category: 'Casamento', aspect: 'square' },
    { id: 4, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop', category: 'Editorial', aspect: 'portrait' },
    { id: 5, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', category: 'Retrato', aspect: 'portrait' },
    { id: 6, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&h=1380&auto=format&fit=crop', category: 'Casamento', aspect: 'landscape' },
];

const categories = ['Todos', 'Casamento', 'Retrato', 'Editorial'];

export function Gallery() {
    const [filter, setFilter] = useState('Todos');
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

    // Body Scroll Lock Control
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // clean up on close
        }

        // Cleanup ao desmontar
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    const filteredImages = filter === 'Todos'
        ? images
        : images.filter(img => img.category === filter);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light tracking-tight mb-4"
                    >
                        Últimos Trabalhos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl"
                    >
                        Uma curadoria especial dos momentos mais marcantes que tive o privilégio de registrar.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${filter === cat
                                ? 'bg-foreground text-background'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layoutId={`gallery-image-${img.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={img.id}
                                className="relative group overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.category}
                                    loading="lazy"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium tracking-wider uppercase border text-sm border-white/50 px-6 py-2 backdrop-blur-sm rounded-full">
                                        Ampliar
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            layoutId={`gallery-image-${selectedImage.id}`}
                            className="relative max-w-7xl max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.category}
                                className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
