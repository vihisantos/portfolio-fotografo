import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Previne rolagem quando o menu mob está aberto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Sobre', href: '#about' },
        { name: 'Pacotes', href: '#packages' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ease-in-out',
                isScrolled || mobileMenuOpen
                    ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-[110]">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <Camera className="w-6 h-6 text-foreground group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-medium tracking-widest uppercase text-foreground">
                        Frame<span className="font-light text-muted-foreground">Studio</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ModeToggle />
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button
                        className="text-foreground p-2 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Premium Fullscreen Blur */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] bg-background/95 md:hidden flex flex-col items-center justify-center pt-20"
                    >
                        <nav className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-light text-foreground hover:text-primary transition-colors tracking-wide w-full text-center py-2"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
