import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Carolina & Matheus',
        role: 'Casamento',
        content: 'A sensibilidade em cada clique superou qualquer expectativa. Não foram apenas fotos, mas as emoções do momento capturadas de forma que nos fez chorar de novo. Impecável e profissional!',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=200&auto=format&fit=crop',
    },
    {
        name: 'Amanda Silveira',
        role: 'Editorial de Moda',
        content: 'Trabalho sublime com a luz e pós-produção perfeita. O portfólio da minha nova coleção ficou com um ar de revista internacional. Comprometimento absurdo com o resultado.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
    {
        name: 'Rafael Mendes',
        role: 'Retrato Corporativo',
        content: 'Elevou a percepção da minha marca pessoal em 100%. Me deixou super à vontade durante a sessão e a entrega das fotos finais foi muito antes do prazo esperado. Recomendo de olhos fechados.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light tracking-tight mb-4"
                    >
                        Palavras de quem viveu
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl"
                    >
                        A fotografia é sobre conexão. Veja as experiências de alguns clientes maravilhosos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative bg-background border border-border p-8 rounded-2xl shadow-sm interactive"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-foreground/80 font-light italic mb-8 relative z-10">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
