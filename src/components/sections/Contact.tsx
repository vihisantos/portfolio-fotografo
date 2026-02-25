import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-foreground text-background">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                            Vamos contar <br /><span className="font-serif italic text-muted">a sua história?</span>
                        </h2>
                        <p className="text-background/70 mb-8 font-light leading-relaxed">
                            Estou com a agenda aberta para a próxima temporada. Preencha o formulário e me conte um pouco sobre o que você tem em mente. Retorno em até 24 horas.
                        </p>
                        <div className="space-y-4 text-background/80">
                            <p>
                                <strong className="block font-medium text-background">Email</strong>
                                ola@framestudio.com
                            </p>
                            <p>
                                <strong className="block font-medium text-background">Telefone/WhatsApp</strong>
                                +55 (11) 99999-9999
                            </p>
                            <p>
                                <strong className="block font-medium text-background">Estúdio</strong>
                                São Paulo, SP - Atendimento com hora marcada.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-background text-foreground p-8 rounded-2xl shadow-xl"
                    >
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Nome completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    autoComplete="name"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="interest" className="text-sm font-medium text-muted-foreground">Motivo do contato</label>
                                <select
                                    id="interest"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                >
                                    <option value="casamento">Casamento</option>
                                    <option value="ensaio">Ensaio Pessoal / Retrato</option>
                                    <option value="editorial">Editorial de Moda</option>
                                    <option value="outro">Outro assunto</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5 mb-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    placeholder="Conte um pouco sobre suas ideias..."
                                ></textarea>
                            </div>

                            <Button type="button" size="lg" className="w-full">
                                Enviar Mensagem
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
