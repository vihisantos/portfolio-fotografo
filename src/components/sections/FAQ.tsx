import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Com quanta antecedência devo reservar a data do meu casamento?',
        answer: 'Para casamentos, o ideal é entrar em contato com pelo menos 6 a 12 meses de antecedência. Minha agenda aos fins de semana costuma preencher rápido. Para outros ensaios (retrato, editorial), 3 a 4 semanas é o suficiente.'
    },
    {
        question: 'Você viaja para fotografar em outros estados ou países?',
        answer: 'Sim! Amo explorar novas locações e registrar histórias em qualquer canto do mundo. Os pacotes funcionam da mesma forma, apenas com o acréscimo das despesas de viagem (passagem, hospedagem e deslocamento).'
    },
    {
        question: 'Qual é o prazo de entrega das fotos prontas?',
        answer: 'Para casamentos, minha entrega costuma ocorrer entre 30 e 45 dias úteis, devido à quantidade de material e curadoria rigorosa. Para ensaios curtos, editoriais ou retratos corporativos, entre 10 e 15 dias úteis.'
    },
    {
        question: 'Quantas fotos são entregues no pacote Casamento?',
        answer: 'Sempre prezo pela qualidade frente à quantidade. Mas em média, num casamento de 10 horas, um número saudável é em torno de 600 a 900 fotos finalizadas, cobrindo todos os momentos da cerimônia à pista de dança.'
    },
    {
        question: 'As fotos vêm tratadas (color grading e retouch)?',
        answer: 'Sim. Absolutamente todas as fotos entregues passam por um processo de Color Grading, aplicando minha identidade visual que você viu por aqui no portfólio. Fotos que vão para o álbum também passam por retouch mais detalhado e fino de pele.'
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light tracking-tight mb-4"
                    >
                        Dúvidas Frequentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground"
                    >
                        As respostas que você precisa antes de darmos o próximo passo juntos.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border border-border rounded-xl overflow-hidden bg-muted/10 interactive"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <span className="font-medium text-lg text-foreground pr-8">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground font-light leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
