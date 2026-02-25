import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, ArrowRight, Star } from 'lucide-react';
import { Gallery } from '@/components/sections/Gallery';
import { About } from '@/components/sections/About';
import { Packages } from '@/components/sections/Packages';
import { Contact } from '@/components/sections/Contact';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Marquee } from '@/components/ui/marquee';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';

export function Home() {
    return (
        <div className="w-full relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 z-0 bg-neutral-900 dark:bg-neutral-950">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                </div>

                <div className="container relative z-10 px-6 flex flex-col items-center text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground text-sm font-medium tracking-wide mb-6">
                            <Star className="w-4 h-4 text-yellow-500" />
                            Fotografia Profissional
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground max-w-4xl"
                    >
                        Eternizando sua <br />
                        <span className="font-serif italic text-foreground/90">verdadeira essência</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
                    >
                        Ensaios criativos, artísticos e autênticos. Transformando momentos efêmeros em memórias atemporais.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 interactive"
                    >
                        <Button size="lg" className="rounded-full">
                            <a href="#packages" className="flex items-center">
                                Solicitar Orçamento
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm">
                            <a href="#portfolio" className="flex items-center">
                                Ver Portfólio
                                <Camera className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Marquee />

            {/* Sections */}
            <Gallery />
            <BeforeAfter
                afterImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
                beforeImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=10&w=2000&auto=format&fit=crop&sat=-100&bri=50"
            />
            <About />
            <Packages />
            <Testimonials />
            <FAQ />
            <Contact />

            {/* Globals */}
            <FloatingWhatsApp />
        </div>
    );
}
