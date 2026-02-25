import { Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    <div className="md:col-span-2 space-y-4">
                        <span className="text-2xl font-medium tracking-widest uppercase">
                            Frame<span className="font-light text-muted-foreground">Studio</span>
                        </span>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Capturando a essência de momentos únicos com um olhar atento e direção artística premium.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm">Links Úteis</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfólio</a>
                            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
                            <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors">Pacotes</a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm">Social</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} FrameStudio. Todos os direitos reservados.</p>
                    <a href="#" className="hover:text-foreground transition-colors mt-4 md:mt-0">Design por Orça</a>
                </div>
            </div>
        </footer>
    );
}
