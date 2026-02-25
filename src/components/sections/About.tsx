import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop"
                                alt="Fotógrafo em ação"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decoração bg */}
                        <div className="absolute -inset-4 bg-border/40 rounded-3xl -z-10 rotate-3"></div>
                        <div className="absolute -inset-4 bg-muted-foreground/10 rounded-3xl -z-10 -rotate-2"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Por trás das lentes</span>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                            Muito prazer, sou o <br /><span className="font-serif italic font-medium">Rafael Frame</span>.
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
                            <p>
                                Com mais de uma década de experiência na fotografia editorial e de casamentos,
                                minha missão é transformar momentos espontâneos em arte visual definitiva.
                            </p>
                            <p>
                                Acredito que a fotografia vai além do equipamento impecável. Trata-se de
                                conexão, empatia e de entender a linguagem não-dita de cada casal,
                                de cada pessoa que cruza o meu caminho.
                            </p>
                            <p>
                                Meu estilo mistura a crueza do fotojornalismo com a elegância de um
                                editorial de moda, criando uma estética atemporal.
                            </p>
                        </div>

                        <div className="pt-6">
                            {/* Assinatura em SVG Inline (100% à prova de falhas/links quebrados) */}
                            <svg
                                viewBox="0 0 400 100"
                                className="h-16 opacity-60 dark:opacity-80 stroke-foreground fill-none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M 30,70 C 40,50 50,30 60,30 C 70,30 65,60 70,70 C 80,45 90,40 100,50 C 105,55 95,80 110,70 C 130,55 140,40 150,55 C 160,70 145,85 160,80 C 180,75 190,60 200,65 C 210,70 195,90 220,80 C 240,70 250,55 260,65 C 265,70 255,85 270,80 C 290,70 300,60 310,75 C 320,90 310,105 340,90 C 360,80 370,60 380,70" />
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
